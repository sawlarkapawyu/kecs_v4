import React from 'react';
import Layout from '../../components/layout/Layout';
import Dashboard from '/components/users/dashboard.js';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const UserDashboard = () => {
    const session = useSession()
    const supabase = useSupabaseClient()
    return (
        <>
            <Layout>
            <section className="pt-40 pb-12 -mt-24 bg-blueGray-100">
                <div className="container">
                    <h1 className="mb-5 text-2xl font-bold lg:text-4xl wow animate__animated animate__fadeIn animated">Dashboard</h1>
                    <ul className="flex pb-12 text-sm text-gray-500 lg:text-sm wow animate__animated animate__fadeIn animated">
                        <li className="inline-flex items-center">
                            <a href="/" className="text-gray-800 hover:text-blue-500">Home</a>
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-auto h-5 text-gray-300">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </li>
                        <li className="inline-flex items-center text-gray-400">
                            <span>User</span>
                        </li>
                        <li className="inline-flex items-center text-gray-400">
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-auto h-5 text-gray-300">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Dashboard</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    {!session ? (
                        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
                    ) : (
                        <Dashboard session={session} />
                    )}
                </div>
            </section>
            </Layout>
        </>
    );
};

export default UserDashboard;