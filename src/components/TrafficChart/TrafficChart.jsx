import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import './trafficChart.css'
import { FaCaretUp } from "react-icons/fa";

Chart.register(...registerables);

const TrafficChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['00', '04', '08', '12', '16', '18'],
        datasets: [
          {
            label: 'Traffic',
            data: [10, 20, 30, 40, 50, 60],
            backgroundColor: '#5c58ff',
            borderRadius: 30,
            width: 10
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Ensures proper scaling
        scales: {
          y: {
            beginAtZero: true,
          },
        },

        hover: {
          mode: 'nearest',
          intersect: true,
          animationDuration: 500, // Hover animation duration
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className='traffic-chart'>
      <div className='chart-content'>
        <div>
          <div>Total Users</div>
          <h4 style={{color:"#2b3674"}}>2527</h4>
        </div>
        <div>
          <div>Daily Traffic <span style={{color:"#05cd99"}}><FaCaretUp/>+2.45%</span></div>
        </div>
      </div>
      <div className="chart-container">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default TrafficChart;
