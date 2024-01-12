import React from 'react';

const page = () => {
    return (
        <div className="my-32">
            <h1 className="text-2xl text-center font-bold mb-7">LightPaper</h1>

            <iframe
                src="https://adsflow.s3.amazonaws.com/AdsFlow_Lightpaper_V1.pdf"
                className="h-[80vh] max-w-screen-lg w-full mx-auto"
                title="AdsFlow Lightpaper"
            ></iframe>
        </div>
    );
};

export default page;
