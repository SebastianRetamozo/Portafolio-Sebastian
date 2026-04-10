import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LiveFootball = () => {
    const [finalMatches, setFinalMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const FAVORITE_NAMES = ['Real Madrid', 'Universitario', 'Universitario de Deportes'];

    const formatEvent = (event) => {
        const competition = event.competitions[0];
        const homeTeam = competition.competitors.find(c => c.homeAway === 'home');
        const awayTeam = competition.competitors.find(c => c.homeAway === 'away');
        const state = event.status.type.state;
        
        return {
            id: event.id,
            home: homeTeam.team.shortDisplayName || homeTeam.team.name,
            away: awayTeam.team.shortDisplayName || awayTeam.team.name,
            homeLogo: homeTeam.team.logo,
            awayLogo: awayTeam.team.logo,
            score: `${homeTeam.score} - ${awayTeam.score}`,
            time: event.status.type.detail,
            isLive: state === 'in',
            status: state === 'in' ? 'EN VIVO' : 'PRÓXIMO',
            date: new Date(event.date).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
        };
    };

    const fetchData = async () => {
        try {
            // 1. Fetch simultáneo a fuentes confiables
            const urls = [
                'https://site.api.espn.com/apis/site/v2/sports/soccer/scoreboard', // Global
                'https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard', // España
                'https://site.api.espn.com/apis/site/v2/sports/soccer/per.1/scoreboard'  // Perú
            ];

            const results = await Promise.all(urls.map(url => fetch(url).then(res => res.json().catch(() => ({ events: [] })))));
            
            // Unificar todos los eventos
            const allEvents = results.flatMap(r => r.events || []);
            
            // Eliminar duplicados por ID
            const uniqueEvents = Array.from(new Map(allEvents.map(item => [item.id, item])).values());

            // Dividir en categorías
            const liveGlobal = uniqueEvents.filter(e => e.status.type.state === 'in');
            const scheduledFavorites = uniqueEvents.filter(e => {
                const teams = e.competitions[0].competitors.map(c => c.team.displayName);
                const hasFavorite = teams.some(name => FAVORITE_NAMES.some(fav => name.includes(fav)));
                return hasFavorite;
            });

            // Combinar: Prioridad En Vivo, luego Favoritos Programados
            let displayed = [...liveGlobal, ...scheduledFavorites];
            
            // Si después de eso sigue vacío, tomamos algunos globales programados para que no se vea vacío
            if (displayed.length === 0) {
                displayed = uniqueEvents.slice(0, 3);
            }

            const formatted = displayed.slice(0, 3).map(formatEvent);
            setFinalMatches(formatted);
            setError(false);
        } catch (err) {
            console.error("Error en Live Engine:", err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center bg-card rounded-[32px] border border-main">
                <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-dim">Sincronizando con ESPN...</span>
            </div>
        );
    }

    return (
        <div className="w-full h-full min-h-[300px] flex flex-col justify-between bg-card rounded-[32px] border border-main p-8 group relative overflow-hidden transition-all duration-500 hover:shadow-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${finalMatches.some(m => m.isLive) ? 'bg-red-500 animate-pulse' : 'bg-primary'} shadow-lg`} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-main">Sports Hub</span>
                </div>
                <div className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                   <span className="text-[8px] font-black text-primary uppercase tracking-widest">
                     {finalMatches.some(m => m.isLive) ? 'Live Now' : 'Schedule'}
                   </span>
                </div>
            </div>

            <div className="space-y-4 flex-1">
                <AnimatePresence mode="popLayout">
                    {finalMatches.length > 0 ? (
                        finalMatches.map((match) => (
                            <motion.div 
                                key={match.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center justify-between p-4 bg-background/40 rounded-2xl border border-main hover:border-primary/30 transition-all group/item"
                            >
                                <div className="flex items-center gap-3 w-[35%] overflow-hidden">
                                    <img src={match.homeLogo} alt="" className="w-6 h-6 object-contain flex-shrink-0" />
                                    <span className="text-[11px] font-bold text-main truncate">{match.home}</span>
                                </div>

                                <div className="flex flex-col items-center gap-1 w-[30%]">
                                    <span className="text-xs font-black tracking-tight text-main whitespace-nowrap">
                                        {match.isLive ? match.score : 'VS'}
                                    </span>
                                    <span className={`text-[7px] font-black px-2 py-0.5 rounded-full ${match.isLive ? 'bg-red-500/10 text-red-500' : 'bg-primary/10 text-primary'} uppercase text-center`}>
                                        {match.isLive ? match.time : match.date}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 w-[35%] justify-end text-right overflow-hidden">
                                    <span className="text-[11px] font-bold text-main truncate">{match.away}</span>
                                    <img src={match.awayLogo} alt="" className="w-6 h-6 object-contain flex-shrink-0" />
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full gap-4 py-8">
                             <span className="material-symbols-outlined text-4xl text-dim opacity-30 italic">sports_and_outdoors</span>
                             <p className="text-[10px] font-black text-dim italic text-center uppercase tracking-widest">
                                No events found
                             </p>
                        </div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-8 pt-4 border-t border-main flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="https://a.espncdn.com/favicon.ico" alt="" className="w-3 h-3 opacity-30" />
                    <p className="text-[8px] text-dim font-black uppercase tracking-widest">
                        API Live Stream
                    </p>
                </div>
                <div className="flex -space-x-1">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-5 h-5 rounded-full border border-background bg-slate-800 overflow-hidden ring-2 ring-background">
                            <img src={`https://i.pravatar.cc/100?img=${i+44}`} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LiveFootball;
