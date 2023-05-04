import React from 'react';
import Layout from '../components/layout/Layout';
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusCircleIcon } from "@heroicons/react/outline";

const UserGuide = () => {
    return (
        <>
            <Layout>
                <section className="pt-12 pb-20 bg-top bg-no-repeat lg:bg-contain" style={{ backgroundImage: 'url("assets/imgs/backgrounds/intersect.svg")' }}>
                    <div className="container">
                        <img className="mx-auto mb-10 sm:max-w-sm wow animate__animated animate__fadeIn" data-wow-delay=".1s" src="assets/imgs/illustrations/eating.svg" alt="Monst" />
                        <form className="flex justify-center max-w-3xl mx-auto mb-16 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                            <input className="w-2/3 p-5 text-xs font-bold bg-white rounded-l placeholder-blueGray-800 font-heading focus:border-gray-500 focus:outline-none" placeholder="Search, find any question you want to ask..." />
                            <button className="pr-4 text-blue-600 bg-white rounded-r">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </form>
                        <div className="flex flex-wrap justify-between mb-12 -mx-3">
                            <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                <div className="p-6 bg-white rounded shadow">
                                    <div className="mb-4 text-blue-500">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </div>
                                    <h4 className="mb-3 font-bold font-heading">Internet Things</h4>
                                    <ul className="text-sm list-disc list-inside text-blueGray-400">
                                        <li className="mb-2">Lorem ipsum dolor sit amet</li>
                                        <li className="mb-2">Maecenas efficitur pharetra</li>
                                        <li className="mb-2">Sed lorem ante</li>
                                        <li>Ullamcorper neque</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                <div className="p-6 bg-white rounded shadow">
                                    <div className="mb-4 text-blue-500">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="mb-3 font-bold font-heading">Artificial Intelligence</h4>
                                    <ul className="text-sm list-disc list-inside text-blueGray-400">
                                        <li className="mb-2">Lorem ipsum dolor sit amet</li>
                                        <li className="mb-2">Maecenas efficitur pharetra</li>
                                        <li className="mb-2">Sed lorem ante</li>
                                        <li>Ullamcorper neque</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="p-6 bg-white rounded shadow">
                                    <div className="mb-4 text-blue-500">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h4 className="mb-3 font-bold font-heading">Cloud Computing</h4>
                                    <ul className="text-sm list-disc list-inside text-blueGray-400">
                                        <li className="mb-2">Lorem ipsum dolor sit amet</li>
                                        <li className="mb-2">Maecenas efficitur pharetra</li>
                                        <li className="mb-2">Sed lorem ante</li>
                                        <li>Ullamcorper neque</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/4 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                <div className="p-6 bg-white rounded shadow">
                                    <div className="mb-4 text-blue-500">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                        </svg>
                                    </div>
                                    <h4 className="mb-3 font-bold font-heading">Data Analicys</h4>
                                    <ul className="text-sm list-disc list-inside text-blueGray-400">
                                        <li className="mb-2">Lorem ipsum dolor sit amet</li>
                                        <li className="mb-2">Maecenas efficitur pharetra</li>
                                        <li className="mb-2">Sed lorem ante</li>
                                        <li>Ullamcorper neque</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex-1 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                <div className="px-4 mx-auto lg:ml-0">
                                    <h3 className="mb-8 text-4xl font-bold font-heading wow animate__animated animate__fadeIn">Faqs</h3>
                                    <div>
                                        <Disclosure as="div" className="mt-6 text-lg leading-loose wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex items-center justify-between w-full py-3 mt-4 font-bold border-b border-gray-200">
                                                        <span>Where is my order? Quisque molestie</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>                                                    
                                                    <Disclosure.Panel className="mt-2 text-sm text-gray-700">
                                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-6 text-lg leading-loose wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex items-center justify-between w-full py-3 mt-4 font-bold border-b border-gray-200">
                                                        <span>How can I return an item purchased online?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 text-sm text-gray-700">Since 2007 we have been a visionary and a reliable software design engineering partner for world-class brands. We are a boutique digital transformation consultancy. Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-6 text-lg leading-loose wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex items-center justify-between w-full py-3 mt-4 font-bold border-b border-gray-200">
                                                        <span>Can I cancel or change my order?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 text-sm text-gray-700">Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-6 text-lg leading-loose wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex items-center justify-between w-full py-3 mt-4 font-bold border-b border-gray-200">
                                                        <span>I have promotional or discount code?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 text-sm text-gray-700">Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-6 text-lg leading-loose wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex items-center justify-between w-full py-3 mt-4 font-bold border-b border-gray-200">
                                                        <span>Can I cancel or change my order?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 text-sm text-gray-700">Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-6 text-lg leading-loose wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex items-center justify-between w-full py-3 mt-4 font-bold border-b border-gray-200">
                                                        <span>What are the delivery types you use?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 text-sm text-gray-700">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-6 text-lg leading-loose wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex items-center justify-between w-full py-3 mt-4 font-bold border-b border-gray-200">
                                                        <span>How can I pay for my purchases?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 text-sm text-gray-700">Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-6 text-lg leading-loose wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex items-center justify-between w-full py-3 mt-4 font-bold border-b border-gray-200">
                                                        <span>Can I cancel my order?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 text-sm text-gray-700">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literatureId pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default UserGuide;