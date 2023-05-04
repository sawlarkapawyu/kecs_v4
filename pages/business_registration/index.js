import React, { useState, useEffect } from "react";

import Layout from '../../components/layout/Layout';
import CounterUp from "../../components/elements/Counterup"

import FirstForm from "/components/business_registration/FirstForm.jsx";
import SecondForm from "/components/business_registration/SecondForm.jsx";
import ThirdForm from "/components/business_registration/ThirdForm.jsx";
import ForthForm from "/components/business_registration/ForthForm.jsx";

import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

const BusinessRegistration = ({ session }) => {
    const supabase = useSupabaseClient()
    const user = useUser()
    
    const formList = ["FirstForm", "SecondForm", "ThirdForm", 'ForthForm'];
    const formLength = formList.length;
    const [page, setPage] = useState(0);
    const handlePrev = () => {
        setPage(page === 0 ? formLength - 1 : page - 1);
    };
    const handleNext = () => {
        setPage(page === formLength - 1 ? 0 : page + 1);
    };
    const initialValues = {
        // name: "",
        
    };
    const [values, setValues] = useState(initialValues);
    const handleForms = () => {
        switch (page) {
          case 0: {
            return (
              <div>
                <FirstForm formValues={values} onChange={onChange}></FirstForm>
              </div>
            );
          }
          case 1: {
            return (
              <SecondForm
                formValues={values}
                onChange={onChange}
                option={states}
              ></SecondForm>
            );
          }
          case 2: {
            return (
              <ThirdForm
                formValues={values}
                onChange={onChange}
                option={states}
              ></ThirdForm>
            );
          }
          case 3: {
            return <ForthForm formValues={values} onChange={onChange}></ForthForm>;
          }
          default:
            return null;
        }
    };
    const states = [
        { id: "0", name: "Paris" },
        { id: "1", name: "London" },
        { id: "2", name: "Berlin" },
        { id: "3", name: "Warsaw" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await setTimeout(() => {
          console.log("form", values);
        }, 2000);
        return response;
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues({ ...values, [name]: type === "checkbox" ? checked : value });
    };
    
    const setForm = (e) => {
        const name = e.target.innerText;
        switch (name) {
            case "Company Info": {
            return setPage(0);
            }
            case "Shareholders Info": {
            return setPage(1);
            }
            case "Directors Info": {
            return setPage(2);
            }
            case "Documents Required": {
                return setPage(3);
                }
            default:
            setPage(0);
        }
    };
      
    return (
        <>
            <Layout>
                <section className="pt-40 pb-12 -mt-24 bg-blueGray-100">
                    <div className="container">
                        <h1 className="mb-5 text-2xl font-bold lg:text-5xl wow animate__animated animate__fadeIn animated">Business Registration</h1>
                        <ul className="flex pb-12 text-sm text-gray-500 lg:text-sm wow animate__animated animate__fadeIn animated">
                            <li className="inline-flex items-center">
                                <a href="#" className="text-gray-800 hover:text-blue-500">
                                    Home
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-auto h-5 text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center">
                                <a href="#" className="text-gray-800 hover:text-blue-500">
                                    Registrations
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-auto h-5 text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center text-gray-400">
                                <span>Business Registrstion</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <div className="container py-4 mx-auto">
               
                    <ul className="flex justify-between w-full">
                        <li
                        onClick={setForm}
                        className={
                            page === 0 ? "bg-blueGray-50 w-2/6 rounded-lg  " : "bg: transparent"
                        }
                        >
                            <div className="flex items-center ">
                                <span className="flex items-center px-6 py-4 text-sm font-medium">
                                    <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                        <span className="text-gray-500 group-hover:text-gray-900">1</span>
                                    </span>
                                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Company Info {" "} </span>
                                </span>
                            </div>
                        </li>
                        <li
                        onClick={setForm}
                        className={
                            page === 1 ? "bg-blueGray-50  w-2/6 rounded-lg" : "bg: transparent "
                        }
                        >
                            <div className="flex items-center">
                                <span className="flex items-center px-6 py-4 text-sm font-medium">
                                    <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                        <span className="text-gray-500 group-hover:text-gray-900">2</span>
                                    </span>
                                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Shareholders Info {" "} </span>
                                </span>
                            </div>
                        </li>
                        <li
                        onClick={setForm}
                        className={
                            page === 2 ? "bg-blueGray-50 w-2/6 rounded-lg" : "bg: transparent"
                        }
                        >
                            <div className="flex items-center">
                                <span className="flex items-center px-6 py-4 text-sm font-medium">
                                    <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                        <span className="text-gray-500 group-hover:text-gray-900">3</span>
                                    </span>
                                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Directors Info {" "} </span>
                                </span>
                            </div>
                        </li>
                        <li
                        onClick={setForm}
                        className={
                            page === 3 ? "bg-blueGray-50 w-2/6 rounded-lg" : "bg: transparent"
                        }
                        >
                            <div className="flex items-center">
                            <span className="flex items-center px-6 py-4 text-sm font-medium">
                                    <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                        <span className="text-gray-500 group-hover:text-gray-900">4</span>
                                    </span>
                                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Documents Required {" "} </span>
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div className="flex items-center justify-end mt-2 gap-x-6">{handleForms()}</div>
                        <div className="flex items-center justify-end mt-2 gap-x-6">
                            <button
                            onClick={handlePrev}
                            className="text-sm font-semibold leading-6 text-gray-900"
                            disabled={page === 0}
                            >
                            Prev
                            </button>
                            {page === 3 ? (
                            <button
                                onClick={handleSubmit}
                                className="px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm btn-primary hover-up-2 "
                            >
                                Submit
                            </button>
                            ) : (
                            <button
                                onClick={handleNext}
                                className="px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm btn-primary hover-up-2 "
                            >
                                Next
                            </button>
                            )}
                        </div>
                    </div>
                
            </Layout>
        </>
    );
};

export default BusinessRegistration;