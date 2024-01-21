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
        data: [15, 8, 10, 12, 20, 25, 3, 7],
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
          'rgba(0 0 0 0)',
          'rgba(0 0 0 0)',
          'rgba(0 0 0 0)',
          'rgba(0 0 0 0)',
          'rgba(0 0 0 0)',
          'rgba(0 0 0 0)',
          'rgba(0 0 0 0)',
          'rgba(0 0 0 0)',
        ],
        borderWidth: 6,
        borderRadius: 8,
      },
    ],
  };
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <section className='w-full min-h-fit mt-12'>
      <div className='max-w-screen-xl mx-auto w-full gap-4 z-10 p-5'>
        <div className=''>
          <h1 className='text-[7vw] md:text-4xl text-center text-balance font-semibold text-foreground mb-2 lg:pr-6 font-display'>
            Adsflow&apos;s Tokenomics
          </h1>
          <p className='text-muted-foreground sm:text-xl text-center lg:pr-6'>
            Unveiling the Power of AFL Token
          </p>
        </div>
        <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-12 mt-20'>
          <div className='h-96 basis-full md:basis-1/2 flex justify-center md:justify-end'>
            <Doughnut data={datasets} options={{ cutout: 140 }} />
          </div>
          <div className='basis-full md:basis-1/2 sm:px-5 md:px-0'>
            <h3 className='text-2xl font-semibold font-display'>
              Token Distribution and Allocation
            </h3>
            <p className='text-lg font-light text-muted-foreground'>
              The AFL Token is allocated across various categories within the
              AdsFlow ecosystem:
            </p>
            <ul className='list-decimal list-inside pl-4 py-6 text-muted-foreground font-light'>
              <li>
                <span className='font-semibold text-white mr-2 text-lg'>
                  Ecosystem Fund - Development:
                </span>
                1.5 billion AFL (15%)
              </li>
              <li>
                <span className='font-semibold text-white mr-2 text-lg'>
                  Team and Advisors:
                </span>
                0.8 billion AFL (8%)
              </li>
              <li>
                <span className='font-semibold text-white mr-2 text-lg'>
                  Private Sale:{' '}
                </span>
                1 billion AFL (10%)
              </li>
              <li>
                <span className='font-semibold text-white mr-2 text-lg'>
                  Public Sale:
                </span>
                1.2 billion AFL (12%)
              </li>
              <li>
                <span className='font-semibold text-white mr-2 text-lg'>
                  Liquidity Pool:
                </span>
                2 billion AFL (20%)
              </li>
              <li>
                <span className='font-semibold text-white mr-2 text-lg'>
                  Content, Engagement, and App Integration:
                </span>
                2.5 billion AFL (25%)
              </li>
              <li>
                <span className='font-semibold text-white mr-2 text-lg'>
                  Community Rewards:
                </span>
                0.3 billion AFL (3%)
              </li>
              <li>
                <span className='font-semibold text-white mr-2 text-lg'>
                  Marketing and Partnerships:
                </span>
                0.7 billion AFL (7%)
              </li>
            </ul>
          </div>
        </div>
        <p className='text-center mt-20'>
          <a
            href='/docs/tokenomics'
            className='inline-flex items-center text-foreground hover:text-muted-foreground/80 ease-in-out duration-200'>
            Learn more about AdsFlow&apos;s Tokenomics{' '}
            <svg
              className='ml-1 w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'></path>
            </svg>
          </a>
        </p>
      </div>
    </section>
  );
};
