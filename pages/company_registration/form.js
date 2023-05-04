import React from 'react';
import Layout from '../../components/layout/Layout';
import CounterUp from "../../components/elements/Counterup"
import Form from '../../components/company_registration/Form';

const CompanyRegistration = () => {
    return (
        <>
            <Layout>
                <section className="pt-40 pb-12 -mt-24 bg-blueGray-100">
                    <div className="container">
                        <h1 className="mb-5 text-2xl font-bold lg:text-5xl wow animate__animated animate__fadeIn animated">Company Registration</h1>
                        <ul className="flex pb-12 text-sm text-gray-500 lg:text-sm wow animate__animated animate__fadeIn animated">
                            <li className="inline-flex items-center">
                                <a href="#" className="text-gray-800 hover:text-blue-500">
                                    Home
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-auto h-5 text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center">
                                <a href="#" className="text-gray-800 hover:text-blue-500">
                                    Registrations
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-auto h-5 text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center text-gray-400">
                                <span>Company Registration</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <Form />
               
                
            </Layout>
        </>
    );
};

export default CompanyRegistration;