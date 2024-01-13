'use server';
import { prisma } from '@/db';

export const createContact = async (prev: any, formData: FormData) => {
    const email = formData.get('email') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const company = formData.get('company') as string;
    const project = formData.get('project') as string;
    const reason = formData.get('reason') as string;

    if (!email || !firstName || !lastName)
        return {
            email,
            firstName,
            lastName,
            company,
            project,
            reason,
            status: false,
            message: 'fields are required',
        };
    try {
        //check if email already exists
        const findEmail = await prisma.contact.findMany({
            where: {
                email: email,
            },
        });

        if (findEmail.length) {
            return {
                email,
                firstName,
                lastName,
                company,
                project,
                reason,
                status: true,
                message: 'Email already exists',
            };
        } else {
            await prisma.contact.create({
                data: {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    company: company,
                    project: project,
                    reason: reason,
                },
            });
            return {
                email,
                firstName,
                lastName,
                company,
                project,
                reason,
                status: true,
                message: 'Thankyou for contacting us',
            };
        }
    } catch (error) {
        return {
            email,
            firstName,
            lastName,
            company,
            project,
            reason,
            status: false,
            message: 'Something went wrong',
        };
    }
};
