import React, { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router';


const FirstForm = ({ session }) => {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const router = useRouter();
    
    //9 columns
    const [name, setName] = useState('');
    const [addressStreet, setAddressStreet] = useState('');
    const [addressState, setAddressState] = useState('');
    const [addressCountry, setAddressCountry] = useState('');
    const [addressZip, setAddressZip] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('Pending');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase.from('companies').insert({
          name,
          address_street: addressStreet,
          address_state: addressState,
          address_country: addressCountry,
          address_zip: addressZip,
          phone,
          email,
          address_city: addressCity,
          status,
        });
    
        if (error) {
          console.log('Error creating company:', error);
        } else {
          console.log('Company created successfully:', data);
          router.push('/directorsList');
        }
    };
  
    return (
        <section className="pt-12">
            <div className="container py-12 mx-auto">
                <div className="flex flex-wrap">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-12">
                            <div className="pb-12 border-b border-gray-900/10">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Company Information</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Please fill out the necessary fields with your company information.</p>
                
                                <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">
                                    <div className="sm:col-span-6">
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                        Company Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                        type="text" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    </div>
                
                                    <div className="sm:col-span-3">
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                        Company Phone Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                        type="text" 
                                        value={phone} 
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    </div>
                
                                    <div className="sm:col-span-3">
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                        Company Email Address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                        type="text" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    </div>
                
                                    <div className="sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Country
                                        </label>
                                        <div className="mt-2">
                                            <select
                                            value={addressCountry} 
                                            onChange={(event) => setAddressCountry(event.target.value)}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                            <option value="Myanmar">Myanmar</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="United States">United States</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Mexico">Mexico</option>
                                            </select>
                                        </div>
                                    </div>
                
                                    <div className="sm:col-span-6">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                            Street address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            type="text" 
                                            value={addressStreet} 
                                            onChange={(e) => setAddressStreet(e.target.value)}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                            />
                                        </div>  
                                    </div>
                
                                    <div className="sm:col-span-3">
                                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                            City
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            type="text"
                                            value={addressCity} 
                                            onChange={(e) => setAddressCity(e.target.value)}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring--600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                
                                    <div className="sm:col-span-3">
                                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                            State / Province
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            type="text" 
                                            value={addressState} 
                                            onChange={(e) => setAddressState(e.target.value)}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring--600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                
                                    <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                        type="text" 
                                        value={addressZip} 
                                        onChange={(e) => setAddressZip(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FirstForm;



// async function getCompanyInfo() {
//     try {
//       setLoading(true)

//       let { data, error, status } = await supabase
//         .from('companies')
//         .select('*')
//         .eq('id', user.id)
//         .single()

//       if (error && status !== 406) {
//         throw error
//       }

//       if (data) {
//         setName(data.name)
//         setAddressStreet(data.addressStreet)
//         setAddressState(data.addressState)
//         setAddressCountry(data.addressCountry)
//         setAddressCity(data.addressCity)
//         setAddressZip(data.addressZip)
//         setPhone(data.phone)
//         setEmail(data.email)
//         setStatus(data.status)
//       }
//     } catch (error) {
//       alert('Error loading data!')
//       console.log(error)
//     } finally {
//       setLoading(false)
//     }
// }

// async function updateCompanyInfo({ name, address_state, address_street, address_country, address_zip, address_city, phone, email, status }) {
//     try {
//       setLoading(true)

//       const updates = {
//         id: user.id,
//         name,
//         address_street,
//         address_state,
//         address_country,
//         address_zip,
//         phone,
//         email,
//         address_city,
//         status,
//         updated_at: new Date().toISOString(),
//       }

//       let { error } = await supabase.from('companies').upsert(updates)
//       if (error) throw error
//       alert('Data updated!')
//     } catch (error) {
//       alert('Error updating the data!')
//       console.log(error)
//     } finally {
//       setLoading(false)
//     }
// }