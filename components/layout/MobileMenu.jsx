import Link from "next/link";
import { useState, useEffect } from "react";
import { Auth } from '@supabase/auth-ui-react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from "next/router";


const MobileMenu = ({ hiddenClass, handleRemove }) => {

    const supabaseClient = useSupabaseClient()
    const user = useUser()
    const router = useRouter();

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}>
                <div className="fixed inset-0 opacity-25 navbar-backdrop bg-blueGray-800"></div>
                <nav className="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto transition duration-300 bg-white border-r">
                    <div className="flex items-center mb-8">
                        <Link href="#" legacyBehavior>
                            <a className="mr-auto text-3xl font-semibold leading-none">
                                <img className="h-10" src="/assets/imgs/logos/kecs-logo.png" alt="KECS" />
                            </a>
                        </Link>
                        <button className="navbar-close" onClick={handleRemove}>
                            <svg className="w-6 h-6 cursor-pointer text-blueGray-400 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="mobile-menu">
                            <li className={isActive.key == 1 ? "mb-1 menu-item-has-children rounded-xl active" : "mb-1 menu-item-has-children rounded-xl"} onClick={() => handleToggle(1)}>
                                <Link href="/" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">Home</a>
                                </Link>
                            </li>
                            <li className="mb-1 rounded-xl">
                                <Link href="/about" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">About Us</a>
                                </Link>
                            </li>
                            <li className={isActive.key == 2 ? "mb-1 menu-item-has-children rounded-xl active" : "mb-1 menu-item-has-children rounded-xl"} onClick={() => handleToggle(2)}>
                                <span className="menu-expand">+</span>
                                <Link href="#" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Registration</a>
                                </Link>
                                <ul className={isActive.key == 2 ? "dropdown pl-5" : "hidden"}>
                                    <li>
                                        <Link href="/company_registration" legacyBehavior>
                                            <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Company Registration</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/business_registration" legacyBehavior>
                                            <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Business Registration</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/license_registration" legacyBehavior>
                                            <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Business License Registration</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-1">
                                <Link href="/legal_resources" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Legal Resources</a>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/user_guides" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">User Guides</a>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/faqs" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Faqs</a>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/contact" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Contact Us</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="pt-6 mt-4 border-t border-blueGray-100">
                            {!user && (
                            // <Link href="/signup" legacyBehavior>
                            //     <a className="block px-4 py-3 mb-3 text-xs font-semibold leading-none text-center text-white bg-blue-400 rounded hover:bg-blue-500">Sign Up</a>
                            // </Link>
                            <Link href="/login" legacyBehavior>
                                <a className="block px-4 py-3 mb-2 text-xs font-semibold leading-none text-center text-blue-500 border border-blue-200 rounded hover:text-blue-700 hover:border-blue-300">Log In</a>
                            </Link>
                            )}
                            {user && (
                               
                               <button onClick={() => supabaseClient.auth.signOut()} className="btn-primary hover-up-2">Sign Out</button>
                           
                            )}
                            <select id="locale-select" style={{border: 'none', outline: 'none', backgroundColor: 'transparent', padding: 20}}>
                                <option value="en">English</option>
                                <option value="mm">Myanmar</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <p className="my-4 text-xs text-blueGray-400">
                            <span>Get in Touch</span>
                            <span className="text-blue-500 underline hover:text-blue-500">contact@kecs.com</span>
                        </p>
                        <a className="inline-block px-1" href="https://facebook.com">
                            <img src="/assets/imgs/icons/facebook-blue.svg" alt="KECS" />
                        </a>
                        <a className="inline-block px-1" href="https://twitter.com">
                            <img src="/assets/imgs/icons/twitter-blue.svg" alt="KECS" />
                        </a>
                        <a className="inline-block px-1" href="https://www.instagram.com">
                            <img src="/assets/imgs/icons/instagram-blue.svg" alt="KECS" />
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;
