import { NewsletterComponent } from '@/components/hubspot';

function Newsletter() {
    return (
        <div className="mt-24  bg-white min-h-screen  py-20">
            <h1 className="text-black text-4xl font-bold text-center mb-10 ">
                Get Notified
            </h1>
            <NewsletterComponent />
        </div>
    );
}

export default Newsletter;
