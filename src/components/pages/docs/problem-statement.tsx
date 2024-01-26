import { problem } from '@/assets/data/docs';
import { DocNav } from '@/components/blocks/docs/doc-nav';
import React from 'react';

export const ProblemStatement = () => {
  return (
    <div>
      {problem.map((prob, index) => {
        return (
          <div key={index} className='text-white/90'>
            <h2 className='text-4xl font-display font-semibold text-white'>
              {prob.title}
            </h2>
            <p className='mt-6 text-pretty tracking-wide leading-relaxed font-light'>
              {prob.description}
            </p>
            <ul className='flex flex-col mt-3 '>
              {prob.subDesc.map((desc, index) => {
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
                            <div className=' py-1'>
                              <span className='font-semibold pr-3'>
                                {item.listTitle}
                              </span>
                           {item.listDesc}
                            </div>
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
      <DocNav prev={{ title: 'Introduction', link: '/docs' }} next={{ title: 'Solution Overview', link: '/docs/solution-overview' }}/>
    </div>
  );
};
