'use client';

import { createContact } from '@/actions/contact-action';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const FormButton = () => {
    const { pending, data } = useFormStatus();

    return (
        <>
            <button
                className="col-span-1 w-full justify-center  flex items-center tracking-wider bg-muted/50 py-4 rounded-full uppercase text-white border border-white transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:-translate-y-1 px-8 text-md md:mt-0 focus:shadow-outline"
                type="submit"
            >
                {pending ? '..Loading' : 'Submit'}
            </button>
        </>
    );
};
const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    project: '',
    reason: '',
    status: false,
    message: '',
};
export function ContactForm() {
    const ref = useRef<HTMLFormElement>(null);

    const [state, formAction] = useFormState(createContact, initialState);

    const fields = [
        {
            name: 'email',
            type: 'email',
            placeholder: 'Enter your email',
            required: true,
        },

        {
            name: 'firstName',
            type: 'text',
            placeholder: 'Enter your FirstName',
            required: true,
        },
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'Enter your LastName',
            required: true,
        },
        {
            name: 'company',
            type: 'text',
            placeholder: 'Enter your Company',
            required: false,
        },
        {
            name: 'project',
            type: 'text',
            placeholder: 'Enter your project',
            required: false,
        },
        {
            name: 'reason',
            type: 'text',
            placeholder: 'Enter your reason for contact',
            required: false,
        },
    ];
    return (
        <div>
            <form
                ref={ref}
                action={formAction}
                className="grid grid-cols-2 gap-8"
            >
                {fields.map((i) => (
                    <input
                        key={i.name}
                        type={i.type}
                        required={i.required}
                        name={i.name}
                        placeholder={i.placeholder}
                        className={cn(
                            'appearance-none h-16 w-full bg-transparent  rounded-full px-4 border focus:outline-none focus:bg-transparent focus:border-purple-500',
                            i.name === 'firstName' || i.name === 'lastName'
                                ? 'col-span-1'
                                : 'col-span-2'
                        )}
                    />
                ))}
                <div className="col-span-1"></div>
                <FormButton />
            </form>
        </div>
    );
}
