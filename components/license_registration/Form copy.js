import React, { useCallback, useState, useEffect } from "react";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router';
import { data } from "autoprefixer";

export default function RegistrationForm({uid}) {
    const [shareholders, setShareholders] = useState([{ name: "", percentage: "" }]);
    const [directors, setDirectors] = useState([{ name: "", national_id: "", passport_no: "" }]);
    const [businesses, setBusinesses] = useState([{ name: "" }]);
    const [docUrls, setDocUrls] = useState({ doc1: null, doc2: null, doc3: null });
    const [uploading, setUploading] = useState(false);

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const supabase = useSupabaseClient();
    const user = useUser();

    //Comapny Info
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [addressStreet, setAddressStreet] = useState('');
    const [addressState, setAddressState] = useState('');
    const [addressCountry, setAddressCountry] = useState('');
    const [addressZip, setAddressZip] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('Pending');
    const [companyId, setCompanyId] = useState(null);

    //Shareholders Start
    const handleShareholderInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...shareholders];
        list[index][name] = value;
        setShareholders(list);
    };

    const handleShareholderRemove = (index) => {
        const list = [...shareholders];
        list.splice(index, 1);
        setShareholders(list);
    };

    const handleShareholderAdd = () => {
        setShareholders([...shareholders, { name: "", percentage: "" }]);
    };
    //Shareholder End

    //Director Start
    const handleDirectorInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...directors];
        list[index][name] = value;
        setDirectors(list);
    };

    const handleDirectorRemove = (index) => {
        const list = [...directors];
        list.splice(index, 1);
        setDirectors(list);
    };

    const handleDirectorAdd = () => {
        setDirectors([...directors, { name: "", national_id: "", passport_no: "" }]);
    };
    //Director End

    //BusinesList Start
    const handleBusinessInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...businesses];
        list[index][name] = value;
        setBusinesses(list);
    };

    const handleBusinessRemove = (index) => {
        const list = [...businesses];
        list.splice(index, 1);
        setBusinesses(list);
    };

    const handleBusinessAdd = () => {
        setBusinesses([...businesses, { name: "" }]);
    };
    //BusinessList End
    
    //Required Documents Start
    const uploadDocument = async (event, docNum) => {
        try {
          setUploading(true);
      
          if (!event.target.files || event.target.files.length === 0) {
            throw new Error('You must select a document to upload.');
          }
      
          const file = event.target.files[0];
          const fileExt = file.name.split('.').pop();
          const fileName = `${uid}.${fileExt}`;
      
          let { error: uploadError, data: uploadedFile } = await supabase.storage
            .from('documents')
            .upload(`company/${file.name}`, file);
      
          if (uploadError) {
            throw uploadError;
          }
      
          const path = uploadedFile.path;
          setDocUrls((prevDocUrls) => ({ ...prevDocUrls, [docNum]: path }));
          return path;
        } catch (error) {
          alert('Error uploading document!');
          console.log(error);
        } finally {
          setUploading(false);
        }
    };
    
    const downloadDocument = async (path, docNum) => {
        try {
          const { data, error } = await supabase.storage.from('documents').download(path);
          if (error) {
            throw error;
          }
          const url = URL.createObjectURL(data);
          setDocUrls((prevDocUrls) => ({ ...prevDocUrls, [docNum]: url }));
        } catch (error) {
          console.log('Error downloading document: ', error);
        }
    };
    
    useEffect(() => {
    if (docUrls.doc1) downloadDocument(docUrls.doc1, 'doc1');
    }, [docUrls.doc1]);
    
    useEffect(() => {
    if (docUrls.doc2) downloadDocument(docUrls.doc2, 'doc2');
    }, [docUrls.doc2]);
    
    useEffect(() => {
    if (docUrls.doc3) downloadDocument(docUrls.doc3, 'doc3');
    }, [docUrls.doc3]);
    
    const handleUploadDoc1 = (event) => uploadDocument(event, 'doc1');
    const handleUploadDoc2 = (event) => uploadDocument(event, 'doc2');
    const handleUploadDoc3 = (event) => uploadDocument(event, 'doc3');
    //Required Documents End

    const handleNext = async () => {
        try {
          setLoading(true);
      
          switch (step) {
            case 1:
              // validate company form fields here
              if (name && addressStreet && addressCity && addressState && addressZip && addressCountry && phone && email) {
                setStep(step + 1);
              } else {
                throw new Error('Please fill in all required fields.');
              }
              break;
      
            case 2:
                // validate shareholders form fields here
              if (shareholders.every((shareholder) => shareholder.name && shareholder.percentage)) {
                setStep(step + 1);
              } else {
                throw new Error('Please fill in all required fields for shareholders.');
              }
              break;
      
            case 3:
            // validate directors form fields here
            if (directors.every((director) => director.name && (director.national_id || director.passport_no))) {
                setStep(step + 1);
              } else {
                throw new Error('Please fill in all required fields for directors.');
              }
              break;
      
            case 4:
              // validate businesses form fields here
              if (businesses.every((business) => business.name)) {
                setStep(step + 1);
              } else {
                throw new Error('Please fill in all required fields for businesses.');
              }
              break;
      
            case 5:
              // validate required documents here
              if (docUrls.doc1 && docUrls.doc2 && docUrls.doc3) {
                setStep(step + 1);
              } else {
                throw new Error('Please upload all required documents.');
              }
              break;
              
            case 6:
              // validate additional step here
              // ...
              break;
      
            default:
              break;
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
    };

    const handleBack = () => {
        if (step > 1) {
          setStep(step - 1);
        }
    };
            
    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
            setLoading(true);
        
            // Insert Company
            const { data: companyData, error: companyError } = await supabase
                .from("companies")
                .insert([
                {
                    name,
                    address_street: addressStreet,
                    address_city: addressCity,
                    address_state: addressState,
                    address_zip: addressZip,
                    address_country: addressCountry,
                    phone,
                    email,
                    status,
                },
            ]);
            console.log(companyData)
            if (companyError) {
                throw companyError;
            }

            
            // Fetch company ID
            const { data, errorId } = await supabase
                .from("companies")
                .select("id")
                .order("created_at", { ascending: false })
                .limit(1);

                if (errorId) {
                console.log("Error fetching company ID:", error);
                } else if (data && data.length > 0) {
                const companyId = data[0].id;
            
                // Insert Shareholders
                for (let i = 0; i < shareholders.length; i++) {
                    const shareholder = shareholders[i];
            
                    const { error: shareholderError } = await supabase
                    .from("shareholderslist")
                    .insert({
                        name: shareholder.name,
                        percentage: shareholder.percentage,
                        company_id: companyId,
                    });
            
                    if (shareholderError) {
                    console.log(`Error creating shareholder ${i + 1}:`, shareholderError);
                    } else {
                    console.log(`Shareholder ${i + 1} created successfully`);
                    }
                }
                
                // Insert Directors
                const directorPromises = directors.map((director) =>
                    supabase.from("directorslist").insert({
                    name: director.name,
                    national_id: director.national_id,
                    passport_no: director.passport_no,
                    company_id: companyId,
                    })
                );
            
                const directorResults = await Promise.all(directorPromises);
                const directorErrors = directorResults.filter((r) => r.error);
            
                if (directorErrors.length > 0) {
                    console.log("Error creating directors data:", directorErrors);
                } else {
                    console.log("Directors data created successfully:", directorResults);
                }
                
                // Insert Businesses
                const businessPromises = businesses.map((business) =>
                    supabase.from("businesseslist").insert({
                    name: business.name,
                    company_id: companyId,
                    })
                );
            
                const businessResults = await Promise.all(businessPromises);
                const businessErrors = businessResults.filter((r) => r.error);
            
                if (businessErrors.length > 0) {
                    console.log("Error creating businesses data:", businessErrors);
                } else {
                    console.log("Businesses data created successfully:", businessResults);
                }
                
                // Insert Required Documents
                const { data: docData, error: docError } = await supabase
                    .from("required_documents")
                    .insert({
                    doc1: docUrls.doc1,
                    doc2: docUrls.doc2,
                    doc3: docUrls.doc3,
                    company_id: companyId,
                });

                if (docError) {
                    console.log("Error creating document:", docError);
                    } else if (docData && docData.length > 0) {
                    const companyId = docData[0].company_id;
                    console.log("Created document with company ID:", companyId);
                    } else {
                    console.log("No data returned from insert operation");
                    }
                    router.push("/");
            }
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
        setLoading(false);
        }
    };

    return (
        <section className="pt-12">
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap">
                    
                    {step === 1 && (
                    //Company Info
                        <div className="space-y-12">
                            <form onSubmit={(e) => handleSubmit(e)}>
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
                                                name="name"
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
                                                name="phone"
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
                                                name="email"
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
                                                name="addressCountry"
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
                                                name="addressStreet"
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
                                                name="addressCity"
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
                                                name="addressState"
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
                                                name="addressZip"
                                                value={addressZip} 
                                                onChange={(e) => setAddressZip(e.target.value)}
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="flex items-center justify-end mt-6 gap-x-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                                </button>
                                <button
                                type="submit"
                                onClick={handleNext}
                                disabled={loading}
                                className="px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm btn-primary hover-up-2"
                                >
                                Next
                                </button>
                            </div>
                        </div>  
                    )}

                    {step === 2 && (
                    //Shareholders Info
                        <div className="space-y-12">
                            <form onSubmit={handleSubmit}>
                                <div className="pb-12 border-b border-gray-900/10">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Shareholder Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Please fill out the necessary fields with your company's Shareholder information.</p>
                                    
                                    {shareholders.map((shareholder, index) => (
                                    <label >
                                        <div key={index} className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">
                                            <div className="sm:col-span-4">
                                                <label htmlFor={`name-${index}`} className="block text-sm font-medium leading-6 text-gray-900">
                                                    Shareholder Name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                    type="text"
                                                    name="name"
                                                    value={shareholder.name}
                                                    onChange={(e) => handleShareholderInputChange(e, index)}
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label htmlFor={`percentage-${index}`} className="block text-sm font-medium leading-6 text-gray-900">
                                                    Percentage (%)
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                    type="text"
                                                    name="percentage"
                                                    value={shareholder.percentage}
                                                    onChange={(e) => handleShareholderInputChange(e, index)}
                                                    autoComplete="percentage"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            
                                            {shareholders.length !== 1 && (
                                            <div className="sm:col-span-2">
                                                <label className="invisible">
                                                Remove
                                                </label>
                                                <div className="mt-2">
                                                <button
                                                    type="button"
                                                    onClick={() => handleShareholderRemove(index)}
                                                    className="px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                                    >
                                                    Remove
                                                    </button>
                                                </div>
                                            </div>
                                            )}
                                        </div>
                                    </label>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={handleShareholderAdd}
                                >
                                    Add Shareholder
                                </button>
                            </form>
                            <div className="flex items-center justify-end mt-6 gap-x-6">
                                <button type="button" onClick={handleBack} className="text-sm font-semibold leading-6 text-gray-900">
                                Back
                                </button>
                                <button
                                type="submit"
                                onClick={handleNext}
                                disabled={loading}
                                className="px-3 py-2 text-sm font-semibold text-white btn-primary hover-up-2"
                                >
                                Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                    //Director
                        <div className="space-y-12">
                            <form onSubmit={handleSubmit}>
                                <div className="pb-12 border-b border-gray-900/10">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Director Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Please fill out the necessary fields with your company's Director information.</p>
                                    
                                    {directors.map((director, index) => (
                                    <label >
                                        <div key={index} className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">
                                            <div className="sm:col-span-4">
                                                <label htmlFor={`name-${index}`} className="block text-sm font-medium leading-6 text-gray-900">
                                                    Director Name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                    type="text"
                                                    name="name"
                                                    value={director.name}
                                                    onChange={(e) => handleDirectorInputChange(e, index)}
                                                    required
                                                    autoComplete="name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor={`passport_no-${index}`} className="block text-sm font-medium leading-6 text-gray-900">
                                                    Passport No
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                    type="text"
                                                    name="passport_no"
                                                    value={director.passport_no}
                                                    onChange={(e) => handleDirectorInputChange(e, index)}
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor={`national_id-${index}`} className="block text-sm font-medium leading-6 text-gray-900">
                                                    National Id
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                    type="text"
                                                    name="national_id"
                                                    value={director.national_id}
                                                    onChange={(e) => handleDirectorInputChange(e, index)}
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                            
                                            
                                            {directors.length !== 1 && (
                                            <div className="sm:col-span-2">
                                                <label className="invisible">
                                                Remove
                                                </label>
                                                <div className="mt-2">
                                                <button
                                                    type="button"
                                                    onClick={() => handleDirectorRemove(index)}
                                                    className="px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                                    >
                                                    Remove
                                                    </button>
                                                </div>
                                            </div>
                                            )}
                                        </div>
                                    </label>
                                    ))}
                                </div>            
                                <button
                                    type="button"
                                    onClick={handleDirectorAdd}
                                >
                                    Add Director
                                </button>
                            </form>
                            <div className="flex items-center justify-end mt-6 gap-x-6">
                                <button type="button" onClick={handleBack} className="text-sm font-semibold leading-6 text-gray-900">
                                Back
                                </button>
                                <button
                                type="submit"
                                onClick={handleNext}
                                disabled={loading}
                                className="px-3 py-2 text-sm font-semibold text-white btn-primary hover-up-2"
                                >
                                Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                    //Business
                        <div className="space-y-12">
                            <form onSubmit={handleSubmit}>
                                <div className="pb-12 border-b border-gray-900/10">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Business Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Please fill out the necessary fields with your company's Director information.</p>
                                    
                                    {businesses.map((business, index) => (
                                    <label >
                                        <div key={index} className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">
                                            <div className="sm:col-span-2">
                                                <label htmlFor={`name-${index}`} className="block text-sm font-medium leading-6 text-gray-900">
                                                    Business Name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                    type="text"
                                                    name="name"
                                                    value={business.name}
                                                    onChange={(e) => handleBusinessInputChange(e, index)}
                                                    required
                                                    autoComplete="name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                            
                                            
                                            {businesses.length !== 1 && (
                                            <div className="sm:col-span-2">
                                                <label className="invisible">
                                                Remove
                                                </label>
                                                <div className="mt-2">
                                                <button
                                                    type="button"
                                                    onClick={() => handleBusinessRemove(index)}
                                                    className="px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                                    >
                                                    Remove
                                                    </button>
                                                </div>
                                            </div>
                                            )}
                                        </div>
                                    </label>
                                    ))}
                                </div>
                            
                                <button
                                    type="button"
                                    onClick={handleBusinessAdd}
                                >
                                    Add Business
                                </button>
                            </form>
                            <div className="flex items-center justify-end mt-6 gap-x-6">
                                <button type="button" onClick={handleBack} className="text-sm font-semibold leading-6 text-gray-900">
                                Back
                                </button>
                                <button
                                type="submit"
                                onClick={handleNext}
                                disabled={loading}
                                className="px-3 py-2 text-sm font-semibold text-white btn-primary hover-up-2"
                                >
                                Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 5 && (
                        //Required Documents
                            <div className="w-full space-y-12">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-3 gap-3 py-4">
                                        <div className="col-span-3 sm:col-span-2 sm:grid sm:grid-cols-1 sm:items-start sm:gap-1">
                                            <label className="block text-sm font-medium leading-6 text-gray-900 sm:col-1">
                                                (1) Memorandum of Association, Memorandum of Association
                                            </label>
                                        </div>
                                        <div className="flex flex-row items-center col-span-3 sm:col-span-1">
                                            <input
                                                className="relative flex-auto block w-full min-w-0 m-0 border border-solid rounded sm:w-full"
                                                type="file"
                                                accept=".pdf"
                                                onChange={handleUploadDoc1}
                                                disabled={uploading}
                                            />
                                            {docUrls.doc1 && (
                                                <a
                                                href={docUrls.doc1}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-2"
                                                >
                                                Show
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3 py-4">
                                        <div className="col-span-3 sm:col-span-2 sm:grid sm:grid-cols-1 sm:items-start sm:gap-1">
                                            <label className="block text-sm font-medium leading-6 text-gray-900 sm:col-1">
                                                (2) Memorandum of Association, Memorandum of Association
                                            </label>
                                        </div>
                                        <div className="flex flex-row items-center col-span-3 sm:col-span-1">
                                            <input
                                                className="relative flex-auto block w-full min-w-0 m-0 border border-solid rounded sm:w-full"
                                                type="file"
                                                accept=".pdf"
                                                onChange={handleUploadDoc2}
                                                disabled={uploading}
                                            />
                                            {docUrls.doc2 && (
                                                <a
                                                href={docUrls.doc2}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-2"
                                                >
                                                Show
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3 py-4">
                                        <div className="col-span-3 sm:col-span-2 sm:grid sm:grid-cols-1 sm:items-start sm:gap-1">
                                            <label className="block text-sm font-medium leading-6 text-gray-900 sm:col-1">
                                                (3) Memorandum of Association, Memorandum of Association
                                            </label>
                                        </div>
                                        <div className="flex flex-row items-center col-span-3 sm:col-span-1">
                                            <input
                                                className="relative flex-auto block w-full min-w-0 m-0 border border-solid rounded sm:w-full"
                                                type="file"
                                                accept=".pdf"
                                                onChange={handleUploadDoc3}
                                                disabled={uploading}
                                            />
                                            {docUrls.doc3 && (
                                                <a
                                                href={docUrls.doc3}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-2"
                                                >
                                                Show
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            <div className="flex items-center justify-end mt-6 gap-x-6">
                                <button type="button" onClick={handleBack} className="text-sm font-semibold leading-6 text-gray-900">
                                Back
                                </button>
                                <button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={loading}
                                className="px-3 py-2 text-sm font-semibold text-white btn-primary hover-up-2"
                                >
                                Next
                                </button>
                            </div>
                        </div>
                    )}
                    {step === 6 && (
                        //Review
                        <div className="flex-wrap">
                            <div className="w-full space-y-12">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
                                    <p className="max-w-2xl mt-1 text-sm leading-6 text-gray-500">Personal details and application.</p>
                                </div>
                                <div className="mt-6 border-t border-gray-100">
                                    <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                        qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                        pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <ul role="list" className="border border-gray-200 divide-y divide-gray-100 rounded-md">
                                            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex items-center flex-1 w-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                                                </svg>

                                                <div className="flex flex-1 min-w-0 gap-2 ml-4">
                                                <span className="font-medium truncate">resume_back_end_developer.pdf</span>
                                                <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 ml-4">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                                </a>
                                            </div>
                                            </li>
                                            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex items-center flex-1 w-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                                                </svg>                                                <div className="flex flex-1 min-w-0 gap-2 ml-4">
                                                <span className="font-medium truncate">coverletter_back_end_developer.pdf</span>
                                                <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 ml-4">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                                </a>
                                            </div>
                                            </li>
                                        </ul>
                                        </dd>
                                    </div>
                                    </dl>
                                </div>
                            </div>
                            <div className="flex items-center justify-end mt-6 gap-x-6">
                                <button type="button" onClick={handleBack} className="text-sm font-semibold leading-6 text-gray-900">
                                Back
                                </button>
                                <button
                                type="submit"
                                onClick={handleNext}
                                disabled={loading}
                                className="px-3 py-2 text-sm font-semibold text-white btn-primary hover-up-2"
                                >
                                Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 7 && (
                        //Complete
                        <div className="flex flex-col items-center space-y-12">
                            <h1 className="text-3xl font-bold text-gray-900">Registration Completed!</h1>
                            <p className="text-lg font-medium text-center text-gray-800">
                                Thank you for submitting your company registration. Our team will review and verify the information provided and contact you if any further information is required.
                            </p>
                            <div className="flex mt-8 space-x-4">
                                <button
                                className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                                onClick={() => router.push("/")}
                                >
                                Back to Home
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}