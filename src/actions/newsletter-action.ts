'use server';

import { prisma } from '@/db';

export const addNewsLetter = async (formData: FormData) => {
    const email = formData.get('email');
    if (!email) return { error: 'Email is required' };
    try {
        //check if email already exists
        const findEmail = await prisma.newsletter.findMany({
            where: {
                email: email as string,
            },
        });
        if (findEmail.length) return { error: 'Email already exists' };
        const newNewsletter = await prisma.newsletter.create({
            data: {
                email: email as string,
            },
        });
    } catch (error) {
        return { error };
    }
};
