import { introduction } from '@/assets/data/docs';
import { DocNav } from '@/components/blocks/docs/doc-nav';
import React from 'react';

export const Introduction = () => {
  return (
    <div>
      {introduction.map((intro) => {
        return (
          <div key={intro.title} className='text-white/90 max-w-4xl'>
            <h2 className='text-4xl font-display font-semibold text-white'>
              {intro.title}
            </h2>
            <div className='mt-6'>
              {intro.description.map((desc, index) => {
                return (
                  <div
                    key={index}
                    className='py-3 text-pretty tracking-wide leading-relaxed font-light'>
                    {desc.subtitle && <h3 className=''>{desc.subtitle}</h3>}
                    <p className='text-white/90'>{desc.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <DocNav
        next={{ title: 'Problem Statement', link: '/docs/problem-statement' }}
      />
    </div>
  );
};
