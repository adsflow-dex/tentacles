'use client';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { addNewsLetter } from '@/actions/newsletter-action';
import { error } from 'console';
import { useEffect, useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { prisma } from '@/db';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
const FormButton = () => {
    const { pending, data } = useFormStatus();

    return (
        <>
            <button className="border rounded-r-full px-4" type="submit">
                {pending ? '..Loading' : 'Subscribe'}
            </button>
        </>
    );
};
const initialState: {
    email: string;
    status: boolean;
    message: string;
} = {
    email: '',
    status: false,
    message: '',
};

export function Newsletter() {
    const ref = useRef<HTMLFormElement>(null);
    const [state, formAction] = useFormState(addNewsLetter, initialState);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (state.status === true) {
            setOpenModal(true);
        }
    }, [state]);

    return (
        <div className="">
            <h6 className="text-xl font-semibold mb-2">Our Newsletter</h6>
            <p className="text-sm text-gray-500">Stay up to date!</p>
            <form ref={ref} action={formAction} className=" flex h-14 mt-4">
                <input
                    type="email"
                    required
                    name="email"
                    placeholder="Enter your email"
                    className=" appearance-none  w-full bg-transparent  rounded-l-full px-4 border focus:outline-none focus:bg-transparent focus:border-purple-500"
                />
                <FormButton />
            </form>
            <AlertDialog open={openModal}>
                <AlertDialogTrigger></AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-center">
                            {state.message === 'Thankyou for subscribing'
                                ? 'Thankyou for subscribing'
                                : 'You Had Already Subscribed To Our Newsletter'}
                        </AlertDialogTitle>
                        <AlertDialogDescription className="py-6">
                            <Image
                                src="/mail.png"
                                alt="mail"
                                height={60}
                                width={60}
                                className="invert mx-auto "
                            />
                            <p className="text-center mt-2">
                                {state.message === 'Thankyou for subscribing'
                                    ? 'Thank you for subscribing to our newsletter! 🎉  You can expect to receive the latest updates, industry insights, and exclusive offers right in your inbox.                                    '
                                    : 'Thank you for your continued subscription to our newsletter! 🎉 We appreciate your ongoing support.'}
                            </p>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogAction
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        className="rounded-full"
                    >
                        Continue
                    </AlertDialogAction>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
