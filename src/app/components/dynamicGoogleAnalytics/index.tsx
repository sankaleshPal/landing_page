"use client";
import React, { memo } from "react";
import Script from "next/script";

const MemoGoogleAnalytics = () => {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={"https://www.googletagmanager.com/gtag/js?id=G-H9WDHFYR0M"}
            />

            <Script id="ga-script" strategy="lazyOnload">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-H9WDHFYR0M');
          `}
            </Script>
        </>
    );
};

const GoogleAnalytics = memo(MemoGoogleAnalytics);
export default GoogleAnalytics;

