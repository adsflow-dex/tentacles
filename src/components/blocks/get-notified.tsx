'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

import { addNewsLetter } from '@/actions/newsletter-action';
import { error } from 'console';
import { useEffect, useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { prisma } from '@/db';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import { Button } from '..';
const FormButton = ({ children }: { children: React.ReactNode }) => {
    const { pending, data } = useFormStatus();

    return (
        <>
            <Button
                className="border rounded-full py-6 w-full mt-6"
                type="submit"
            >
                {pending ? '..Loading' : children}
            </Button>
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

export function GetNotified() {
    const ref = useRef<HTMLFormElement>(null);
    const [state, formAction] = useFormState(addNewsLetter, initialState);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (state.status === true) {
            setOpenModal(true);
        }
    }, [state]);

    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogTrigger className="w-full justify-center sm:w-fit flex items-center tracking-wider py-4 rounded-full uppercase text-white transition duration-500 ease-in-out transform bg-gradient  hover:-translate-y-1 px-8 text-md md:mt-0 focus:shadow-outline">
                Get Notified
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    {!state.status ? (
                        <>
                            <DialogTitle className="text-center">
                                Get Notified
                            </DialogTitle>
                            <DialogDescription className="py-6">
                                <form
                                    ref={ref}
                                    action={formAction}
                                    className=""
                                >
                                    <Image
                                        src="/mail.png"
                                        alt="mail"
                                        height={60}
                                        width={60}
                                        className="invert mx-auto "
                                    />
                                    <p className="text-base my-4 text-center">
                                        Get Notified! Stay Tuned with the Latest
                                        Updates.
                                    </p>
                                    <input
                                        type="email"
                                        required
                                        name="email"
                                        placeholder="Enter your email"
                                        className="mt-4 h-14  appearance-none  w-full bg-transparent  rounded-full px-4 border focus:outline-none focus:bg-transparent focus:border-purple-500"
                                    />
                                    <FormButton>Continue</FormButton>
                                </form>
                            </DialogDescription>
                        </>
                    ) : (
                        <>
                            <DialogTitle className="text-center">
                                You will Receive a mail Shortly!
                            </DialogTitle>
                            <DialogDescription className="py-6">
                                <Image
                                    src="/mail.png"
                                    alt="mail"
                                    height={60}
                                    width={60}
                                    className="invert mx-auto "
                                />
                                <p className="text-center mt-2">
                                    {state.message === ''
                                        ? 'Thank you for subscribing to our newsletter! 🎉  You can expect to receive the latest updates, industry insights, and exclusive offers right in your inbox.                                    '
                                        : 'Thank you for your continued subscription to our newsletter! 🎉 We appreciate your ongoing support.'}
                                </p>
                            </DialogDescription>
                        </>
                    )}
                </DialogHeader>
                <DialogFooter>
                    {state.status && (
                        <Button
                            className="border rounded-full py-6 w-full mt-6"
                            onClick={() => setOpenModal(false)}
                        >
                            Continue
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
