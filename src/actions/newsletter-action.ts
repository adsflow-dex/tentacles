'use server';

import { prisma } from '@/db';
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
        user: 'adsflownet@gmail.com',
        pass: 'xsmtpsib-f6ead1e28cd67fa573586fcf96d6dc3b4ce468ce659ee305b630102e5696bbd7-gnKhPyAGFkIBLrJZ',
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
            await sendMail(email);
        } else {
            const newNewsletter = await prisma.newsletter.create({
                data: {
                    email: email,
                },
            });
            await sendMail(email);
        }
        return { email, status: true };
    } catch (error) {
        return { email, status: false };
    }
};
