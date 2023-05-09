import React, { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';

export default function RegistrationForm({ businessId }) {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [refresh, setRefresh] = useState(false)
    const router = useRouter();
    const supabase = useSupabaseClient();
    const user = useUser();
    // const user = supabase.auth.user()


    //Fetch Selected Value
    const selectedOption = router.query.selectedOption;
    const selectedDistrict = router.query.selectedDistrict;
    const selectedType = router.query.selectedType;
    
    //Business Start
    const [exist_reg_id, setExistRegId] = useState('');
    const [type, setType] = useState('');
    const [establishment, setEstablishment] = useState('');
    const [operation_area, setOperationArea] = useState('');
    const [no_worker, setNoWorker] = useState('');
    const [addressStreet, setAddressStreet] = useState('');
    const [addressState, setAddressState] = useState('');
    const [addressCountry, setAddressCountry] = useState('');
    const [addressZip, setAddressZip] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('Pending');

    //Owner Start
    const [owner_name_mm, setOwnerNameMM] = useState('');
    const [owner_name_eng, setOwnerNameEng] = useState('');
    const [national_id, setNationalID] = useState('');
    const [passport_no, setPassportNo] = useState('');
    const [addressStreetOwner, setAddressStreetOwner] = useState('');
    const [addressStateOwner, setAddressStateOwner] = useState('');
    const [addressCountryOwner, setAddressCountryOwner] = useState('');
    const [addressZipOwner, setAddressZipOwner] = useState('');
    const [addressCityOwner, setAddressCityOwner] = useState('');
    const [phoneOwner, setPhoneOwner] = useState('');
    const [emailOwner, setEmailOwner] = useState('');
    //Owner End
    
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
    const [applicant_name, setApplicantName] = useState('');
    const [applicant_national_id, setApplicantNationalId] = useState('');
    const [applicant_passport_no, setApplicantPassportNo] = useState('');
    const [addressStreetApplicant, setAddressStreetApplicant] = useState('');
    const [addressStateApplicant, setAddressStateApplicant] = useState('');
    const [addressCountryApplicant, setAddressCountryApplicant] = useState('');
    const [addressZipApplicant, setAddressZipApplicant] = useState('');
    const [addressCityApplicant, setAddressCityApplicant] = useState('');
    const [phoneApplicant, setPhoneApplicant] = useState('');
    const [emailApplicant, setEmailApplicant] = useState('');
    const [signatureUrl, setSignatureUrl] = useState('')
    const [uploading, setUploading] = useState(false);
    
    // Handle upload Signature
    const handleSignatureUpload = (e) => {
        setSignatureUrl(e.target.files[0]);
    };
    
   //End

   //For submit used
   const [business, setBusiness] = useState(null);
   const [isAgreed, setIsAgreed] = useState(false);
   const [isInfoCorrect, setIsInfoCorrect] = useState(false);

   const handleAgreementChange = (event) => {
       setIsAgreed(event.target.checked);
   };

   const handleInfoCorrectChange = (event) => {
       setIsInfoCorrect(event.target.checked);
   };
   
   
    // Address Dropdown (Country/State)
    const countryStateOptions = {
        Myanmar: ["Yangon", "Mandalay", "Naypyidaw", "Bago"],
        Thailand: ["Bangkok", "Chiang Mai", "Phuket"],
        "United States": ["California", "New York", "Texas"],
        Canada: ["Ontario", "Quebec", "British Columbia"],
        Mexico: ["Mexico City", "Cancun", "Tijuana"]
    };

    //For Validation in handleNext
    const [errorMessage, setErrorMessage] = useState({
        
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
                    // Validation criteria for Business Owner

                setStep(step + 1);
                break
                    
                case 2:
                    // Validation criteria for Business Info
                
                setStep(step + 1);
                break;
        
                case 3:
                // Validation criteria for Business Additional
                
                setStep(step + 1);
                break;
        
                case 4:
                //complete
                if (isAgreed) {
                    console.log("Process completed successfully");
                    setStep(step + 1);
                } else {
                    console.log("Please agree to the terms to complete the process");
                }
                break;
                
                case 5:
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
            
            // Insert Business
            const { data: businessData, error: businessError } = await supabase
                .from("business")
                .insert([
                {
                    exist_reg_id: exist_reg_id,
                    type: type,
                    establishment: establishment,
                    operation_area: operation_area,
                    no_worker: no_worker,
                    address_street: addressStreet,
                    address_city: addressCity,
                    address_state: addressState,
                    address_zip: addressZip,
                    address_country: addressCountry,
                    phone,
                    email,
                    status,
                    registration_level: selectedOption,
                    registration_type: selectedType,
                    district: selectedDistrict,
                    user_id: user.id // insert the authenticated user's ID into the companies table
                },
            ]);
            console.log(businessData)
            console.log(` Business created successfully`);

            if (businessError) {
                throw businessError;
            }
            
            // Fetch business ID
            const { data, errorId } = await supabase
                .from("business")
                .select("id")
                .order("created_at", { ascending: false })
                .limit(1);

                if (errorId) {
                console.log("Error fetching business ID:", error);
                } else if (data && data.length > 0) {
                const businessId = data[0].id;
                
                // Insert Business Owner
                const { data: ownerData, error: ownerError } = await supabase
                    .from("business_owner")
                    .insert([
                    {
                        owner_name_mm: owner_name_mm,
                        owner_name_eng: owner_name_eng,
                        national_id: national_id,
                        passport_no: passport_no,
                        address_street: addressStreet,
                        address_city: addressCity,
                        address_state: addressState,
                        address_zip: addressZip,
                        address_country: addressCountry,
                        phone,
                        email,
                        business_id: businessId,
                    },
                ]);
                console.log(ownerData)
                console.log(` Business Owner created successfully`);

                if (ownerError) {
                    throw ownerError;
                }

                // Insert Additionl
                const { data: additionalData, error: additionalError } = await supabase
                    .from("business_additional")
                    .insert([
                    {
                        building_used: selectedBuildingOption,
                        building_landlord_name: buildingLandlordName,
                        building_lease_period: buildingLeasePeriod,
                        land_used: selectedLandOption,
                        land_landlord_name: landLandlordName,
                        land_lease_period: landLeasePeriod,
                        harmful_chemical_used: selectedHarmfulOption,
                        harmful_chemical_used_name: harmfulChemicalName,
                        powerful_machine_uese: selectedPowerfulOption,
                        powerful_machine_uese_name: powerfulChemicalName,
                        business_approved_gov: selectedApproveOption,
                        business_id: businessId,
                    },
                ]);
                console.log(additionalData)
                console.log(` Business Additional created successfully`);

                if (additionalError) {
                    throw additionalError;
                }
                
                // Insert Shareholders
                for (let i = 0; i < shareholders.length; i++) {
                    const shareholder = shareholders[i];
            
                    const { error: shareholderError } = await supabase
                    .from("shareholderslist")
                    .insert({
                        name: shareholder.name,
                        percentage: shareholder.percentage,
                        business_id: businessId,
                    });
            
                    if (shareholderError) {
                    console.log(`Error creating shareholder ${i + 1}:`, shareholderError);
                    } else {
                    console.log(`Shareholder ${i + 1} created successfully`);
                    }
                }

                // Insert Applicant
                const fileNameParts = signatureUrl.name.split('.');
                const fileType = fileNameParts[fileNameParts.length - 1];
                const fileName = `${uuidv4()}.${fileType}`;

                const { error: uploadError } = await supabase.storage
                .from('applicant_signature')
                .upload(fileName, signatureUrl);
                if (uploadError) {
                console.log('error uploading signature', uploadError);
                return;
                }

                const { data: applicantData, error: applicantError } = await supabase
                    .from("business_applicant")
                    .insert([
                    {
                        name: applicant_name, 
                        national_id: applicant_passport_no,
                        passport_no: applicant_national_id,
                        address_street: addressStreetApplicant,
                        address_city: addressCountryApplicant,
                        address_state: addressStateApplicant,
                        address_country: addressCityApplicant,
                        address_zip: addressZipApplicant,
                        phone: phoneApplicant,
                        email: emailApplicant,
                        signature: fileName,
                        business_id: businessId,
                    },
                ]);
                console.log(applicantData)
                console.log(` Business Applicant created successfully`);

                if (applicantError) {
                    throw applicantError;
                }

                //Review
                
                useEffect(() => {
                    if (refresh) {
                      getBusiness()
                      setRefresh(false)
                    }
                }, [refresh])

                async function getBusiness() {
                    try {
                        setLoading(true)
                        const { data: businessData, error: businessError } = await supabase
                        .from('business')
                        .select('*')
                        .eq('id', businessId)
                        .single();
            
                        if (businessError) {
                            console.log('Error fetching business data:', businessError);
                            return;
                        }
                        setBusiness(businessData);
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
                    //Business Info
                        <div className="space-y-12">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="pb-12 border-b border-gray-900/10">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Business Owner Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Please fill out the necessary fields with your business owner information.</p>

                                    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="owner_name_eng" className="block text-sm font-medium leading-6 text-gray-900">
                                                Owner Name (English)
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="owner_name_eng"
                                                value={owner_name_eng} 
                                                onChange={(e) => setOwnerNameEng(e.target.value)}
                                                required
                                                placeholder="Please enter Owner name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="owner_name_mm" className="block text-sm font-medium leading-6 text-gray-900">
                                                Owner Name (Myanmar)
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="owner_name_mm"
                                                value={owner_name_mm} 
                                                onChange={(e) => setOwnerNameMM(e.target.value)}
                                                required
                                                placeholder="Please enter Owner name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="passport_no" className="block text-sm font-medium leading-6 text-gray-900">
                                                Passport No
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text"
                                                name="passport_no"
                                                value={passport_no} 
                                                onChange={(e) => setPassportNo(e.target.value)}
                                                
                                                placeholder="A123456"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="national_id" className="block text-sm font-medium leading-6 text-gray-900">
                                                National Id
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text"
                                                name="national_id"
                                                value={national_id} 
                                                onChange={(e) => setNationalID(e.target.value)}
                                                required
                                                placeholder="12/MAKANA(N)123456"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="phoneOwner" className="block text-sm font-medium leading-6 text-gray-900">
                                                Owner Phone Number
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="phoneOwner"
                                                value={phoneOwner} 
                                                onChange={(e) => setPhoneOwner(e.target.value)}
                                                required
                                                placeholder="0934567890"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>  
                                            {errorMessage.phone && <div className="text-sm text-red-900">{errorMessage.phone}</div>}
                                        </div>
                    
                                        <div className="sm:col-span-3">
                                            <label htmlFor="emailOwner" className="block text-sm font-medium leading-6 text-gray-900">
                                                Owner Email Address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="emailOwner"
                                                value={emailOwner} 
                                                onChange={(e) => setEmailOwner(e.target.value)}
                                                required
                                                placeholder="abcd@example.com"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                    
                                        <div className="sm:col-span-3">
                                            <label htmlFor="addressStreetOwner" className="block text-sm font-medium leading-6 text-gray-900">
                                                Owner Street address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="addressStreetOwner"
                                                value={addressStreetOwner} 
                                                onChange={(e) => setAddressStreetOwner(e.target.value)}
                                                required
                                                placeholder="No. 123, Pyay Road"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>  
                                        </div>


                                        <div className="sm:col-span-3">
                                            <label htmlFor="addressCountryOwner" className="block text-sm font-medium leading-6 text-gray-900">
                                                Country
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                name="addressCountryOwner"
                                                value={addressCountryOwner} 
                                                onChange={(event) => setAddressCountryOwner(event.target.value)}
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
                                                {addressCountryOwner === "Myanmar" || addressCountryOwner === "Thailand" || addressCountryOwner === "United States" || addressCountryOwner === "Canada" || addressCountryOwner === "Mexico" ?(
                                                <select
                                                    name="addressStateOwner"
                                                    value={addressStateOwner} 
                                                    onChange={(e) => setAddressStateOwner(e.target.value)}
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
                                                >
                                                    <option value="">Choose</option>
                                                    {countryStateOptions[addressCountryOwner].map((state) => (
                                                    <option key={state} value={state}>
                                                        {state}
                                                    </option>
                                                    ))}
                                                </select>
                                                ) : (
                                                <input
                                                    type="text" 
                                                    name="addressStateOwner"
                                                    value={addressStateOwner} 
                                                    onChange={(e) => setAddressStateOwner(e.target.value)}
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
                                                name="addressCityOwner"
                                                value={addressCityOwner} 
                                                onChange={(e) => setAddressCityOwner(e.target.value)}
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
                                                name="addressZipOwner"
                                                value={addressZipOwner} 
                                                onChange={(e) => setAddressZipOwner(e.target.value)}
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
                                            <label htmlFor="exist_reg_id" className="block text-sm font-medium leading-6 text-gray-900">
                                                Existing Registration ID
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="exist_reg_id"
                                                value={exist_reg_id} 
                                                onChange={(e) => setExistRegId(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                                                Type of Business
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                id=""
                                                name="type"
                                                value={type} 
                                                onChange={(e) => setType(e.target.value)}
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
                                                >
                                                    <option value="type-1">Type-1</option>
                                                    <option value="type-2">Type-2</option>
                                                    <option value="type-3">Type-3</option>
                                                    <option value="type-4">Type-3</option>
                                                    <option value="type-5">Type-4</option>
                                                    <option value="type-6">Type-5</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="establishment" className="block text-sm font-medium leading-6 text-gray-900">
                                                Period of Business Establishment
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="establishment"
                                                value={establishment} 
                                                onChange={(e) => setEstablishment(e.target.value)}
                                                required
                                                placeholder=""
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="operation_area" className="block text-sm font-medium leading-6 text-gray-900">
                                                Business Operations Area
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="operation_area"
                                                value={operation_area} 
                                                onChange={(e) => setOperationArea(e.target.value)}
                                                required
                                                placeholder=""
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="no_worker" className="block text-sm font-medium leading-6 text-gray-900">
                                                No of Workers
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="no_worker"
                                                value={no_worker} 
                                                onChange={(e) => setNoWorker(e.target.value)}
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
                                        <p className="mb-6 text-gray-700">(1) Please select the building to be used for your business:</p>
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
                                        <p className="mb-6 text-gray-700">(2) Please select the land to be used for your business:</p>
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
                                            <label htmlFor="applicant_name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="applicant_name"
                                                value={applicant_name} 
                                                onChange={(e) => setApplicantName(e.target.value)}
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="applicant_passport_no" className="block text-sm font-medium leading-6 text-gray-900">
                                                Passport No
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text"
                                                name="applicant_passport_no"
                                                value={applicant_passport_no} 
                                                onChange={(e) => setApplicantPassportNo(e.target.value)}
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="applicant_national_id" className="block text-sm font-medium leading-6 text-gray-900">
                                                National Id
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text"
                                                name="applicant_national_id"
                                                value={applicant_national_id} 
                                                onChange={(e) => setApplicantNationalId(e.target.value)}
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="phoneApplicant" className="block text-sm font-medium leading-6 text-gray-900">
                                                Phone Number
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="phoneApplicant"
                                                value={phoneApplicant} 
                                                onChange={(e) => setPhoneApplicant(e.target.value)}
                                                required
                                                placeholder="0934567890"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>  
                                            {errorMessage.phone && <div className="text-sm text-red-900">{errorMessage.phone}</div>}
                                        </div>
                    
                                        <div className="sm:col-span-3">
                                            <label htmlFor="emailApplicant" className="block text-sm font-medium leading-6 text-gray-900">
                                                Email Address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="emailApplicant"
                                                value={emailApplicant} 
                                                onChange={(e) => setEmailApplicant(e.target.value)}
                                                required
                                                placeholder="abcd@example.com"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                    
                                        <div className="sm:col-span-3">
                                            <label htmlFor="addressStreetApplicant" className="block text-sm font-medium leading-6 text-gray-900">
                                                Street address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="addressStreetApplicant"
                                                value={addressStreetApplicant} 
                                                onChange={(e) => setAddressStreetApplicant(e.target.value)}
                                                required
                                                placeholder="No. 123, Pyay Road"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>  
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="addressCountryApplicant" className="block text-sm font-medium leading-6 text-gray-900">
                                                Country
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                name="addressCountryApplicant"
                                                value={addressCountryApplicant} 
                                                onChange={(event) => setAddressCountryApplicant(event.target.value)}
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
                                                {addressCountryApplicant === "Myanmar" || addressCountryApplicant === "Thailand" || addressCountryApplicant === "United States" || addressCountryApplicant === "Canada" || addressCountryApplicant === "Mexico" ?(
                                                <select
                                                    name="addressState"
                                                    value={addressStateApplicant} 
                                                    onChange={(e) => setAddressStateApplicant(e.target.value)}
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
                                                >
                                                    <option value="">Choose</option>
                                                    {countryStateOptions[addressCountryApplicant].map((state) => (
                                                    <option key={state} value={state}>
                                                        {state}
                                                    </option>
                                                    ))}
                                                </select>
                                                ) : (
                                                <input
                                                    type="text" 
                                                    name="addressState"
                                                    value={addressStateApplicant} 
                                                    onChange={(e) => setAddressStateApplicant(e.target.value)}
                                                    required
                                                    placeholder="State / Province"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring--600 sm:text-sm sm:leading-6"
                                                />
                                                )}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="addressCityApplicant" className="block text-sm font-medium leading-6 text-gray-900">
                                                City / Township
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text"
                                                name="addressCityApplicant"
                                                value={addressCityApplicant} 
                                                onChange={(e) => setAddressCityApplicant(e.target.value)}
                                                required
                                                placeholder="Hlaing Township"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring--600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="addressZipApplicant" className="block text-sm font-medium leading-6 text-gray-900">
                                                ZIP / Postal code
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text" 
                                                name="addressZipApplicant"
                                                value={addressZipApplicant} 
                                                onChange={(e) => setAddressZipApplicant(e.target.value)}
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
                                                    className="relative flex-auto block w-full min-w-0 m-0 border border-solid rounded sm:w-full"
                                                    type="file"
                                                    accept="image/*"
                                                    id="signaurlUrl" 
                                                    onChange={handleSignatureUpload}
                                                    disabled={uploading}
                                                />
                                            </div>
                                        </div>
                                                        
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
                                disabled={!isAgreed || !isInfoCorrect}
                                className="px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm btn-primary hover-up-2"
                                >
                                Submit
                                </button>
                            </div>
                        </div>  
                    )}

                    {step === 5 && (
                    //Complete
                        <div className="flex flex-col items-center space-y-12">
                            <h1 className="text-3xl font-bold text-gray-900">Registration Completed!</h1>
                            <p className="text-lg font-medium text-center text-gray-800">
                                Thank you for submitting your business registration. Our team will review and verify the information provided and contact you if any further information is required.
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