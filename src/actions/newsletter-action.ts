'use server';

import { prisma } from '@/db';
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
        user: 'adsflownet@gmail.com',
        pass: '7WOghyRI0kjpcZM5',
    },
});

const sendMail = async (receiverMail: string) => {
    await transporter.sendMail({
        from: '"Adsflow" adsflownet@gmail.com', // sender address
        to: receiverMail,
        subject: 'Thankyou for subscribing', // Subject line
        text: 'Thankyou for subscribing',
    });
};

export const addNewsLetter = async (prevState: any, formData: FormData) => {
    const email = formData.get('email') as string;
    if (!email) throw { error: 'Email is required' };
    try {
        //check if email already exists
        const findEmail = await prisma.newsletter.findMany({
            where: {
                email: email,
            },
        });
        if (findEmail.length) {
            return { email, status: true, message: 'Email already exists' };
        } else {
            const newNewsletter = await prisma.newsletter.create({
                data: {
                    email: email,
                },
            });
            await sendMail(email);
            return { email, status: true, message: 'Thankyou for subscribing' };
        }
    } catch (error) {
        return { email, status: false };
    }
};
