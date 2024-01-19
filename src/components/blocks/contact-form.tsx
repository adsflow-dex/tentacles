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
                className="col-span-2 md:col-span-1 w-full justify-center  flex items-center tracking-wider bg-gradient py-4 rounded-xl uppercase text-white transition duration-500 ease-in-out transform hover:-translate-y-1 px-8 text-md md:mt-0 focus:shadow-outline"
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
            placeholder: 'Email',
            required: true,
        },

        {
            name: 'firstName',
            type: 'text',
            placeholder: 'Firstname',
            required: true,
        },
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'Lastname',
            required: true,
        },
        {
            name: 'company',
            type: 'text',
            placeholder: 'Company',
            required: false,
        },
        {
            name: 'project',
            type: 'text',
            placeholder: 'Project',
            required: false,
        },
        {
            name: 'reason',
            type: 'text',
            placeholder: 'Reason for contact',
            required: false,
        },
    ];
    return (
        <div>
            <form
                ref={ref}
                action={async (formData: FormData) => {
                    ref.current?.reset();
                    await formAction(formData);
                }}
                className="grid grid-cols-2 gap-4"
            >
                {fields.map((i) => (
                    <input
                        key={i.name}
                        type={i.type}
                        required={i.required}
                        name={i.name}
                        placeholder={i.placeholder}
                        className={cn(
                            'appearance-none h-16 w-full bg-input/25 placeholder:text-white/50 rounded-xl px-4 border border-white/25 focus:outline-none focus:bg-transparent focus:border-white/50',
                            i.name === 'firstName' || i.name === 'lastName'
                                ? 'md:col-span-1 col-span-2'
                                : 'col-span-2'
                        )}
                    />
                ))}
                <div className="col-span-1"></div>
                <FormButton />
                {state.status === true && (
                    <p className="text-green-500 text-right col-span-2">
                        Submitted!
                    </p>
                )}
            </form>
        </div>
    );
}
