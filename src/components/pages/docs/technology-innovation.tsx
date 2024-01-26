import { technology } from '@/assets/data/docs/technology-innovation';
import { DocNav } from '@/components/blocks/docs/doc-nav';
import React from 'react'

export const TechnologyInnovation = () => {
  return (
    <div>
      {technology.map((tech, index) => {
        return (
          <div key={index} className='text-white/90'>
            <h2 className='text-4xl font-display font-semibold text-white'>
              {tech.title}
            </h2>
            <p className='mt-2 text-lg text-pretty tracking-wide leading-relaxed'>
              {tech.tagline}
            </p>
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
                    <p className='mt-6 text-pretty tracking-wide leading-relaxed font-light'>
                      {desc.subdesc}
                    </p>
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
        prev={{ title: 'Solution Overview', link: '/docs/solution-overview' }}
        next={{ title: 'Real-World Scenarios', link: '/docs/real-world-scenarios' }}
      />
    </div>
  )
}
