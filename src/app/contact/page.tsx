import { ContactForm } from '@/components';
import React from 'react';

function Contact() {
    return (
        <div className="max-w-screen-xl px-4 lg:px-10 mx-auto w-full grid  lg:grid-cols-2 gap-4 mt-40 min-h-[70vh]">
            <div className="">
                <h1 className="text-5xl font-bold">Contact us</h1>
                <p className="text-sm font-gray-500 mt-4">
                    Have questions? We&apos;re here to help! For the speediest
                    resolution, we encourage you to check out our website first.
                    It&apos;s a treasure trove of information that might just
                    have what you&apos;re looking for. If you still need
                    assistance, our support team is just an email away at{' '}
                    <a href="mailto:adsflownet@gmail">
                        <span className=" underline hover:text-primary underline-offset-2 cursor-pointer">
                            adsflownet@gmail.com
                        </span>
                    </a>
                </p>
            </div>
            <div className="border rounded-3xl px-6 py-8 grid gap-1">
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;
