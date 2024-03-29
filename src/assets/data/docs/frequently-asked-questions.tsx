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

export const faq: IFAQ[] = [
  {
    title: 'Frequently Asked Questions',
    tagline: 'Tailoring Solutions for Every Note',
    description:
      "AdsFlow isn't just a theoretical concept; it's a transformative force, ready to revolutionize advertising across diverse industries and challenges. Let's peek into real-world scenarios where AdsFlow empowers businesses to achieve unparalleled success:",
    body: [
      {
        subtitle: 'General Questions',
        list: [
          {
            title: 'What is AdsFlow?',
            desc: 'AdsFlow is a cutting-edge advertising platform leveraging blockchain technology to enhance transparency, reduce fraud, and provide a seamless experience for advertisers and publishers.',
          },
          {
            title: ' How does AdsFlow work?',
            desc: 'AdsFlow utilizes blockchain to secure transactions, track ad placements, and ensure transparent reporting. Advertisers can directly connect with publishers, reducing intermediaries and improving efficiency.',
          },
        ],
      },
      {
        subtitle: 'Blockchain and Technology',
        list: [
          {
            title: 'Why is blockchain used in AdsFlow?',
            desc: 'Blockchain ensures transparency, reduces ad fraud, and enhances the security of transactions in the advertising ecosystem. It provides a decentralized and tamper-proof ledger, increasing trust among advertisers and publishers.',
          },
          {
            title: 'What benefits does blockchain bring to AdsFlow?',
            desc: 'Blockchain in AdsFlow offers benefits such as increased transparency, reduced ad fraud, secure transactions, and improved accountability. It provides a more trustworthy and efficient advertising ecosystem.',
          },
          {
            title:
              'Why did AdsFlow choose Solana as the underlying blockchain?',
            desc: 'AdsFlow opted for Solana as its blockchain infrastructure for several compelling reasons:',
            sublist: [
              {
                title: 'Scalability',
                desc: "Solana is known for its high throughput and low transaction costs, making it well-suited for AdsFlow's decentralized advertising ecosystem with potentially high transaction volumes.",
              },
              {
                title: 'Fast Transaction Speeds',
                desc: "Solana's architecture allows for incredibly fast transaction speeds, ensuring quick and efficient ad transactions within the AdsFlow platform.",
              },
              {
                title: 'Low Transaction Costs',
                desc: "Solana's low transaction costs contribute to cost-effective ad placements, benefiting both advertisers and publishers on the AdsFlow network.",
              },
              {
                title: 'Decentralization and Security',
                desc: "Solana's secure and decentralized nature aligns with AdsFlow's commitment to transparency, fraud prevention, and a trustworthy advertising environment.",
              },
              {
                title: 'Developer-Friendly Ecosystem',
                desc: 'Solana provides a robust and developer-friendly ecosystem, facilitating smooth integration and the development of innovative features for AdsFlow.',
              },
              {
                title: 'Community Support',
                desc: 'Solana has gained significant community support and adoption, enhancing the overall credibility and reliability of the AdsFlow platform.',
              },
            ],
          },
        ],
      },
      {
        subtitle: 'Tokenomics and Economy',
        list: [
          {
            title: 'Is there a native token for AdsFlow?',
            desc: 'Yes, AdsFlow has its native token (AFL) used for transactions, incentives, and governance within the platform.',
          },
          {
            title: 'How can I acquire AFL tokens?',
            desc: 'AFL tokens can be acquired through participation in public and private sales, or by engaging in specific activities within the AdsFlow platform.',
          },
          {
            title:
              'What is the AFL Token, and how does it function within AdsFlow?',
            desc: "The AFL Token is the core element of AdsFlow's economic model, serving as a utility token. It enables users to access platform features, facilitate ad payments, and participate in governance mechanisms, fostering transparency and empowerment.",
          },
          {
            title: 'What are the use cases of the AFL Token?',
            desc: 'The AFL Token is versatile, supporting key functions such as:',
            sublist: [
              {
                title: 'Ad Transactions',
                desc: "Ensuring transparent and secure transactions within AdsFlow's advertising ecosystem.",
              },
              {
                title: 'Incentives and Rewards',
                desc: 'Rewarding active community participation, creating a vibrant user base.',
              },
              {
                title: 'Governance and Decision-Making',
                desc: 'Token holders influence platform decisions through voting mechanisms, ensuring community-driven governance.',
              },
            ],
          },
          {
            title: 'How is the AFL Token distributed and allocated?',
            desc: 'The AFL Token allocation is as follows:',
            sublist: [
              {
                title: 'Ecosystem Fund - Development',
                desc: '1.5 billion AFL (15%)',
              },
              {
                title: 'Team and Advisors',
                desc: '0.8 billion AFL (8%)',
              },
              { title: 'Private Sale', desc: '1 billion AFL (10%)' },
              { title: 'Public Sale', desc: '1.2 billion AFL (12%)' },
              { title: 'Liquidity Pool', desc: '2 billion AFL (20%)' },
              {
                title: 'Content, Engagement, and App Integration',
                desc: '2.5 billion AFL (25%)',
              },
              {
                title: 'Community Rewards',
                desc: '0.3 billion AFL (3%)',
              },
              {
                title: 'Marketing and Partnerships',
                desc: '0.7 billion AFL (7%)',
              },
            ],
          },
          {
            title:
              'How does AdsFlow ensure the sustainability of the AFL Token?',
            desc: 'AdsFlow ensures token integrity through:',
            sublist: [
              {
                title: 'No Burn and No Additional Minting',
                desc: 'No processes for burning or creating additional tokens beyond the initial supply.',
              },
              {
                title: 'Total Token Supply',
                desc: 'The total AFL Token supply is fixed at 10,000,000,000 tokens, ensuring a stable and predictable token economy.',
              },
            ],
          },
        ],
      },
      {
        subtitle: 'Security and Privacy',
        list: [
          {
            title: 'How is user data handled in AdsFlow?',
            desc: 'AdsFlow prioritizes user privacy and follows stringent data protection measures. Personally identifiable information is encrypted and handled securely, adhering to industry standards.',
          },
          {
            title: 'What measures are in place to prevent ad fraud?',
            desc: "AdsFlow employs advanced fraud detection mechanisms, leveraging blockchain's transparency to reduce fraudulent activities. Smart contracts and consensus mechanisms contribute to a more secure advertising environment.",
          },
        ],
      },
      {
        subtitle: 'Getting Started',
        list: [
          {
            title: 'How can I advertise on AdsFlow?',
            desc: "To advertise on AdsFlow, create an account, set up your campaign, and choose your target audience. The platform's user-friendly interface guides you through the process.",
          },
          {
            title: 'How do I become a publisher on AdsFlow?',
            desc: 'Publishers can join AdsFlow by registering on the platform. Once approved, you can connect with advertisers and monetize your digital assets.',
          },
        ],
      },
      {
        subtitle: 'Ad Campaigns and Performance',
        list: [
          {
            title: 'Can I track the performance of my ad campaigns on AdsFlow?',
            desc: 'Yes, AdsFlow provides detailed analytics and reporting tools to track the performance of your ad campaigns. You can monitor impressions, clicks, conversions, and other relevant metrics in real-time.',
          },
          {
            title: 'Are there targeting options available for ad campaigns?',
            desc: 'Absolutely! AdsFlow offers advanced targeting options, allowing advertisers to specify their audience based on demographics, interests, location, and other criteria. This helps optimize campaigns for maximum impact.',
          },
        ],
      },
      {
        subtitle: 'Payments and Transactions',
        list: [
          {
            title: 'How are payments handled on AdsFlow?',
            desc: 'AdsFlow transactions are conducted using AFL tokens. Advertisers can fund their accounts through AFL, and publishers receive payments in AFL tokens. This ensures quick and secure transactions within the platform.',
          },
          {
            title: 'Can I withdraw AFL tokens to external wallets?',
            desc: 'Yes, users can withdraw AFL tokens to their external wallets. AdsFlow provides a seamless process for transferring tokens, offering flexibility to users.',
          },
        ],
      },
      {
        subtitle: 'Community and Engagement',
        list: [
          {
            title:
              'Is there a community forum or discussion board for AdsFlow users?',
            desc: "Yes, AdsFlow has a vibrant community forum where users can discuss trends, share insights, and connect with fellow advertisers and publishers. It's a great place to stay informed and engaged.",
          },
          {
            title:
              'Are there any rewards for active users in the AdsFlow community?',
            desc: 'Absolutely! AdsFlow values community engagement. Users participating in discussions, providing feedback, and contributing to the ecosystem may be eligible for community rewards and incentives.',
          },
        ],
      },
      {
        subtitle: 'Platform Integration',
        list: [
          {
            title:
              'Can AdsFlow be integrated with third-party analytics tools?',
            desc: 'Yes, AdsFlow supports integration with popular third-party analytics tools. This allows advertisers and publishers to seamlessly incorporate AdsFlow data into their existing analytics infrastructure.',
          },
          {
            title:
              'Are there APIs available for developers to integrate AdsFlow features into their applications?',
            desc: 'Yes, AdsFlow provides APIs (Application Programming Interfaces) for developers. This allows for easy integration of AdsFlow features into external applications, enhancing versatility and functionality.',
          },
        ],
      },
      {
        subtitle: 'Future Development',
        list: [
          {
            title: 'What future developments can users expect from AdsFlow?',
            desc: "AdsFlow is committed to continuous improvement. Users can expect ongoing updates, new features, and collaborations to enhance the platform's capabilities, security, and user experience.",
          },
        ],
      },
      {
        subtitle: 'Support and Contact',
        list: [
          {
            title: 'How can I get in touch with AdsFlow support?',
            desc: 'For support, inquiries, or assistance, you can contact our customer support team at support@adsflow.com. We aim to respond promptly to your queries.',
          },
        ],
      },
    ],
  },
];
