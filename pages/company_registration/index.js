import React from 'react';
import Layout from '../../components/layout/Layout';
import CounterUp from "../../components/elements/Counterup"
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

const CompanyRegistration = () => {
    const router = useRouter();
    const supabase = useSupabaseClient();
    const user = useUser();
    
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    
    
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!user) {
            // redirect to registration page if user is not registered
            router.push('/signup');
            return;
        }
        
        if (selectedOption === 'central') {
            router.push(`/company_registration/form?selectedOption=${selectedOption}`);
        } else if (selectedOption === 'district' && selectedDistrict !== '') {
            router.push(`/company_registration/form?selectedDistrict=${selectedDistrict}`);
        }
    }
    
    return (
        <>
            <Layout>
                <section className="px-4 py-12 bg-gray-100">
                    <div className="container mx-auto">
                        <h1 className="mb-4 text-3xl font-bold text-gray-800">Welcome to our registration portal</h1>
                        <p className="mb-6 text-gray-700">Please select whether you want to register your company at the central or district level:</p>
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center mb-4">
                                <input
                                type="radio"
                                id="central"
                                name="registration-level"
                                value="central"
                                checked={selectedOption === 'central'}
                                onChange={handleOptionChange}
                                className="mr-2"
                                />
                                <label htmlFor="central" className="text-gray-800 cursor-pointer">Central</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                type="radio"
                                id="district"
                                name="registration-level"
                                value="district"
                                checked={selectedOption === 'district'}
                                onChange={handleOptionChange}
                                className="mr-2"
                                />
                                <label htmlFor="district" className="text-gray-800 cursor-pointer">Districts</label>
                            </div>
                           
                        {selectedOption === 'central' && (
                        <div className="p-4 mt-6 bg-white shadow-md">
                            <h2 className="mb-2 text-lg font-bold text-gray-800">Central Level Registration Information</h2>
                            <p className="mb-4 text-gray-700">At the central level, companies wishing to register must submit their applications directly to the Central Economic Committee for verification. The Committee will compile a list of verified entrepreneurs and keep a record of them. Once an application is verified, the Committee will issue a certificate of registration. It is important to note that the names of registered companies must also be sent to the District Economic Committees, along with a copy of the registration certificate.</p>
                        </div>
                        )}
                        {selectedOption === 'district' && (
                        <div className="p-4 mt-6 bg-white shadow-md">
                            <h2 className="mb-2 text-lg font-bold text-gray-800">District Level Registration Information</h2>
                            <p className="mb-4 text-gray-700">At the district level, the District Economic Committee is responsible for collecting a register of all businesses operating within the district. The Committee accepts submissions for registration, and once verified, compiles a list of registered businesses. Investors are required to register below the district level and may be charged registration fees based on the types of layers.</p>
                            <h3 className="mb-2 text-base font-semibold leading-7 text-gray-900">Select your district:</h3>
                            <select
                                className="block w-full px-3 py-2 leading-5 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue focus:ring-blue-300"
                                value={selectedDistrict}
                                onChange={(e) => setSelectedDistrict(e.target.value)}
                                >
                                <option value="">-- Select District --</option>
                                <option value="district1">District 1</option>
                                <option value="district2">District 2</option>
                                <option value="district3">District 3</option>
                                <option value="district4">District 4</option>
                                <option value="district5">District 5</option>
                                <option value="district6">District 6</option>
                                <option value="district7">District 7</option>
                            </select>
                        </div>
                        )}
                        <div className='py-4'>
                            <button
                                type="submit"
                                disabled={!selectedOption}
                                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                Continue
                            </button>
                        </div>
                        </form>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default CompanyRegistration;