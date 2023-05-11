import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { Auth } from '@supabase/auth-ui-react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from "next/router";
import { LoginOutline, LogoutOutline } from "heroicons-react";

const Header = ({handleHidden}) => {
    const [scroll, setScroll] = useState(0)
    const supabaseClient = useSupabaseClient()
    const user = useUser()
    const router = useRouter();
   
    // const handleLocaleChange = (e) => {
    //     const newLocale = e.target.value;
    //     router.push(router.pathname, router.asPath, { locale: newLocale });
    // };
    
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 100
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
    })
    return (
        <>
            <header className={scroll ? "bg-transparent sticky-bar mt-4 stick": "bg-transparent sticky-bar mt-4"}>
                <div className="container bg-transparent">
                
                    <nav className="flex items-center justify-between py-3 bg-transparent">
                        <Link href="/" legacyBehavior>
                            <a className="text-3xl font-semibold leading-none">
                                <img
                                    className="h-10"
                                    src="/assets/imgs/logos/kecs-logo.png"
                                    alt="KECS"
                                />
                            </a>
                        </Link>
                        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            <li className="relative pt-4 pb-4 group">
                                <Link href="/" legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                       Home
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/about" legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li className="relative pt-4 pb-4 group has-child">
                                <Link href="#" legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Registrations
                                    </a>
                                </Link>
                                <ul className="drop-down-menu min-w-200">
                                    <li>
                                        <Link href="/company_registration" legacyBehavior>
                                            <a className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">
                                                Company Registration
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/business_registration" legacyBehavior>
                                            <a className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">
                                                Business Registration
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" legacyBehavior>
                                            <a className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">
                                                Business License Registration 
                                            </a>
                                        </Link>
                                    </li>
                                    <div className="grid grid-cols-2 py-2 divide-x divide-gray-900/5 bg-gray-50">
                                        <a
                                        key=""
                                        href="/user_guides"
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm text-grbay-900 hover:bg-gray-100"
                                        >
                                            <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
                                            <p className="text-sm">User Guides</p>
                                        </a>
                                            
                                        <a
                                        key=""
                                        href="/faqs"
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm text-gray-900 hover:bg-gray-100"
                                        >
                                            <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg>
                                            <p className="text-sm">FAQs</p>
                                        </a>
                                      
                                    </div>
                                </ul>
                                
                            </li>

                            <li className="relative pt-4 pb-4 group has-child">
                                <Link href="#" legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Resources
                                    </a>
                                </Link>
                                <ul className="drop-down-menu min-w-200">
                                    <li>
                                        <Link href="/resources/legal_document" legacyBehavior>
                                            <a className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">
                                                Legal Resources
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" legacyBehavior>
                                            <a className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">
                                                Announcements
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" legacyBehavior>
                                            <a className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500">
                                                Statements
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            
                            <li className="pt-4 pb-4">
                                <Link href="/faqs" legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        FAQs
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/contact" legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Contact Us
                                    </a>
                                </Link>
                            </li>
                        </ul>
                       
                        <div className="hidden lg:block">
                            {!user && (
                                <Link href="/login" legacyBehavior>
                                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md text-blueGray-600 bg-primary hover:bg-primary-dark">
                                        <LoginOutline className="w-6 h-6" />
                                        <span>Log In</span>
                                    </button>
                                </Link>
                            )}
                            
                            {user && (
                            <div className="flex gap-4">
                                <Link href="/users/dashboard">
                                    <button className="flex items-center gap-2 px-2 py-3 text-sm font-semibold rounded-md text-blueGray-600 bg-primary hover:bg-primary-dark">
                                        Dashboard
                                    </button>
                                </Link>
                                <button 
                                onClick={() => supabaseClient.auth.signOut()} 
                                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md text-blueGray-600 bg-primary hover:bg-primary-dark"
                                >
                                <LogoutOutline className="w-6 h-6" />
                                Log Out
                                </button>
                            </div>
                            )}
                        </div>
                        
                        {/* <div className="hover-up-2" style={{border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '5px', padding: '0px'}}>
                            
                        </div> */}
                        <div className="lg:hidden">
                            <button className="flex items-center px-3 py-2 text-blue-500 border border-blue-200 rounded navbar-burger hover:text-blue-700 hover:border-blue-300" onClick={handleHidden}>
                                <svg
                                    className="w-4 h-4 fill-current"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                    
                </div>
            </header>
        </>
    );
};

export default Header;
