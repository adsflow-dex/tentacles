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
const FormButton = () => {
    const { pending, data } = useFormStatus();

    return (
        <>
            <button className="border rounded-r-full px-4" type="submit">
                {pending ? 'loading' : 'Subscribe'}
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
    console.log('🚀 ~ Newsletter ~ state:', state);

    useEffect(() => {
        // let timeout: ReturnType<typeof setTimeout>;
        if (state.status === true) {
            setOpenModal(true);
            // timeout = setTimeout(() => {
            //     setOpenModal(false);
            // }, 3000);
        }
        // return () => {
        //     clearTimeout(timeout);
        // };
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
                        <AlertDialogTitle>
                            {state.message === 'Thankyou for subscribing'
                                ? 'Thankyou for subscribing'
                                : 'You Had Already Subscribed To Our Newsletter'}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Hic ex magnam ea?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogAction
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        Continue
                    </AlertDialogAction>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
