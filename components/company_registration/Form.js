import React, { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router';
// import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';


export default function RegistrationForm({uid}) {
    const [shareholders, setShareholders] = useState([{ name: "", percentage: "" }]);
    const [directors, setDirectors] = useState([{ name: "", national_id: "", passport_no: "" }]);
    const [businesses, setBusinesses] = useState([{ name: "" }]);
    const [uploading, setUploading] = useState(false);

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [refresh, setRefresh] = useState(false)
    const router = useRouter();
    const supabase = useSupabaseClient();
    const user = useUser();

    //Fetch Selected Value
    const selectedOption = router.query.selectedOption;
    const selectedDistrict = router.query.selectedDistrict;

    //Comapnies Start
    const [name, setName] = useState('');
    const [addressStreet, setAddressStreet] = useState('');
    const [addressState, setAddressState] = useState('');
    const [addressCountry, setAddressCountry] = useState('');
    const [addressZip, setAddressZip] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('Pending');
    
    // Address Dropdown (Country/State)
    const countryStateOptions = {
        Myanmar: ["Yangon", "Mandalay", "Naypyidaw", "Bago"],
        Thailand: ["Bangkok", "Chiang Mai", "Phuket"],
        "United States": ["California", "New York", "Texas"],
        Canada: ["Ontario", "Quebec", "British Columbia"],
        Mexico: ["Mexico City", "Cancun", "Tijuana"]
    };
    //Companies End
    
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
    const [document1Url, setDocument1Url] = useState(null);
    const [document2Url, setDocument2Url] = useState(null);
    const [document3Url, setDocument3Url] = useState(null);

    // Handle file upload
    const handleFile1Upload = (e) => {
        setDocument1Url(e.target.files[0]);
    };
    const handleFile2Upload = (e) => {
        setDocument2Url(e.target.files[0]);
    };
    const handleFile3Upload = (e) => {
        setDocument3Url(e.target.files[0]);
    };

    // const uploadDocument = async (event, docNum) => {
    //     try {
    //       setUploading(true);
      
    //       if (!event.target.files || event.target.files.length === 0) {
    //         throw new Error('You must select a document to upload.');
    //       }
      
    //       const file = event.target.files[0];
    //       const fileExt = file.name.split('.').pop();
    //       const fileName = `${uid}.${fileExt}`;
      
    //       let { error: uploadError, data: uploadedFile } = await supabase.storage
    //         .from('documents')
    //         .upload(`company/${file.name}`, file);
      
    //       if (uploadError) {
    //         throw uploadError;
    //       }
      
    //       const path = uploadedFile.path;
    //       setDocUrls((prevDocUrls) => ({ ...prevDocUrls, [docNum]: path }));
    //       return path;
    //     } catch (error) {
    //       alert('Error uploading document!');
    //       console.log(error);
    //     } finally {
    //       setUploading(false);
    //     }
    // };
    
    // const downloadDocument = async (path, docNum) => {
    //     try {
    //       const { data, error } = await supabase.storage.from('documents').download(path);
    //       if (error) {
    //         throw error;
    //       }
    //       const url = URL.createObjectURL(data);
    //       setDocUrls((prevDocUrls) => ({ ...prevDocUrls, [docNum]: url }));
    //     } catch (error) {
    //       console.log('Error downloading document: ', error);
    //     }
    // };
    
    // useEffect(() => {
    // if (docUrls.doc1) downloadDocument(docUrls.doc1, 'doc1');
    // }, [docUrls.doc1]);
    
    // useEffect(() => {
    // if (docUrls.doc2) downloadDocument(docUrls.doc2, 'doc2');
    // }, [docUrls.doc2]);
    
    // useEffect(() => {
    // if (docUrls.doc3) downloadDocument(docUrls.doc3, 'doc3');
    // }, [docUrls.doc3]);
    
    // const handleUploadDoc1 = (event) => uploadDocument(event, 'doc1');
    // const handleUploadDoc2 = (event) => uploadDocument(event, 'doc2');
    // const handleUploadDoc3 = (event) => uploadDocument(event, 'doc3');

    //Required Documents End

    //For submit used
    const [companies, setCompany] = useState(null);
    const [isAgreed, setIsAgreed] = useState(false);
    const [isInfoCorrect, setIsInfoCorrect] = useState(false);

    const handleAgreementChange = (event) => {
        setIsAgreed(event.target.checked);
    };
 
    const handleInfoCorrectChange = (event) => {
        setIsInfoCorrect(event.target.checked);
    };
    
    //For Validation in handleNext
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        addressStreet: '',
        addressCity: '',
        addressState: '',
        addressZip: '',
        addressCountry: '',
        phone: '',
        email: '',
    });
      

    const handleNext = async () => {
        try {
          setLoading(true);
            
          switch (step) {
            case 1:
                // Validation criteria
                const companyNameRegex = /^[a-zA-Z0-9\s,'-]*$/;
                const addressStreetRegex = /^[a-zA-Z0-9\s,'-]*$/;
                const addressCityRegex = /^[a-zA-Z\s]+(?:[\s-][a-zA-Z]+)*$/;
                const addressStateRegex = /^[a-zA-Z0-9\s,'-]*$/;
                const addressZipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
                const phoneRegex = /^\d{1,12}$/;
                const emailRegex = /\S+@\S+\.\S+/;

                let newErrorMessages = {
                    name: '',
                    addressStreet: '',
                    addressCity: '',
                    addressState: '',
                    addressZip: '',
                    addressCountry: '',
                    phone: '',
                    email: '',
                };

                // Validate form fields
                if (!name) {
                    newErrorMessages.name = 'Please enter your company name.';
                } else if (!companyNameRegex.test(name)) {
                    newErrorMessages.name = 'Company name should be alphanumeric, spaces, commas, apostrophes, or hyphens only.';
                }
            
                if (!addressStreet) {
                    newErrorMessages.addressStreet = 'Please enter your street address.';
                } else if (!addressStreetRegex.test(addressStreet)) {
                    newErrorMessages.addressStreet = 'Street address should be alphanumeric, spaces, commas, apostrophes, or hyphens only.';
                }
            
                if (!addressCity) {
                    newErrorMessages.addressCity = 'Please enter your city name.';
                } else if (!addressCityRegex.test(addressCity)) {
                    newErrorMessages.addressCity = 'City name should contain letters and optional hyphens only.';
                }
            
                if (!addressState) {
                    newErrorMessages.addressState = 'Please enter your state abbreviation.';
                } else if (!addressStateRegex.test(addressState)) {
                    newErrorMessages.addressState = 'State should be a two-letter abbreviation.';
                }
            
                if (!addressZip) {
                    newErrorMessages.addressZip = 'Please enter your zip code.';
                } else if (!addressZipRegex.test(addressZip)) {
                    newErrorMessages.addressZip = 'Zip code should be in the format of "xxxxx" or "xxxxx-xxxx".';
                }
            
                if (!addressCountry) {
                    newErrorMessages.addressCountry = 'Please enter your country.';
                }
            
                if (!phone) {
                    newErrorMessages.phone = 'Please enter your phone number.';
                } else if (!phoneRegex.test(phone)) {
                    newErrorMessages.phone = 'Phone number should be a 1 to 12-digit number.';
                }
            
                if (!email) {
                    newErrorMessages.email = 'Please enter your email address.';
                } else if (!emailRegex.test(email)) {
                    newErrorMessages.email = 'Email address is not valid.';
                }
            
                const hasError = Object.values(newErrorMessages).some(message => message !== '');
            
                if (hasError) {
                    setErrorMessage(newErrorMessages);
                    throw new Error('Please fix the errors above.');
                }

                setStep(step + 1);
                break
                
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
              
                if (isAgreed) {
                    console.log("Process completed successfully");
                    setStep(step + 1);
                } else {
                    console.log("Please agree to the terms to complete the process");
                }
                
                break;
            
            case 7:

                setStep(step + 1);
                
                break;
      
            default:
              break;
          }
        }   catch (error) {
            console.error(error.message);
        } finally {
        setLoading(false);
        }
    };

    const handleBack = () => {
        if (step > 1) {
          setStep(step - 1);
        }
    };
    
    const handleSubmit = async () => {
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
                    registration_level: selectedOption,
                    district: selectedDistrict,
                    user_id: user.id // insert the authenticated user's ID into the companies table
                },
            ]);
            console.log(companyData)
            console.log(` Company created successfully`);

            if (companyError) {
                throw companyError;
            }

            // Fetch company ID
            const { data: companyIdData, errorId } = await supabase
                .from("companies")
                .select("id")
                .order("created_at", { ascending: false })
                .limit(1);

                if (errorId) {
                console.log("Error fetching company ID:", error);
                } else if (companyIdData && companyIdData.length > 0) {
                
                const companyId = companyIdData[0].id;
            
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
                
                const [file1NameParts, file2NameParts, file3NameParts] = [
                    document1Url.name.split('.'),
                    document2Url.name.split('.'),
                    document3Url.name.split('.')
                ];
                const [file1Type, file2Type, file3Type] = [
                    file1NameParts[file1NameParts.length - 1],
                    file2NameParts[file2NameParts.length - 1],
                    file3NameParts[file3NameParts.length - 1]
                ];
                const [fileName1, fileName2, fileName3] = [
                    `${uuidv4()}.${file1Type}`,
                    `${uuidv4()}.${file2Type}`,
                    `${uuidv4()}.${file3Type}`
                ];

                const fileNames = [fileName1, fileName2, fileName3];
                const documentUrls = [document1Url, document2Url, document3Url];

                for (let i = 0; i < fileNames.length; i++) {
                const { error } = await supabase.storage
                    .from('documents')
                    .upload(fileNames[i], documentUrls[i]);

                if (error) {
                    console.log(`Error uploading ${fileNames[i]}: ${error}`);
                    return;
                }
                }
                
                const { data: docData, error: docError } = await supabase
                    .from('required_documents')
                    .insert({
                    doc1: fileName1,
                    doc2: fileName2,
                    doc3: fileName3,
                    company_id: companyId,
                });
                
                if (docError) {
                    console.log('Error creating document:', docError);
                } else if (docData && docData.length > 0) {
                const companyId = docData[0].company_id;
                console.log('Created document with company ID:', companyId);
                } else {
                console.log('No data returned from insert operation');
                }
                //End

                //Review
                useEffect(() => {
                    if (refresh) {
                      getCompanies()
                      setRefresh(false)
                    }
                }, [refresh])
            
                async function getCompanies() {
                    try {
                        setLoading(true)
                        const { data: companyData, error: companyError } = await supabase
                        .from('companies')
                        .select('*')
                        .eq('id', companyId)
                        .single();
            
                        if (companyError) {
                            console.log('Error fetching company data:', companyError);
                            return;
                        }
                    setCompany(companyData);
                    } catch (error) {
                      console.log(error)
                    } finally {
                      setLoading(false)
                      
                    }
                }
                //End
            }
        } catch (error) {
            console.error(error);
            setErrorMessage([error.message]);
            } finally {
                setLoading(false);
            }
    };

    const handleNextAndSubmit = (event) => {
        event.preventDefault();
        handleSubmit();
        handleNext();
    }

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
                                                placeholder="ABCD Corporation"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            {errorMessage.name && <div className="text-sm text-red-900">{errorMessage.name}</div>}
                                            
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
                                                placeholder="0934567890"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>  
                                            {errorMessage.phone && <div className="text-sm text-red-900">{errorMessage.phone}</div>}
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
                                                placeholder="abcd@example.com"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            {errorMessage.email && <div className="text-sm text-red-900">{errorMessage.email}</div>}                                        
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
                                                placeholder="No. 123, Pyay Road"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>  
                                            {errorMessage.addressStreet && <div className="text-sm text-red-900">{errorMessage.addressStreet}</div>}                                        
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
                                                <option value="">Choose</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="United States">United States</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Mexico">Mexico</option>
                                                </select>
                                            </div>
                                            {errorMessage.addressCountry && <div className="text-sm text-red-900">{errorMessage.addressCountry}</div>}
                                            </div>
                                            <div className="sm:col-span-3">
                                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                                State / Province
                                            </label>
                                            <div className="mt-2">
                                                {addressCountry === "Myanmar" || addressCountry === "Thailand" || addressCountry === "United States" || addressCountry === "Canada" || addressCountry === "Mexico" ?(
                                                <select
                                                    name="addressState"
                                                    value={addressState} 
                                                    onChange={(e) => setAddressState(e.target.value)}
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
                                                >
                                                    <option value="">Choose</option>
                                                    {countryStateOptions[addressCountry].map((state) => (
                                                    <option key={state} value={state}>
                                                        {state}
                                                    </option>
                                                    ))}
                                                </select>
                                                ) : (
                                                <input
                                                    type="text" 
                                                    name="addressState"
                                                    value={addressState} 
                                                    onChange={(e) => setAddressState(e.target.value)}
                                                    required
                                                    placeholder="State / Province"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring--600 sm:text-sm sm:leading-6"
                                                />
                                                )}
                                            </div>
                                            {errorMessage.addressState && <div className="text-sm text-red-900">{errorMessage.addressState}</div>}
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                                City / Township
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text"
                                                name="addressCity"
                                                value={addressCity} 
                                                onChange={(e) => setAddressCity(e.target.value)}
                                                required
                                                placeholder="Hlaing Township"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring--600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            {errorMessage.addressCity && <div className="text-sm text-red-900">{errorMessage.addressCity}</div>}
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
                                                placeholder="11051"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            {errorMessage.addressZip && <div className="text-sm text-red-900">{errorMessage.addressZip}</div>}
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
                                                    placeholder="Enter Shareholders's Name"
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
                                                    required
                                                    placeholder="80"
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
                                                    placeholder="Enter Director's Name"
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
                                                    
                                                    placeholder="A123456"
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
                                                    placeholder="12/MAKANA(N)123456"
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
                                                    placeholder="Enter Business"
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
                    //Required Documents & complete
                        <div className="w-full space-y-12">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-3 gap-3 py-4">
                                    <div className="col-span-3 sm:col-span-2 sm:grid sm:grid-cols-1 sm:items-start sm:gap-1">
                                        <label className="block text-sm font-medium leading-6 text-gray-900 sm:col-1">
                                            (1) Please upload the Memorandum and Articles of Association for your company.
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center col-span-3 sm:col-span-1">
                                        <input
                                            className="relative flex-auto block w-full min-w-0 m-0 border border-solid rounded sm:w-full"
                                            type="file"
                                            accept=".pdf"
                                            id="document1Url" 
                                            onChange={handleFile1Upload}
                                            required
                                            disabled={uploading}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-3 py-4">
                                    <div className="col-span-3 sm:col-span-2 sm:grid sm:grid-cols-1 sm:items-start sm:gap-1">
                                        <label className="block text-sm font-medium leading-6 text-gray-900 sm:col-1">
                                            (2) Please upload a copy of the National Identification Card, passport, or any other certified identification certificate for each director.
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center col-span-3 sm:col-span-1">
                                        <input
                                            className="relative flex-auto block w-full min-w-0 m-0 border border-solid rounded sm:w-full"
                                            type="file"
                                            accept=".pdf"
                                            id="document2Url" 
                                            onChange={handleFile2Upload}
                                            required
                                            disabled={uploading}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-3 py-4">
                                    <div className="col-span-3 sm:col-span-2 sm:grid sm:grid-cols-1 sm:items-start sm:gap-1">
                                        <label className="block text-sm font-medium leading-6 text-gray-900 sm:col-1">
                                            (3) Please upload a document for Presenting the main business objectives of the company
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center col-span-3 sm:col-span-1">
                                        <input
                                            className="relative flex-auto block w-full min-w-0 m-0 border border-solid rounded sm:w-full"
                                            type="file"
                                            accept=".pdf"
                                            id="document3Url" 
                                            onChange={handleFile3Upload}
                                            required
                                            disabled={uploading}
                                        />
                                    </div>
                                </div>
                            </form>
                            <div className="px-2 py-2">
                                <label htmlFor="info-correct">
                                    <input
                                    type="checkbox"
                                    id="info-correct"
                                    checked={isInfoCorrect}
                                    onChange={handleInfoCorrectChange}
                                    required
                                    />
                                    &nbsp; &nbsp; Informations are correct and checked.
                                </label>
                            </div>
                            <div className="px-2 py-2">
                                <label htmlFor="agreement">
                                    <input
                                    type="checkbox"
                                    id="agreement"
                                    checked={isAgreed}
                                    onChange={handleAgreementChange}
                                    required
                                    />
                                        &nbsp; &nbsp; I agree to the terms and conditions.
                                </label>
                            </div>
                            <div className="flex items-center justify-end mt-6 gap-x-6">
                                <button type="button" onClick={handleBack} className="text-sm font-semibold leading-6 text-gray-900">
                                Back
                                </button>
                                <button
                                type="submit"
                                onClick={handleNextAndSubmit}
                                // disabled={loading}
                                disabled={!isAgreed || !isInfoCorrect}
                                className="px-3 py-2 text-sm font-semibold text-white btn-primary hover-up-2"
                                >
                                Submit
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 6 && (
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