import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Colors from '../constant/Colors'

Chart.register(...registerables);

const RealTimeLapChart = () => {
    const maxVoltas = 10; // Número máximo de voltas
    const [currentLap, setCurrentLap] = useState(0);
    const [chartData, setChartData] = useState({
        labels: [], // Números das voltas
        datasets: [
            {
                label: 'Exibir Dados',
                data: [],
                borderColor: `${Colors.red_1}`,
                borderWidth: 2,
                fill: false,
            },
        ],
    });
    const [averageTime, setAverageTime] = useState(null); // Estado para armazenar a média

    // Função para formatar o tempo em minutos, segundos e milissegundos
    const formatTime = (timeInMs) => {
        const minutes = Math.floor(timeInMs / 60000); // Minutos
        const seconds = Math.floor((timeInMs % 60000) / 1000); // Segundos
        const milliseconds = Math.floor(timeInMs % 1000); // Milissegundos
        return `${minutes}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    };


    useEffect(() => {
        if (currentLap < maxVoltas) {
            const interval = setInterval(() => {
                // Gerar tempo de volta aleatório entre 70.000 ms (1 min 10 seg) e 90.000 ms (1 min 30 seg)
                const newLapTime = Math.floor(Math.random() * (80000 - 70000 + 1)) + 70000;

                setChartData((prevData) => {
                    const updatedData = [...prevData.datasets[0].data, newLapTime]; 

                    return {
                        labels: [...prevData.labels, `Volta ${currentLap + 1}`], 
                        datasets: [
                            {
                                ...prevData.datasets[0],
                                data: updatedData, 
                            },
                        ],
                    };
                });

                setCurrentLap((prevLap) => prevLap + 1);
            }, 4000); // Atualiza a cada 4 segundos

            return () => clearInterval(interval);
        } else if (currentLap === maxVoltas) {
    
            const tempoTotal = chartData.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
            const mediaCircuito = tempoTotal / maxVoltas;

            setAverageTime(mediaCircuito.toFixed(2))
        }
    }, [currentLap, maxVoltas, chartData.datasets[0].data]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                color: 'white',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Voltas',
                    color: 'white',
                },

                ticks: {
                    color: 'white',
                },
            },
            y: {
                title: {
                    color: 'white',
                    display: true,
                    text: 'Tempo (ms)',
                },

                ticks: {
                    color: 'white',
                },

                min: 65000,
                max: 85000,
            },
        },
    };


    return (
        <div className='bg-black flex flex-col items-center justify-center min-h-100dvh pt-6 gap-6'>

            {/* Titulo */}
            <h2 className={`text-red-600 text-center uppercase font-bold text-3xl`}>Malomotlar</h2>

            {/* Gráfico */}
            <Line className='p-7' data={chartData} options={options} />

            {/* Média das Voltas */}
            {currentLap === maxVoltas && (
                <div>
                    <h3 className='text-white text-center'>Malumot <strong className="text-red-600">{formatTime(averageTime)}</strong></h3>
                </div>
            )}
        </div>
    );
};

export default RealTimeLapChart;


