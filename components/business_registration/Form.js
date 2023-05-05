import React, { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router';
import Select from 'react-select';
import { UploadFileToStorage } from '/src/utilities/storage.js'

export default function RegistrationForm({uid}) {

    //Additional Strat
    const [selectedBuildingOption, setSelectedBuildingOption] = useState(null);
    const [buildingLandlordName, setBuildingLandlordName] = useState('');
    const [buildingLeasePeriod, setBuildingLeasePeriod] = useState('');

    const [selectedLandOption, setSelectedLandOption] = useState(null);
    const [landLandlordName, setLandLandlordName] = useState('');
    const [landLeasePeriod, setLandLeasePeriod] = useState('');

    const [selectedHarmfulOption, setSelectedHarmfulOption] = useState(null);
    const [harmfulChemicalName, setHarmfulChemicalName] = useState('');

    const [selectedPowerfulOption, setSelectedPowerfulOption] = useState(null);
    const [powerfulChemicalName, setPowerfulChemicalName] = useState('');

    const [selectedApproveOption, setSelectedApproveOption] = useState(null);
    const [shareholders, setShareholders] = useState([{ name: "", percentage: "" }]);


    const handleBuildingOptionChange = (e) => {
        setSelectedBuildingOption(e.target.value);
    };

    const handleLandOptionChange = (e) => {
        setSelectedLandOption(e.target.value);
    };

    const handleHarmfulOptionChange = (e) => {
        setSelectedHarmfulOption(e.target.value);
    };

    const handlePowerfulOptionChange = (e) => {
        setSelectedPowerfulOption(e.target.value);
    };

    const handleApproveOptionChange = (e) => {
        setSelectedApproveOption(e.target.value);
    };

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

    //Additional End
    
    //Applicant Start
    const [photo, setPhoto] = useState(null)
    const [signature, setSignature] = useState(null)

    const handleSubmit1 = async () => {
        try {
            setLoading(true);
            //File upload
            let signatureUri = ''
            if (signature !== null) {
                let result = await UploadFileToStorage(
                supabase,
                'applicant_signature',
                signature
                )
                if (result.success) {
                signatureUri = result.data
                }
            }
            
            // Insert Company
            

            
        } catch (error) {
            console.error(error);
            setErrorMessage([error.message]);
            } finally {
                setLoading(false);
            }
    };

    //End
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

    const [companies, setCompany] = useState(null);
    const [isAgreed, setIsAgreed] = useState(false);
    
    // Address Dropdown (Country/State)
    const countryStateOptions = {
        Myanmar: ["Yangon", "Mandalay", "Naypyidaw", "Bago"],
        Thailand: ["Bangkok", "Chiang Mai", "Phuket"],
        "United States": ["California", "New York", "Texas"],
        Canada: ["Ontario", "Quebec", "British Columbia"],
        Mexico: ["Mexico City", "Cancun", "Tijuana"]
    };
    //Companies End


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

    const handleComplete = () => {
        if (isAgreed) {
          console.log("Process completed successfully");
          // TODO: Perform any necessary action to complete the process
          router.push({ 
            pathname: '/',
          }); 
        } else {
          console.log("Please agree to the terms to complete the process");
        }
    };
    //Required Documents End

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

            setStep(step + 1);
            break
                
            case 2:
                // validate shareholders form fields here
              
              setStep(step + 1);
              break;
      
            case 3:
            // validate directors form fields here
            
              setStep(step + 1);
              break;
      
            case 4:
              // validate businesses form fields here

              setStep(step + 1);
              break;
      
            case 5:
              // validate required documents here
              

              setStep(step + 1);
              break;
              
            case 6:
                if (isAgreed) {
                    console.log("Process completed successfully");
                    setStep(step + 1);
                  } else {
                    console.log("Please agree to the terms to complete the process");
                  }
              break;
            
            case 7:

                setStep(step + 1);
            // validate additional step here
            // ...

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
    const handleAgreementChange = (event) => {
        setIsAgreed(event.target.checked);
    };

    return (
        <section className="pt-12">
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap">
                    
                    {step === 1 && (
                    //Business Info
                        <div className="space-y-12">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="pb-12 border-b border-gray-900/10">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Business Owner Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Please fill out the necessary fields with your business owner information.</p>

                                    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Owner Name (English)
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="name_eng"
                                                required
                                                placeholder="Please enter Owner name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Owner Name (Myanmar)
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="name_mm"
                                                required
                                                placeholder="Please enter Owner name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Passport No
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text"
                                                name="passport_no"
                                                
                                                placeholder="A123456"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                National Id
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text"
                                                name="national_id"
                                                required
                                                placeholder="12/MAKANA(N)123456"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Owner Phone Number
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
                                                Owner Email Address
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
                                        </div>
                    
                                        <div className="sm:col-span-3">
                                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                                Owner Street address
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
                        //Business Info
                        <div className="space-y-12">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="pb-12 border-b border-gray-900/10">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Business Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Please fill out the necessary fields with your business information.</p>

                                    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Existing Registration ID
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name=""
                                                required
                                                placeholder=""
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Type of Business
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                id=""
                                                name=""
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
                                                >
                                                    <option value="">Type-1</option>
                                                    <option value="">Type-2</option>
                                                    <option value="">Type-3</option>
                                                    <option value="">Type-3</option>
                                                    <option value="">Type-4</option>
                                                    <option value="">Type-5</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Period of Business Establishment
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name=""
                                                required
                                                placeholder=""
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Business Operations Area
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name=""
                                                required
                                                placeholder=""
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                No of Workers
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name=""
                                                required
                                                placeholder=""
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                    
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Business Phone Number
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
                                                Business Email Address
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
                                        </div>
                    
                                        <div className="sm:col-span-3">
                                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                                Business Street address
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
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="flex items-center justify-end mt-6 gap-x-6">
                                <button type="button" onClick={handleBack} className="text-sm font-semibold leading-6 text-gray-900">
                                Back
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

                    {step === 3 && (
                        //Additional info
                        <div className="w-full space-y-12">
                            <div className="pb-12 border-b border-gray-900/10">
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Additional Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Please fill out the necessary fields with your business additonal information.</p>
                                    <div className="py-8 border-b sm:col-span-12">
                                        <p className="mb-6 text-gray-700">(1) Please select the land to be used for your business:</p>
                                        <div className="flex items-center mb-4">
                                            <input
                                            type="radio"
                                            id="own"
                                            name="building_used"
                                            value="own"
                                            checked={selectedBuildingOption === 'own'}
                                            onChange={handleBuildingOptionChange}
                                            className="mr-2"
                                            />
                                            <label htmlFor="own" className="text-gray-800 cursor-pointer">Own</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input
                                            type="radio"
                                            id="lease"
                                            name="building_used"
                                            value="lease"
                                            checked={selectedBuildingOption === 'lease'}
                                            onChange={handleBuildingOptionChange}
                                            className="mr-2"
                                            />
                                            <label htmlFor="lease" className="text-gray-800 cursor-pointer">Lease</label>
                                        </div>

                                        {selectedBuildingOption === 'lease' && (
                                        <div className="p-4 mt-6 bg-white shadow-md">
                                            <h2 className="mb-2 text-lg font-bold text-gray-800">Lease Information</h2>
                                            <div className="mb-4">
                                                <label htmlFor="building_landlord_name" className="block text-gray-700">Building Landlord Name:</label>
                                                <input
                                                type="text"
                                                id="building_landlord_name"
                                                value={buildingLandlordName}
                                                onChange={(e) => setBuildingLandlordName(e.target.value)}
                                                className="block w-full px-3 py-2 leading-5 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue focus:ring-blue-300"
                                                required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="building_lease_period" className="block text-gray-700">Building Lease Period:</label>
                                                <input
                                                type="text"
                                                id="building_lease_period"
                                                value={buildingLeasePeriod}
                                                onChange={(e) => setBuildingLeasePeriod(e.target.value)}
                                                className="block w-full px-3 py-2 leading-5 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue focus:ring-blue-300"
                                                required
                                                />
                                            </div>
                                        </div>
                                        )}
                                    </div>

                                    <div className="py-8 border-b sm:col-span-12">
                                        <p className="mb-6 text-gray-700">(2) Please select the type of business registration:</p>
                                        <div className="flex items-center mb-4">
                                            <input
                                            type="radio"
                                            id="land_own"
                                            name="land_used"
                                            value="own"
                                            checked={selectedLandOption === 'own'}
                                            onChange={handleLandOptionChange}
                                            className="mr-2"
                                            />
                                            <label htmlFor="land_own" className="text-gray-800 cursor-pointer">Own</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input
                                            type="radio"
                                            id="land_lease"
                                            name="land_used"
                                            value="lease"
                                            checked={selectedLandOption === 'lease'}
                                            onChange={handleLandOptionChange}
                                            className="mr-2"
                                            />
                                            <label htmlFor="land_lease" className="text-gray-800 cursor-pointer">Lease</label>
                                        </div>

                                        {selectedLandOption === 'lease' && (
                                            <div className="p-4 mt-6 bg-white shadow-md">
                                                <h2 className="mb-2 text-lg font-bold text-gray-800">Lease Information</h2>
                                                <div className="mb-4">
                                                    <label htmlFor="land_landlord_name" className="block text-gray-700">Land Landlord Name:</label>
                                                    <input
                                                    type="text"
                                                    id="land_landlord_name"
                                                    value={landLandlordName}
                                                    onChange={(e) => setLandLandlordName(e.target.value)}
                                                    className="block w-full px-3 py-2 leading-5 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue focus:ring-blue-300"
                                                    required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="land_lease_period" className="block text-gray-700">Land Lease Period:</label>
                                                    <input
                                                    type="text"
                                                    id="land_lease_period"
                                                    value={landLeasePeriod}
                                                    onChange={(e) => setLandLeasePeriod(e.target.value)}
                                                    className="block w-full px-3 py-2 leading-5 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue focus:ring-blue-300"
                                                    required
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="py-8 border-b sm:col-span-12">
                                        <p className="mb-6 text-gray-700">(3) Please select the risk of chemicals or harmful items being used in the business:</p>
                                        <div className="flex items-center mb-4">
                                            <input
                                            type="radio"
                                            id="harmful_yes"
                                            name="harmful_used"
                                            value="yes"
                                            checked={selectedHarmfulOption === 'yes'}
                                            onChange={handleHarmfulOptionChange}
                                            className="mr-2"
                                            />
                                            <label htmlFor="harmful_yes" className="text-gray-800 cursor-pointer">Yes</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input
                                            type="radio"
                                            id="harmful_no"
                                            name="harmful_used"
                                            value="no"
                                            checked={selectedHarmfulOption === 'no'}
                                            onChange={handleHarmfulOptionChange}
                                            className="mr-2"
                                            />
                                            <label htmlFor="harmful_no" className="text-gray-800 cursor-pointer">No</label>
                                        </div>

                                        {selectedHarmfulOption === 'yes' && (
                                            <div className="p-4 mt-6 bg-white shadow-md">
                                            <h2 className="mb-2 text-lg font-bold text-gray-800">Harmful Information</h2>
                                                <div className="mb-4">
                                                    <label htmlFor="harmful_name" className="block text-gray-700">Harmful Chemical Name:</label>
                                                    <input
                                                    type="text"
                                                    id="harmful_name"
                                                    value={harmfulChemicalName}
                                                    onChange={(e) => setHarmfulChemicalName(e.target.value)}
                                                    className="block w-full px-3 py-2 leading-5 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue focus:ring-blue-300"
                                                    required
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="py-8 border-b sm:col-span-12">
                                        <p className="mb-6 text-gray-700">(4) Please select the risk of powerful machines being used in the business:</p>
                                        <div className="flex items-center mb-4">
                                            <input
                                            type="radio"
                                            id="powerful_yes"
                                            name="powerful_used"
                                            value="yes"
                                            checked={selectedPowerfulOption === 'yes'}
                                            onChange={handlePowerfulOptionChange}
                                            className="mr-2"
                                            />
                                            <label htmlFor="powerful_yes" className="text-gray-800 cursor-pointer">Yes</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input
                                            type="radio"
                                            id="powerful_no"
                                            name="powerful_used"
                                            value="no"
                                            checked={selectedPowerfulOption === 'no'}
                                            onChange={handlePowerfulOptionChange}
                                            className="mr-2"
                                            />
                                            <label htmlFor="powerful_no" className="text-gray-800 cursor-pointer">No</label>
                                        </div>

                                        {selectedPowerfulOption === 'yes' && (
                                            <div className="p-4 mt-6 bg-white shadow-md">
                                            <h2 className="mb-2 text-lg font-bold text-gray-800">Powerful machines Information</h2>
                                                <div className="mb-4">
                                                    <label htmlFor="powerful_name" className="block text-gray-700">Powerful machines Name:</label>
                                                    <input
                                                    type="text"
                                                    id="powerful_name"
                                                    value={powerfulChemicalName}
                                                    onChange={(e) => setPowerfulChemicalName(e.target.value)}
                                                    className="block w-full px-3 py-2 leading-5 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue focus:ring-blue-300"
                                                    required
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="py-8 sm:col-span-12">
                                        <p className="mb-6 text-gray-700">(5) Please indicate whether your business has been approved by the Union Government:</p>
                                        <div className="flex items-center mb-4">
                                            <input
                                            type="radio"
                                            id="approve_yes"
                                            name="approve_yes"
                                            value="yes"
                                            checked={selectedApproveOption === 'yes'}
                                            onChange={handleApproveOptionChange}
                                            className="mr-2"
                                            />
                                            <label htmlFor="approve_yes" className="text-gray-800 cursor-pointer">Yes</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input
                                            type="radio"
                                            id="approve_no"
                                            name="approve_no"
                                            value="no"
                                            checked={selectedApproveOption === 'no'}
                                            onChange={handleApproveOptionChange}
                                            className="mr-2"
                                            />
                                            <label htmlFor="approve_no" className="text-gray-800 cursor-pointer">No</label>
                                        </div>

                                        {selectedApproveOption === 'yes' && (
                                            <div className="p-4 mt-6 bg-white shadow-md">
                                            <h2 className="mb-2 text-lg font-bold text-gray-800">Shareholder Information</h2>
                                            <p className="mt-1 text-sm leading-6 text-gray-600">Please fill out the necessary fields with your business's Shareholder information.</p>
                                                <div className="mb-4">
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
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </div>
                            <div className="flex items-center justify-end mt-6 gap-x-6">
                                <button type="button" onClick={handleBack} className="text-sm font-semibold leading-6 text-gray-900">
                                    Back
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

                    {step === 4 && (
                        //Applicant
                        <div className="space-y-12">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="pb-12 border-b border-gray-900/10">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Business Applicant Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Please provide the required details for your Business Applicant Information:</p>

                                    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name=""
                                                required
                                                placeholder=""
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Passport No
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text"
                                                name="passport_no"
                                                
                                                placeholder="A123456"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                National Id
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text"
                                                name="national_id"
                                                required
                                                placeholder="12/MAKANA(N)123456"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Phone Number
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
                                                Email Address
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
                                        </div>
                    
                                        <div className="sm:col-span-3">
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
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="signature" className="block text-sm font-medium leading-6 text-gray-900">
                                                Signature
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                id="signature"
                                                type="file" 
                                                name="signature"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    e.preventDefault()
                                                    const [file] = e.currentTarget.files
                                                    setSignature(file)
                                                    console.log({ file: file })
                                                }}
                                                required
                                                className="relative flex-auto w-full border border-solid rounded"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="flex items-center justify-end mt-6 gap-x-6">
                                <button type="button" onClick={handleBack} className="text-sm font-semibold leading-6 text-gray-900">
                                Back
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

                    {step === 5 && (
                    //Review
                        <div class="container mx-auto px-4">
                            <div class="sm:max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto">
                                <div class="space-y-12">
                                    <div class="overflow-hidden bg-white shadow sm:rounded-lg">
                                        <div class="px-4 py-6 sm:px-6">
                                            <h3 class="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
                                            <p class="max-w-2xl mt-1 text-sm leading-6 text-gray-500">Personal details and application.</p>
                                        </div>
                                        <div class="border-t border-gray-100"></div>
                                        
                                        <div className="border-t border-gray-100">
                                            
                                        </div>
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