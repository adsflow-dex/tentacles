'use client';

import { addNewsLetter } from '@/actions/newsletter-action';
import { error } from 'console';
import { useRef } from 'react';
import { useFormStatus } from 'react-dom';
const FormButton = () => {
    const { pending } = useFormStatus();
    return <button type="submit">{pending ? 'loading' : 'Subscribe'}</button>;
};
export async function Newsletter() {
    const ref = useRef<HTMLFormElement>(null);
    return (
        <div className="  py-4 px-2 rounded-lg">
            <h6 className="text-xl font-semibold mb-2">
                Subscribe to
                <br />
                Our Newsletter
            </h6>
            <form
                ref={ref}
                action={async (formData) => {
                    ref.current?.reset();
                    const res = await addNewsLetter(formData);
                    if (res?.error) {
                        return alert(res.error);
                    }
                    return alert('Subscribed');
                }}
                className="h-12 rounded-full border flex items-center overflow-hidden "
            >
                <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    className="flex-1 h-full"
                />
                <FormButton />
            </form>
        </div>
    );
}
