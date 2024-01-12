'use client';

import React, { useEffect } from 'react';

function NewsletterComponent() {
    useEffect(() => {
        if ((window as any).hbspt) {
            (window as any).hbspt.forms.create({
                region: 'na1',
                portalId: '44910036',
                formId: '0af17081-c55e-4d64-8839-2446cfcca715',
                target: '#hubspotForm',
            });
        }
    }, []);

    return <div id="hubspotForm" className="w-1/2 !bg-black mx-auto"></div>;
}

export { NewsletterComponent };
