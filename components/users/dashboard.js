import Link from "next/link";
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { DocumentAdd, DocumentDuplicate, Key, UserAdd, Home } from "heroicons-react";
import { useRouter } from 'next/router'

export default function UserProfile( { session } ) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const router = useRouter()
    const [company, setCompanyData] = useState(null)
    const [business, setBusinessData] = useState(null)

    // load more functionality Start
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const [showAllBusiness, setShowAllBusiness] = useState(false);
    const toggleShowAllBusiness = () => {
        setShowAllBusiness(!showAllBusiness);
    };

    // load more functionality End

    useEffect(() => {
        if (!user) {
          router.push('/login')
          return
        }
        
        const fetchCompanyData = async () => {
          const { data, error } = await supabase
            .from('companies')
            .select(`
                name,
                address_street,
                address_city,
                address_state,
                address_country,
                address_zip,
                phone,
                email,
                status,
                created_at,
                user_id,
                registration_level,
                district,
                shareholderslist (name, percentage),
                directorslist (name, national_id, passport_no),
                businesseslist (name),
                required_documents (doc1, doc2, doc3)
            `)
            .eq('user_id', user.id)
            .single()
          
            if (error) {
                console.log('Error fetching company data:', error.message)
                return
            }
            
            setCompanyData(data)

            // if (data.shareholderslist) {
            //     console.log(data.shareholderslist[0].name)
            //     console.log(data.shareholderslist[0].percentage)
            // }
          
        }

        const fetchBusinessData = async () => {
            const { data, error } = await supabase
                .from('business')
                .select(`
                    exist_reg_id,
                    type,
                    establishment,
                    operation_area,
                    no_worker,
                    address_street,
                    address_city,
                    address_state,
                    address_country,
                    address_zip,
                    phone,
                    email,
                    status,
                    created_at,
                    user_id,
                    registration_type,
                    registration_level,
                    district,
                    business_owner (owner_name_mm, owner_name_eng, national_id, passport_no, address_street, address_city, address_state, address_country, address_zip, phone, email),
                    shareholderslist (name, percentage),
                    business_additional (building_used, building_landlord_name, building_lease_period, land_used, land_landlord_name, land_lease_period, harmful_chemical_used, harmful_chemical_used_name, powerful_machine_uese, powerful_machine_uese_name, business_approved_gov),
                    business_applicant (name, national_id, passport_no, address_street, address_city, address_state, address_country, address_zip, phone, email, signature)
                `)
                .eq('user_id', user.id)
                .single()
                
                if (error) {
                    console.log('Error fetching business data:', error.message)
                    return
                }
                setBusinessData(data)
          }
        
        fetchCompanyData()
        fetchBusinessData()
    }, [user, router, supabase])

    if (!user) return null

    const handleViewDocument1 = async (doc1) => {
        try {
          const { data, error } = await supabase.storage.from('documents').download(doc1);
          if (error) {
            console.log('error downloading document', error);
            return;
          }
          const file = new Blob([data], { type: 'application/pdf' }); // Change the type as needed
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        } catch (error) {
          console.log('error downloading document', error);
        }
    };

    const handleViewDocument2 = async (doc2) => {
        try {
          const { data, error } = await supabase.storage.from('documents').download(doc2);
          if (error) {
            console.log('error downloading document', error);
            return;
          }
          const file = new Blob([data], { type: 'application/pdf' }); // Change the type as needed
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        } catch (error) {
          console.log('error downloading document', error);
        }
    };

    const handleViewDocument3 = async (doc3) => {
        try {
          const { data, error } = await supabase.storage.from('documents').download(doc3);
          if (error) {
            console.log('error downloading document', error);
            return;
          }
          const file = new Blob([data], { type: 'application/pdf' }); // Change the type as needed
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        } catch (error) {
          console.log('error downloading document', error);
        }
    };

    const handleViewSignature = async (signature) => {
        try {
            const { data, error } = await supabase.storage
            .from('applicant_signature')
            .download(signature);
            if (error) {
            console.log('error downloading signature', error);
            return;
            }
            const file = new Blob([data], { type: 'image/jpeg' }); // Change the type as needed
            const fileURL = URL.createObjectURL(file);
            const iframe = document.createElement('iframe');
            iframe.src = fileURL;
            iframe.width = '500px';
            iframe.height = '500px';
            const modal = document.createElement('div');
            modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            `;
            modal.appendChild(iframe);
            document.body.appendChild(modal);
            modal.addEventListener('click', () => {
            document.body.removeChild(modal);
            });
        } catch (error) {
            console.log('error downloading signature', error);
        }
    };
      

    return (
      <div className="space-y-10 divide-y divide-gray-900/10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
            <div className="px-4 sm:px-0">
                <h2 className="text-base font-semibold leading-7 text-gray-900">User Dashboard</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                Auth UI is a pre-built React component for authenticating users. It supports custom themes and extensible styles to match your brand and aesthetic.
                </p>
                <ul className="py-10">
                    <li className="flex items-center py-3">
                        <Home className="w-5 h-5 mr-2 text-blueGray-400" />
                        <Link href="/users/dashboard" legacyBehavior>
                            <a className="text-sm text-blueGray-600 hover:text-blueGray-500">
                                Dashboard
                            </a>
                        </Link>
                    </li>
                    <li className="flex items-center py-3">
                        <UserAdd className="w-5 h-5 mr-2 text-blueGray-400" />
                        <Link href="/users/profile" legacyBehavior>
                            <a className="text-sm text-blueGray-600 hover:text-blueGray-500">
                            Profile
                            </a>
                        </Link>
                    </li>
                    <li className="flex items-center py-3">
                        <DocumentAdd className="w-5 h-5 mr-2 text-blueGray-400" />
                        <Link href="/company_registration" legacyBehavior>
                            <a className="text-sm text-blueGray-600 hover:text-blueGray-500">
                            Company Registration
                            </a>
                        </Link>
                    </li>
                    <li className="flex items-center py-3">
                        <DocumentDuplicate className="w-5 h-5 mr-2 text-blueGray-400" />
                        <Link href="/business_registration" legacyBehavior>
                            <a className="text-sm text-blueGray-600 hover:text-blueGray-500">
                            Business Registration
                            </a>
                        </Link>
                    </li>
                    <li className="flex items-center py-3">
                        <Key className="w-5 h-5 mr-2 text-blueGray-400" />
                        <Link href="/business_registration" legacyBehavior>
                            <a className="text-sm text-blueGray-600 hover:text-blueGray-500">
                            Business License Registration
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="shadow-sm ring-1 ring-gray-200 sm:rounded-xl md:col-span-2">
                <div className="px-4 py-6 sm:p-8 bg-gray-50 sm:rounded-xl md:col-span-2">
                    <span>Current Applications</span>
                </div>
                {/* Company Start */}
                {company && (
                <div className="w-full px-4 py-6 bg-white border-t sm:p-8 gap-x-6 border-gray-900/10 sm:px-8">
                    {/* Box Start*/}
                    <div className="w-full overflow-hidden bg-white rounded-md shadow-md">
                        {/* Box Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
                            <h2 className="text-sm font-semibold text-gray-800">Company data for user {user.email}</h2>
                            {company ? (
                            <span className="text-sm font-semibold text-gray-500">Date: {new Date(company.created_at).toLocaleDateString()}</span>
                            ) : (
                                <p>Loading company data...</p>
                            )}
                        </div>
                        
                        {/* Box Body */}
                        <div className="p-4">
                            {company ? (
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2 p-4 rounded-md sm:col-span-2">
                                    <div className="grid grid-cols-2 text-sm">
                                        {showAll ? (
                                        <>  
                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Registration Level:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{company.registration_level}{company.district}</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Company Name:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{company.name}</div>
                                            </div>

                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Company Address:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{[company.address_street, company.addressCity, company.address_state, company.address_zip, company.address_country].filter(Boolean).join(", ")}</div>
                                            </div>

                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Company Phone:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{company.phone}</div>
                                            </div>
                                           
                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Company Email:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{company.email}</div>
                                            </div>

                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Shareholders List:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                {company.shareholderslist ? company.shareholderslist.map((shareholder, index) => (
                                                <div key={index} className="col-span-1 py-1">
                                                    {shareholder.name} - {shareholder.percentage} % {' '}
                                                </div>
                                                )) : null}
                                            </div>

                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Directors List:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                {company.directorslist ? company.directorslist.map((director, index) => (
                                                <div key={index} className="py-1">
                                                    {director.name} - {director.national_id} - {director.passport_no} {' '}
                                                </div>
                                                )) : null}
                                            </div>

                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Business List:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                {company.businesseslist ? company.businesseslist.map((business, index) => (
                                                <div key={index} className="py-1">
                                                    {business.name} {' '}
                                                </div>
                                                )) : null}  
                                            </div>

                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Required Documents:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                {company.required_documents ? company.required_documents.map((documnet, index) => (
                                                <div key={index}>
                                                    <div className="flex items-center py-1">
                                                        <div className="flex-shrink-0">
                                                            <p>Doc1:</p>
                                                        </div>
                                                        <div className="flex-shrink-0 ml-4">
                                                            <a href="#" onClick={() => handleViewDocument1(documnet.doc1)}>View</a>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center py-1">
                                                        <div className="flex-shrink-0">
                                                            <p>Doc2:</p>
                                                        </div>
                                                        <div className="flex-shrink-0 ml-4">
                                                            <a href="#" onClick={() => handleViewDocument2(documnet.doc2)}>View</a>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center py-1">
                                                        <div className="flex-shrink-0">
                                                            <p>Doc3:</p>
                                                        </div>
                                                        <div className="flex-shrink-0 ml-4">
                                                            <a href="#" onClick={() => handleViewDocument3(documnet.doc3)}>View</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                )) : null}  
                                            </div>

                                        </>
                                        ) : (
                                        <>
                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Registration Level:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{company.registration_level}{company.district}</div>
                                            </div>

                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Company Name:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{company.name}</div>
                                            </div>

                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Company Address:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{[company.address_street, company.addressCity, company.address_state, company.address_zip, company.address_country].filter(Boolean).join(", ")}</div>
                                            </div>

                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Company Phone:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{company.phone}</div>
                                            </div>
                                           
                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Company Email:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{company.email}</div>
                                            </div>
                                        </>
                                        )}
                                        <div className="col-span-2 py-4 text-center">
                                            <button
                                            className="font-semibold text-blue-900"
                                            onClick={toggleShowAll}
                                            >
                                            {showAll ? 'Less' : 'More'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-md sm:col-span-1">
                                    <div className="flex items-center justify-center w-20 h-8">
                                    <p className="font-medium text-gray-800">{company.status}</p>
                                    </div>
                                </div>
                            </div>
                            ) : (
                                <p>Loading company data...</p>
                            )}
                        </div>
                        
                    </div>
                    {/* Box End*/}
                </div>
                )}
                
                {/* Company End */}
                
                {/* Business Start */}
                {business && (
                <div className="w-full px-4 py-6 bg-white border-t sm:p-8 gap-x-6 border-gray-900/10 sm:px-8">
                    {/* Box Start*/}
                    <div className="w-full overflow-hidden bg-white rounded-md shadow-md">
                        {/* Box Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
                            <h2 className="text-sm font-semibold text-gray-800">Business data for user {user.email}</h2>
                            {business ? (
                            <span className="text-sm font-semibold text-gray-500">Date: {new Date(business.created_at).toLocaleDateString()}</span>
                            ) : (
                                <p>Loading business data...</p>
                            )}
                        </div>
                        
                        {/* Box Body */}
                        <div className="p-4">
                            {business ? (
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2 p-4 rounded-md sm:col-span-2">
                                    <div className="grid grid-cols-2 text-sm">
                                        {showAllBusiness ? (
                                        <>  
                                            {/* Owner */}
                                            {business.business_owner ? business.business_owner.map((owner, index) => (
                                            <div key={index}>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">owner_name_mm:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{owner.owner_name_mm}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">owner_name_eng:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{owner.owner_name_eng}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">national_id:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{owner.national_id}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">passport_no:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{owner.passport_no}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">Address:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{[owner.address_street, owner.addressCity, owner.address_state, owner.address_zip, owner.address_country].filter(Boolean).join(", ")}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">Phone:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{owner.phone}</div>
                                                </div>
                                            
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">Email:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{owner.email}</div>
                                                </div>
                                            </div>
                                            )) : null}

                                            {/* Business */}
                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Registration Type:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{business.registration_type}</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Registration Level:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{business.registration_level}{business.district}</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Existing Registration ID:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{business.exist_reg_id}</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Business Type:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{business.type}</div>
                                            </div>

                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700"> Address:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{[business.address_street, business.addressCity, business.address_state, business.address_zip, business.address_country].filter(Boolean).join(", ")}</div>
                                            </div>

                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700"> Phone:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{business.phone}</div>
                                            </div>
                                           
                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700"> Email:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                <div className="py-1">{business.email}</div>
                                            </div>
                                            
                                            {/* Shareholder */}
                                            <div className="flex flex-col py-1 sm:w-1/3">
                                                <div className="py-1 font-semibold text-gray-700">Shareholders List:</div>
                                            </div>
                                            <div className="flex flex-col py-1 sm:w-2/3">
                                                {business.shareholderslist ? business.shareholderslist.map((shareholder, index) => (
                                                <div key={index} className="col-span-1 py-1">
                                                    {shareholder.name} - {shareholder.percentage} % {' '}
                                                </div>
                                                )) : null}
                                            </div>
                                            
                                            {/* Additional */}
                                            {business.business_additional ? business.business_additional.map((additional, index) => (
                                            <div key={index}>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">building_used:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{additional.building_used}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">building_used:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{additional.building_landlord_name}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">building_lease_period:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{additional.building_lease_period}</div>
                                                </div>
                                            </div>
                                            )) : null}
                                            {/* Applicant */}
                                            {business.business_applicant ? business.business_applicant.map((applicant, index) => (
                                            <div key={index}>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">name:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{applicant.name}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">national_id:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{applicant.national_id}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">passport_no:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{applicant.passport_no}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700"> Address:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{[applicant.address_street, applicant.addressCity, applicant.address_state, applicant.address_zip, applicant.address_country].filter(Boolean).join(", ")}</div>
                                                </div>

                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700"> Phone:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{applicant.phone}</div>
                                                </div>
                                            
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700"> Email:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{applicant.email}</div>
                                                </div>
                                                <div className="flex items-center py-1">
                                                    <div className="flex-shrink-0">
                                                        <p>Signature:</p>
                                                    </div>
                                                    <div className="flex-shrink-0 ml-4">
                                                        <img src={applicant.signature} alt="Signature" onClick={() => handleViewSignature(applicant.signature)} style={{ cursor: 'pointer', maxWidth: '100%', maxHeight: '200px' }} />
                                                    </div>

                                                </div>
                                            </div>
                                            )) : null}

                                        </>
                                        ) : (
                                        <>
                                            {/* Owner */}
                                            {business.business_owner ? business.business_owner.map((owner, index) => (
                                            <div key={index}>
                                                <div  className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">owner_name_mm:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{owner.owner_name_mm}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">owner_name_eng:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{owner.owner_name_eng}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">national_id:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{owner.national_id}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">passport_no:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{owner.passport_no}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">Address:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{[owner.address_street, owner.addressCity, owner.address_state, owner.address_zip, owner.address_country].filter(Boolean).join(", ")}</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">Phone:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{owner.phone}</div>
                                                </div>
                                            
                                                <div className="flex flex-col py-1 sm:w-1/3">
                                                    <div className="py-1 font-semibold text-gray-700">Email:</div>
                                                </div>
                                                <div className="flex flex-col py-1 sm:w-2/3">
                                                    <div className="py-1">{owner.email}</div>
                                                </div>
                                            </div>
                                            )) : null}
                                        </>
                                        )}
                                        <div className="col-span-2 py-4 text-center">
                                            <button
                                            className="font-semibold text-blue-900"
                                            onClick={toggleShowAllBusiness}
                                            >
                                            {showAllBusiness ? 'Less' : 'More'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-md sm:col-span-1">
                                    <div className="flex items-center justify-center w-20 h-8">
                                    <p className="font-medium text-gray-800">{business.status}</p>
                                    </div>
                                </div>
                            </div>
                            ) : (
                                <p>Loading business data...</p>
                            )}
                        </div>
                        
                    </div>
                    {/* Box End*/}
                </div>
                )}
                
                {/* Business End */}
                {(!company && !business) && (
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 p-2 rounded-md sm:col-span-2">
                    <p>No record exists of the registration application being submitted.</p>
                    </div>
                </div>
                )}
            </div>
        </div>
      </div>
    )
}