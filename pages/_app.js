import '../public/assets/css/animate.min.css'
import React, { useEffect, useState } from "react";
import Head from 'next/head'

import '../public/assets/css/tailwind-built.css'
import Preloader from '../components/elements/Preloader';
import "swiper/css";
// import "/pages/styles/globals.css"
import "/pages/styles/tailwind.css"

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'


function MyApp({ Component, pageProps }) {
    const [supabase] = useState(() => createBrowserSupabaseClient())
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            <Head>
                <title>KECS</title>
            </Head>

            {!loading ? (
                <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
                    <Component {...pageProps} />
                </SessionContextProvider>
            ) : (
                <Preloader />
            )}
        </>
    )
}

// export default MyApp
export default (MyApp);

