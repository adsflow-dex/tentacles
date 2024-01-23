import { faq } from '@/assets';
import { DocNav } from '@/components/blocks/docs/doc-nav';
import React from 'react';

interface IFAQ {
  title: string;
  tagline: string;
  description: string;
  body: {
    subtitle: string;
    list: {
      title?: string;
      desc?: string;
      sublist?: {
        title?: string;
        desc?: string;
      }[];
    }[];
  }[];
}

export const FrequentlyAskedQuestions = () => {
  return (
    <div>
      {faq.map((faqs: IFAQ, index: number) => {
        return (
          <div key={index} className='text-white/70'>
            <h2 className='text-4xl font-display font-semibold text-white'>
              {faqs.title}
            </h2>
            <p className='mt-2 text-lg text-pretty tracking-wide leading-relaxed'>
              {faqs.tagline}
            </p>
            <p className='mt-6 text-pretty tracking-wide leading-relaxed font-light'>
              {faqs.description}
            </p>
            <ul className='flex flex-col mt-3 pl-2'>
              {faqs.body.map((desc, index) => {
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
                      {desc.list?.map((item, index) => {
                        return (
                          <li key={index}>
                            <div className='py-1'>
                              <span className='font-semibold pr-3'>
                                {item.title}
                              </span>
                              {item.desc}
                            </div>
                            {item.sublist && (
                              <ul className='flex flex-col list-[circle] pl-6 mb-4'>
                                {item.sublist.map((sub, index) => {
                                  return (
                                    <li key={index}>
                                      <div className='py-1'>
                                        <span className='font-semibold pr-3'>
                                          {sub.title}
                                        </span>
                                        {sub.desc}
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
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
        prev={{ title: 'Roadmap', link: '/docs/roadmap' }}
        next={{
          title: 'Glossary',
          link: '/docs/glossary',
        }}
      />
    </div>
  );
};
