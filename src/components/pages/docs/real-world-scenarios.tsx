import { realworld } from '@/assets/data/docs/real-world-scenarios';
import { DocNav } from '@/components/blocks/docs/doc-nav';
import React from 'react';

export const RealWorldScenario = () => {
  return (
    <div>
      {realworld.map((tech, index) => {
        return (
          <div key={index} className='text-white/70'>
            <h2 className='text-4xl font-display font-semibold text-white'>
              {tech.title}
            </h2>
            <p className='mt-6 text-pretty tracking-wide leading-relaxed font-light'>
              {tech.description}
            </p>
            <ul className='flex flex-col mt-3 pl-4'>
              {tech.body.map((desc, index) => {
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
                                {item.title}
                              </span>
                              {item.desc}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
            <p className='mt-6 text-pretty tracking-wide leading-relaxed font-light'>
              {tech.endnote}
            </p>
          </div>
        );
      })}
      <DocNav
        prev={{ title: 'Technology & Innovation', link: '/docs/technology-innovation' }}
        next={{
          title: '( Utility ) Advertisers & Marketers',
          link: '/docs/utility/advertisers-marketers',
        }}
      />
    </div>
  );
};
