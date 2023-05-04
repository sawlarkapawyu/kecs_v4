import React from 'react';
import Layout from '../components/layout/Layout';
import TextEffect from "../components/elements/TextEffect"
import Link from "next/link";

const Contact = () => {
    return (
        <>
            <Layout>
                <section className="relative pt-24 -mt-24">
                    <div className="absolute inset-0 z-0 hidden w-1/2 ml-auto lg:block bg-blueGray-100" style={{ "zIndex": "-1" }}></div>
                    <div className="container">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full px-3 lg:w-1/2">
                                <div className="py-12">
                                    <div className="max-w-lg mx-auto mb-8 text-center lg:max-w-md lg:mx-0 lg:text-left">
                                        <h2 className="mb-4 text-3xl font-bold lg:text-5xl font-heading wow animate__animatedanimated animate__fadeIn">
                                            Committed to <span className="text-blue-500">People</span>, and the future
                                        </h2>
                                        <div className="leading-relaxed text-blueGray-400 wow animate__animatedanimated animate__fadeIn">
                                            We are <strong className="text-blue-500">Monst</strong>, a Creative Design{" "}
                                            <div className="typewrite d-inline text-brand">
                                                <TextEffect text1="Web Agency" text2="Social Marketing" />
                                            </div>
                                        </div>
                                        <p className="mt-3 text-sm leading-relaxed text-blueGray-400 wow animate__animatedanimated animate__fadeIn">Helping you maximize operations management with digitization</p>
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <Link href="/about" legacyBehavior>
                                            <a className="block px-8 py-4 mb-4 text-xs font-semibold leading-none tracking-wide text-center text-white bg-blue-400 rounded hover-up-2 sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-500 wow animate__animatedanimated animate__fadeIn">About Us</a>
                                        </Link>
                                        <Link href="/services" legacyBehavior>
                                            <a className="block px-8 py-4 text-xs font-semibold leading-none text-center bg-white border rounded hover-up-2 sm:inline-block text-blueGray-500 hover:text-blueGray-600 border-blueGray-200 hover:border-blueGray-300 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                                Our Services
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-3 pb-10 mb-12 lg:w-1/2 lg:bg-blueGray-10 lg:mb-0">
                                <div className="flex items-center justify-center">
                                    <img className="lg:max-w-lg" src="/assets/imgs/illustrations/team.svg" alt="Monst" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="max-w-md mx-auto mb-8">
                                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-xl wow animate__animatedanimated animate__fadeIn" data-wow-delay=".1s">
                                    Contact Us
                                </span>
                                <h2 className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn" data-wow-delay=".s">
                                    We will <span className="text-blue-500">be glad</span> to hear from you!
                                </h2>
                            </div>
                            <div>
                                <form>
                                    <div className="mb-4 text-sm wow animate__animatedanimated animate__fadeIn" data-wow-delay=".5s">
                                        <span className="mr-4 font-semibold">Departament:</span>
                                        <label className="mr-4">
                                            <input className="mr-1" type="radio" name="department" value="1" checked="" />
                                            <span>Support</span>
                                        </label>
                                        <label>
                                            <input className="mr-1" type="radio" name="department" value="2" />
                                            <span>Sales</span>
                                        </label>
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <input className="w-full p-4 text-xs font-semibold leading-none border-transparent rounded outline-none bg-blueGray-50 focus:border-blue-500" type="text" placeholder="Subject" />
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <input className="w-full p-4 text-xs font-semibold leading-none border-transparent rounded outline-none bg-blueGray-50 focus:border-blue-500" type="text" placeholder="Name" />
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <input className="w-full p-4 text-xs font-semibold leading-none border-transparent rounded outline-none bg-blueGray-50 focus:border-blue-500" type="email" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <textarea className="w-full h-24 p-4 text-xs font-semibold leading-none border-transparent rounded outline-none resize-none bg-blueGray-50 focus:border-blue-500" placeholder="Message..."></textarea>
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <label className="flex px-2 rounded bg-blueGray-50">
                                            <input className="hidden" type="file" name="Choose file" />
                                            <span className="px-4 py-3 my-1 ml-auto text-xs font-semibold leading-none text-white rounded cursor-pointer bg-blueGray-500 hover:bg-blueGray-600"> Browse</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <label>
                                            <input className="mr-1" type="checkbox" name="terms" value="1" />
                                            <span className="text-sm font-semibold">I agree to terms and conditions.</span>
                                        </label>
                                        <button className="px-8 py-4 text-sm font-semibold leading-none text-white bg-blue-500 rounded hover:bg-blue-700" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-blue-500">
                    <div className="container">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="mb-4 text-3xl font-bold text-white lg:text-3xl font-heading">
                                <span>Subscribe now to </span>
                                <span className="text-blue-200">Our Newsletter</span> <br />
                                <span>and get the Coupon code.</span>
                            </h2>
                            <p className="mb-8 text-blueGray-200">All your information is completely confidential</p>
                            <div className="flex flex-wrap max-w-lg mx-auto">
                                <div className="flex w-full px-3 mb-3 bg-blue-500 border border-blue-300 rounded md:w-2/3 md:mb-0 md:mr-6">
                                    <svg className="w-6 h-6 my-auto text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <input className="w-full py-4 pl-3 text-xs font-semibold leading-none text-white placeholder-white bg-blue-500 border-transparent outline-none" type="text" placeholder="Type your e-mail" />
                                </div>
                                <button className="w-full px-8 py-4 text-xs font-semibold leading-none text-white text-blue-800 transition duration-300 ease-in-out bg-white border border-blue-300 rounded md:w-auto hover:text-white hover:border-blue-300 hover:bg-blue-500" type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Contact;