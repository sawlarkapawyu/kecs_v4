import React from 'react';
import Layout from '../components/layout/Layout';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

const Login = () => {
    const supabaseClient = useSupabaseClient()
    const user = useUser()
    const [data, setData] = useState()
    const supabase = useSupabaseClient()
    const router = useRouter();

    useEffect(() => {
        async function loadData() {
          const { data } = await supabaseClient.from('test').select('*')
          setData(data)
        }
        // Only run query once user is logged in.
        if (user) loadData()
    }, [user])
    
    // Listen for changes to the `user` variable
    useEffect(() => {
        // If the user is logged in, redirect to the profile page
        if (user) {
        router.push('/users/profile');
        }
    }, [user]);
    
    if (!user)
    return (
        <>
            <Layout>
                <section className="relative pb-20">
                    <div className="absolute inset-0 hidden w-1/2 ml-auto lg:block">
                        <div className="flex items-center h-full wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            <img className="mx-auto lg:max-w-lg" src="/assets/imgs/illustrations/space.svg" alt="Monst" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="relative flex flex-wrap pt-12">
                            <div className="w-full py-6 lg:flex lg:flex-col lg:w-1/2 lg:pr-20">
                                <div className="w-full max-w-lg mx-auto my-auto lg:mx-0 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                
                                    <span className="text-sm text-blueGray-400">Sign In</span>
                                    <h4 className="mb-6 text-3xl">Sign in to your Account</h4>
                                    
                                    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa, 
                                        variables: {
                                        default: {
                                        colors: {
                                                brand: '#1E90FF',
                                                brandAccent: '#00BFFF',
                                                },
                                            },
                                        } }} socialLayout="horizontal" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
    return (
        <>
          {/* Your login form code here */}
        </>
      );
};

export default Login;