import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const initialMarketData = {
    TCS: {
        currentPrice: 3250.50,
        change: 25.75,
        volume: 1500000,
        history: Array.from({ length: 20 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 3200 + Math.random() * 100 + i * 5,
        })),
    },
    WIPRO: {
        currentPrice: 410.20,
        change: -5.30,
        volume: 2500000,
        history: Array.from({ length: 20 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 400 + Math.random() * 50 - i * 2,
        })),
    },
    ONGC: {
        currentPrice: 160.80,
        change: 3.10,
        volume: 3000000,
        history: Array.from({ length: 20 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 155 + Math.random() * 20 + i * 1.5,
        })),
    },
    RELIANCE: {
        currentPrice: 2450.00,
        change: 12.50,
        volume: 2000000,
        history: Array.from({ length: 20 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 2400 + Math.random() * 150 + i * 7,
        })),
    },
    HDFC: {
        currentPrice: 2700.75,
        change: -18.25,
        volume: 1800000,
        history: Array.from({ length: 20 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 2750 + Math.random() * 100 - i * 10,
        })),
    },
    INFY: {
        currentPrice: 1650.25,
        change: 8.75,
        volume: 2200000,
        history: Array.from({ length: 20 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 1600 + Math.random() * 120 + i * 6,
        })),
    },
    SBI: {
        currentPrice: 520.50,
        change: 6.30,
        volume: 4000000,
        history: Array.from({ length: 20 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 510 + Math.random() * 30 + i * 3,
        })),
    },
    ICICI: {
        currentPrice: 680.20,
        change: 9.50,
        volume: 3500000,
        history: Array.from({ length: 20 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 670 + Math.random() * 40 + i * 4,
        })),
    },
    AXISBANK: {
        currentPrice: 750.00,
        change: -7.80,
        volume: 2800000,
        history: Array.from({ length: 20 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 760 + Math.random() * 60 - i * 2.5,
        })),
    },
    LT: {
        currentPrice: 1800.00,
        change: 15.20,
        volume: 1200000,
        history: Array.from({ length: 20 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 1750 + Math.random() * 100 + i * 8,
        })),
    },
    MARUTI: {
        currentPrice: 8500.00,
        change: 45.00,
        volume: 900000,
        history: Array.from({ length: 20 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 8400 + Math.random() * 200 + i * 12,
        })),
    },
    SBIN: {
        currentPrice: 520.50,
        change: 6.30,
        volume: 4000000,
        history: Array.from({ length: 20 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 510 + Math.random() * 30 + i * 3,
        })),
    }
};

