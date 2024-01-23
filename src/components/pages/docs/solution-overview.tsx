import { solution } from '@/assets/data/docs';
import { DocNav } from '@/components/blocks/docs/doc-nav';
import React from 'react';

export const SolutionOverview = () => {
  return (
    <div>
      {solution.map((sol, index) => {
        return (
          <div key={index} className='text-white/70'>
            <h2 className='text-4xl font-display font-semibold text-white'>
              {sol.title}
            </h2>
            <p className='mt-2 text-lg text-pretty tracking-wide leading-relaxed'>
              {sol.tagline}
            </p>
            <p className='mt-6 text-pretty tracking-wide leading-relaxed font-light'>
              {sol.description}
            </p>
            <ul className='flex flex-col mt-3 pl-4'>
              {sol.body.map((desc, index) => {
                return (
                  <li
                    key={index}
                    className='py-3 text-pretty tracking-wide leading-relaxed font-light'>
                    {desc.subtitle && (
                      <h3 className='text-xl font-semibold font-display'>
                        {desc.subtitle}
                      </h3>
                    )}
                    <p className='mt-6 text-pretty tracking-wide leading-relaxed font-light'>
                      {desc.subdesc}
                    </p>
                  </li>
                );
              })}
            </ul>
            <p className='mt-6 text-pretty tracking-wide leading-relaxed font-light'>
              {sol.endnote}
            </p>
          </div>
        );
      })}
      <DocNav
        prev={{ title: 'Problem Statement', link: '/docs/problem-statement' }}
        next={{ title: 'Technology & Innovation', link: '/docs/technology-innovation' }}
      />
    </div>
  );
};
