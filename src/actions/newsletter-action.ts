'use server';

import { prisma } from '@/db';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
        user: 'adsflownet@gmail.com',
        pass: 'xsmtpsib-f6ead1e28cd67fa573586fcf96d6dc3b4ce468ce659ee305b630102e5696bbd7-TW0ODZfpsFEBa4gV',
    },
});

export const addNewsLetter = async (formData: FormData) => {
    const email = formData.get('email') as string;
    if (!email) return { error: 'Email is required' };
    try {
        //check if email already exists
        const findEmail = await prisma.newsletter.findMany({
            where: {
                email: email,
            },
        });
        if (findEmail.length) return { error: 'Email already exists' };
        const newNewsletter = await prisma.newsletter.create({
            data: {
                email: email,
            },
        });

        const info = await transporter.sendMail({
            from: '"Adsflow" adsflownet@gmail.com', // sender address
            to: email,
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
        });
    } catch (error) {
        console.log('🚀 ~ addNewsLetter ~ error:', error);
        return { error };
    }
};
