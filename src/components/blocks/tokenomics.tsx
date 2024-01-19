'use client';
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export const Tokenomics = () => {
  const datasets = {
    labels: [
      'Ecosystem Fund - Development',
      'Team and Advisors',
      'Private Sale',
      'Public Sale',
      'Liquidity Pool',
      'Content, Engagement and App Integration',
      'Community Rewards',
      'Marketing and Partnerships',
    ],
    datasets: [
      {
        label: '% of Tokens',
        data: [15, 8, 10, 12.5, 25, 25, 3, 7],
        backgroundColor: [
          'rgba(240, 230, 140, 1)',
          'rgba(240, 128, 128, 1)',
          'rgba(255, 182, 193, 1)',
          'rgba(147, 112, 219, 1)',
          'rgba(255, 255, 153, 1)',
          'rgba(143, 188, 143, 1)',
          'rgba(188, 143, 143, 1)',
          'rgba(240, 248, 255, 1)',
        ],
        borderColor: [
          'rgba(240, 230, 140, 1)',
          'rgba(240, 128, 128, 1)',
          'rgba(255, 182, 193, 1)',
          'rgba(147, 112, 219, 1)',
          'rgba(255, 255, 153, 1)',
          'rgba(143, 188, 143, 1)',
          'rgba(188, 143, 143, 1)',
          'rgba(240, 248, 255, 1)',
        ],
      },
    ],
  };
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <section className='w-full min-h-fit'>
      <div className='max-w-screen-xl mx-auto w-full flex gap-4 z-10 p-5'>
        <div className='h-64'>
          <Doughnut data={datasets} options={{cutout:90}}/>
        </div>
      </div>
    </section>
  );
};
