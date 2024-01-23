import { faq } from '@/assets';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components';
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
                      <h3 className='text-2xl font-semibold font-display text-white/90'>
                        {desc.subtitle}
                      </h3>
                    )}

                    <ul className='flex flex-col list-disc pl-4 mt-4'>
                      {desc.list?.map((item, index) => {
                        return (
                          <li key={index}>
                            <Accordion type='single' collapsible>
                              <AccordionItem className='border-b-none' value={item.title!}>
                                <AccordionTrigger>
                                  <p className='font-semibold py-1 pr-3'>
                                    {item.title}
                                  </p>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <p className='text-base'>{item.desc}</p>
                                  {item.sublist && (
                                    <ul className='flex flex-col list-[circle] pl-6 mt-2 mb-4 text-base'>
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
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
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
