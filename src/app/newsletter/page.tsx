import { NewsletterComponent } from '@/components/hubspot';

function Newsletter() {
    return (
        <div className="mt-40 bg-white py-28">
            <h1 className="text-black text-3xl font-bold text-center mb-10 ">
                Get Notified
            </h1>
            <NewsletterComponent />
        </div>
    );
}

export default Newsletter;