const StockMarket = () => {
    const [marketData, setMarketData] = useState(initialMarketData);
    const [loading, setLoading] = useState(false);
    const [activeCompany, setActiveCompany] = useState('TCS');

    useEffect(() => {
        const intervalId = setInterval(() => {

            const updatedData = {};
            for (const company in initialMarketData) {
                updatedData[company] = {
                    ...initialMarketData[company],
                    currentPrice: initialMarketData[company].currentPrice + (Math.random() - 0.5) * 50,
                    change: initialMarketData[company].change + (Math.random() - 0.5) * 5,
                    volume: initialMarketData[company].volume + Math.floor(Math.random() * 1000000),
                    history: initialMarketData[company].history.map(day => ({
                        ...day,
                        price: day.price + (Math.random() - 0.5) * 20,
                    })),
                };
            }
            setMarketData(updatedData);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const companyList = Object.keys(marketData);
    const activeCompanyData = marketData[activeCompany] || {
        currentPrice: 0,
        change: 0,
        volume: 0,
        history: [],
    };

    const isPositiveChange = activeCompanyData.change >= 0;

    const priceHistoryChart = (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={activeCompanyData.history}>
                <defs>
                    <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={isPositiveChange ? "rgba(56, 189, 248, 0.8)" : "rgba(244, 114, 182, 0.8)"} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={isPositiveChange ? "rgba(56, 189, 248, 0)" : "rgba(244, 114, 182, 0)"} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                <XAxis dataKey="date" stroke="#fff" tick={{ fill: '#fff' }} />
                <YAxis stroke="#fff" tick={{ fill: '#fff' }} />
                <Tooltip
                    contentStyle={{ backgroundColor: '#333', borderColor: 'transparent', color: '#fff' }}
                    labelStyle={{ color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                />
                <Area
                    type="monotone"
                    dataKey="price"
                    stroke={isPositiveChange ? "#38bdf8" : "#f472b6"}
                    fillOpacity={1}
                    fill="url(#priceGradient)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#000',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', spaceY: '2rem' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                    color: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '2rem'
                }}>
                    Market Overview
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                   
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                       
                        '@media (min-width: 768px)': {
                            width: '200px',
                            flexDirection: 'column'
                        },
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div style={{ padding: '1rem' }}>
                            <h2 style={{ fontSize: '1.25rem', color: '#fff' }}>Companies</h2>
                        </div>
                        <div style={{ padding: '1rem', spaceY: '0.5rem' }}>
                            {loading ? (
                                <div style={{ spaceY: '0.5rem' }}>
                                    <div style={{ height: '2rem', width: '100%', backgroundColor: '#4a5568', borderRadius: '0.375rem' }}></div>
                                    <div style={{ height: '2rem', width: '100%', backgroundColor: '#4a5568', borderRadius: '0.375rem' }}></div>
                                    <div style={{ height: '2rem', width: '100%', backgroundColor: '#4a5568', borderRadius: '0.375rem' }}></div>
                                </div>
                            ) : (
                                <div style={{ spaceY: '0.5rem' }}>
                                    {companyList.map(company => (
                                        <button
                                            key={company}
                                            onClick={() => setActiveCompany(company)}
                                            style={{
                                                width: '100%',
                                                padding: '0.75rem',
                                                textAlign: 'left',
                                                borderRadius: '0.375rem',
                                                color: '#fff',
                                                cursor: 'pointer',
                                                backgroundColor: activeCompany === company ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                                                border: 'none',
                                                transition: 'background-color 0.2s ease',
                                                ...(activeCompany === company
                                                    ? { color: '#3b82f6' }
                                                    : { color: '#fff', ':hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } })
                                            }}
                                        >
                                            {company}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Market Data Card */}
                    <div style={{
                        width: '100%',
                        '@media (min-width: 768px)': {
                            width: 'calc(100% - 220px)' 
                        },
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div style={{ padding: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h2 style={{ fontSize: '1.25rem', color: '#fff' }}>
                                    {loading ? (
                                        <div style={{ height: '1.5rem', width: '50%', backgroundColor: '#4a5568', borderRadius: '0.375rem' }}></div>
                                    ) : (
                                        activeCompany
                                    )}
                                </h2>
                                <div style={{
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '1rem',
                                    fontSize: '0.75rem',
                                    color: '#fff',
                                    
                                    backgroundColor: isPositiveChange ? 'green' : 'red'
                                }}>
                                    {loading ? '0.00' : (isPositiveChange ? '+' : '') + activeCompanyData.change.toFixed(2)}
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '1rem', spaceY: '1.5rem' }}>
                            {loading ? (
                                <div style={{ spaceY: '1rem' }}>
                                    <div style={{ height: '2rem', width: '100%', backgroundColor: '#4a5568', borderRadius: '0.375rem' }}></div>
                                    <div style={{ height: '2rem', width: '100%', backgroundColor: '#4a5568', borderRadius: '0.375rem' }}></div>
                                    <div style={{ height: '16rem', width: '100%', backgroundColor: '#4a5568', borderRadius: '0.375rem' }}></div>
                                </div>
                            ) : (
                                <>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem' }}>
                                        <div>
                                            <p style={{ fontSize: '0.875rem', color: '#a0aec0' }}>Current Price</p>
                                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
                                                ${activeCompanyData.currentPrice.toFixed(2)}
                                            </p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.875rem', color: '#a0aec0' }}>Volume</p>
                                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
                                                {activeCompanyData.volume.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.125rem', fontWeight: 'semibold', color: '#fff', marginBottom: '1rem' }}>Price History</h3>
                                        {priceHistoryChart}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockMarket;
