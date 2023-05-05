import React from 'react';
import Layout from '../../components/layout/Layout';
import CounterUp from "../../components/elements/Counterup"
import { useState } from 'react';
import { useRouter } from 'next/router';

const BusinessRegistration = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const router = useRouter();

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (selectedOption === 'central' && selectedType) {
            router.push(`/business_registration/form?selectedOption=${selectedOption}&selectedType=${selectedType}`);
        } else if (selectedOption === 'district' && selectedDistrict !== '' && selectedType) {
            router.push(`/business_registration/form?selectedOption=${selectedOption}&selectedDistrict=${selectedDistrict}&selectedType=${selectedType}`);
        }
    }
    
    return (
        <>
            <Layout>
                <section className="px-4 py-12 bg-gray-100">
                    <div className="container mx-auto">
                        <h1 className="mb-4 text-3xl font-bold text-gray-800">Welcome to our registration portal</h1>
                        <p className="mb-6 text-gray-700">Please select whether you want to register your business at the central or district level:</p>
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
                            {selectedOption && (
                            <div className="p-4 mt-6 bg-white shadow-md">
                                <h2 className="mb-2 text-lg font-bold text-gray-800">Business Registration Type</h2>
                                <p className="mb-6 text-gray-700">Please select the type of business registration you would like to proceed with:</p>
                                <div className="flex items-center mb-4">
                                    <input
                                        type="radio"
                                        id="small"
                                        name="business-type"
                                        value="small"
                                        checked={selectedType === 'small'}
                                        onChange={handleTypeChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="small" className="text-gray-800 cursor-pointer">Small Business Registration</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        type="radio"
                                        id="medium"
                                        name="business-type"
                                        value="medium"
                                        checked={selectedType === 'medium'}
                                        onChange={handleTypeChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="medium" className="text-gray-800 cursor-pointer">Medium Business Registration</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        type="radio"
                                        id="large"
                                        name="business-type"
                                        value="large"
                                        checked={selectedType === 'large'}
                                        onChange={handleTypeChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="large" className="text-gray-800 cursor-pointer">Large Business Registration</label>
                                </div>
                            </div>
                            )}
                            <div className='py-4'>
                                <button
                                    type="submit"
                                    disabled={!selectedOption || !selectedType}
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

export default BusinessRegistration;