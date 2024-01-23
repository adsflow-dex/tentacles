import { roadmap } from '@/assets/data/docs';
import { DocNav } from '@/components/blocks/docs/doc-nav';
import React from 'react';

export const RoadmapDetail = () => {
  return (
    <div>
      {roadmap.map((roadmap, index) => {
        return (
          <div key={index} className='text-white/70'>
            <h2 className='text-4xl font-display font-semibold text-white'>
              {roadmap.title}
            </h2>
            <p className='mt-2 text-lg text-pretty tracking-wide leading-relaxed'>
              {roadmap.tagline}
            </p>
            <p className='mt-6 text-pretty tracking-wide leading-relaxed font-light'>
              {roadmap.description}
            </p>
            <ul className='flex flex-col mt-3 pl-4'>
              {roadmap.body.map((desc, index) => {
                return (
                  <li
                    key={index}
                    className='py-3 text-pretty tracking-wide leading-relaxed font-light'>
                    {desc.subtitle && (
                      <h3 className='text-xl font-semibold font-display'>
                        {desc.subtitle}
                      </h3>
                    )}
                    <ul className='flex flex-col list-disc pl-4 mt-4'>
                      {desc.list.map((item, index) => {
                        return (
                          <li key={index}>
                            <div className=' py-1'>{item.desc}</div>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <DocNav
        prev={{
          title: '( Tokenomics ) Ecosystem Sustainability',
          link: '/docs/tokenomics/ecosystem-sustainability',
        }}
        next={{
          title: 'Frequently Asked Questions',
          link: '/docs/frequently-asked-questions',
        }}
      />
    </div>
  );
};
