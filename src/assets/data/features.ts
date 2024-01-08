import React from 'react';
import { Content, Growth, Marketing, Offices, Presentation } from '@/assets';

interface IFeatureItems {
  title: string;
  icon?: React.FC<any> | JSX.Element | null;
  desc: string;
  color: string;
}

export const features:IFeatureItems[] = [
    {
        title:"Advertisers & Marketers", 
        color:"border-orange-500",
        desc:"Whether you're a solopreneur with a budding vision or a multinational brand orchestrating global campaigns, AdsFlow empowers you to simplify campaign management, pinpoint your ideal audiences with laser precision, and maximize your ROI like never before.",
        icon:Marketing
    },
    {
        title:"Publishers & Content Creators",
        color:"border-pink-400",
        desc:"Cast off the shadows of intermediaries and claim your rightful spotlight! AdsFlow fosters direct connections with advertisers, ensuring fair compensation and transparent ad placements. Monetize your content effectively and forge mutually beneficial partnerships that amplify your reach.",
        icon:Content
    },
    {
        title:"Marketing Agencies & Professionals",
        color:"border-sky-400",
        desc:"Juggling multiple client campaigns is a juggling act no more. AdsFlow's unified dashboard becomes your conductor's baton, seamlessly orchestrating campaigns across diverse platforms. Watch client satisfaction soar as you reclaim control and unlock your agency's true potential.",
        icon:Presentation
    },
    {
        title:"Small & Medium-Sized Enterprises (SMEs)",
        color:"border-yellow-400",
        desc:"Conquering the advertising landscape doesn't have to be a Goliath's game. AdsFlow levels the playing field with customizable and scalable solutions designed for your specific needs. Witness the power of impactful advertising – even on a smaller stage, your brand can shine.",
        icon:Offices
    },
    {
        title:"Industry Innovators & Early Adopters",
        color:"border-violet-400",
        desc:"Are you the visionary leading the charge towards a brighter advertising future? Embrace the cutting-edge power of blockchain with AdsFlow and be at the forefront of revolutionizing transparency and efficiency. Rewrite the rules, pave the way for a more ethical and impactful advertising ecosystem.",
        icon:Growth
    },
]