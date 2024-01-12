import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

export function Faq() {
    const questionaries = [
        {
            title: 'What is AdsFlow?',
            desc: 'AdsFlow is a cutting-edge advertising platform leveraging blockchain technology to enhance transparency, reduce fraud, and provide a seamless experience for advertisers and publishers.',
        },
        {
            title: ' How does AdsFlow work?',
            desc: 'AdsFlow utilizes blockchain to secure transactions, track ad placements, and ensure transparent reporting. Advertisers can directly connect with publishers, reducing intermediaries and improving efficiency.',
        },
        {
            title: ' Why is blockchain used in AdsFlow?',
            desc: ' Blockchain ensures transparency, reduces ad fraud, and enhances the security of transactions in the advertising ecosystem. It provides a decentralized and tamper-proof ledger, increasing trust among advertisers and publishers.',
        },
        {
            title: 'What benefits does blockchain bring to AdsFlow?',
            desc: 'Blockchain in AdsFlow offers benefits such as increased transparency, reduced ad fraud, secure transactions, and improved accountability. It provides a more trustworthy and efficient advertising ecosystem.',
        },
        {
            title: ' Is there a native token for AdsFlow?',
            desc: ' Yes, AdsFlow has its native token (AFL) used for transactions, incentives, and governance within the platform.',
        },
        {
            title: 'How can I acquire AFL tokens?',
            desc: ' AFL tokens can be acquired through participation in public and private sales, or by engaging in specific activities within the AdsFlow platform.',
        },

        {
            title: 'What is the AFL Token, and how does it function within AdsFlow?',
            desc: " The AFL Token is the core element of AdsFlow's economic model, serving as a utility token. It enables users to access platform features, facilitate ad payments, and participate in governance mechanisms, fostering transparency and empowerment.",
        },
        {
            title: 'What are the use cases of the AFL Token?',
            desc: (
                <>
                    The AFL Token is versatile, supporting key functions such
                    as:
                    <ul>
                        <li>
                            Ad Transactions: Ensuring transparent and secure
                            transactions within AdsFlow&apos;s advertising
                            ecosystem.
                        </li>
                        <li>
                            Incentives and Rewards: Rewarding active community
                            participation, creating a vibrant user base.
                        </li>
                        <li>
                            Governance and Decision-Making: Token holders
                            influence platform decisions through voting
                            mechanisms, ensuring community-driven governance.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: 'How is the AFL Token distributed and allocated?',
            desc: (
                <>
                    The AFL Token allocation is as follows:
                    <ul>
                        <li>
                            Ecosystem Fund - Development: 1.5 billion AFL (15%)
                        </li>
                        <li>Team and Advisors: 0.8 billion AFL (8%)</li>
                        <li>Private Sale: 1 billion AFL (10%)</li>
                        <li>Public Sale: 1.2 billion AFL (12%)</li>
                        <li>Liquidity Pool: 2 billion AFL (20%)</li>
                        <li>
                            Content, Engagement, and App Integration: 2.5
                            billion AFL (25%)
                        </li>
                        <li>Community Rewards: 0.3 billion AFL (3%)</li>
                        <li>
                            Marketing and Partnerships: 0.7 billion AFL (7%)
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: 'How does AdsFlow ensure the sustainability of the AFL Token?',
            desc: (
                <>
                    AdsFlow ensures token integrity through:
                    <ul>
                        <li>
                            No Burn and No Additional Minting: No processes for
                            burning or creating additional tokens beyond the
                            initial supply.
                        </li>
                        <li>
                            Total Token Supply: The total AFL Token supply is
                            fixed at 10,000,000,000 tokens, ensuring a stable
                            and predictable token economy.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: 'How can I get in touch with AdsFlow support?',
            desc: ' For support, inquiries, or assistance, you can contact our customer support team at support@adsflow.com. We aim to respond promptly to your queries.',
        },
    ];
    return (
        <section className="py-10 relative min-h-[700px]">
            <div className="max-w-screen-md mx-auto">
                <h2 className="text-[7vw] md:text-4xl text-center text-balance font-semibold text-foreground mb-2 lg:pr-6 font-display">
                    FAQs
                </h2>

                <Accordion
                    type="single"
                    collapsible
                    className="mt-14 z-10 relative "
                >
                    {questionaries.map((i) => (
                        <AccordionItem
                            key={i.title}
                            value={i.title}
                            className="py-4 text-gray-400"
                        >
                            <AccordionTrigger>{i.title}</AccordionTrigger>
                            <AccordionContent>{i.desc}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <Image
                src="/grid3.png"
                className="opacity-5  z-0"
                alt="bg-faq"
                fill
                objectFit="cover"
                // height={200}
                // width={200}
            ></Image>
        </section>
    );
}
