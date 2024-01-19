'use client';
import { addNewsLetter } from '@/actions/newsletter-action';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
const FormButton = () => {
    const { pending, data } = useFormStatus();

    return (
      <>
        <button
          className='h-12 bg-gradient rounded-full px-8 py-2 hover:-translate-y-1 ease-in-out duration-300'
          type='submit'>
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
      <div className='h-fit py-6'>
        <div className='flex items-end gap-2 w-full justify-center'>
          <h6 className='text-xl font-semibold'>Our Newsletter</h6>
          <p className='text-sm text-gray-500'>Stay in the loop!</p>
        </div>
        <form
          ref={ref}
          action={formAction}
          className=' flex flex-wrap justify-end sm:justify-center gap-4 py-12'>
          <input
            type='email'
            required
            name='email'
            placeholder='Enter your email'
            className='w-full sm:max-w-80 appearance-none bg-input/50 h-12 rounded-full px-4 border border-white focus:outline-none focus:bg-white focus:text-input hover:bg-white hover:text-input focus:border-none focus:-translate-y-1 hover:-translate-y-1 ease-in-out duration-300'
          />
          <FormButton />
        </form>
        <AlertDialog open={openModal}>
          <AlertDialogTrigger asChild></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className='text-center'>
                {state.message === 'Thankyou for subscribing'
                  ? 'Thankyou for subscribing'
                  : 'You Had Already Subscribed To Our Newsletter'}
              </AlertDialogTitle>
              <AlertDialogDescription className='py-6'>
                <Image
                  src='/mail.png'
                  alt='mail'
                  height={60}
                  width={60}
                  className='invert mx-auto '
                />
                <p className='text-center mt-2'>
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
              className='rounded-full'>
              Continue
            </AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
}
