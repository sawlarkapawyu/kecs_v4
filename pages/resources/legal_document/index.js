import Layout from '../../../components/layout/Layout';
import CounterUp from "../../../components/elements/Counterup"
import React, { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router';
import DatePicker from "react-datepicker";
import { DocumentDownload, Download } from 'heroicons-react';

const LegalDocumentSearch = () => {
    const router = useRouter();
    const supabase = useSupabaseClient();

    const [legalDocuments, setLegalDocuments] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedLegalType, setSelectedLegalType] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [selectedIssueDate, setSelectedIssueDate] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [legalTypes, setLegalTypes] = useState([]);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetchLegalDocuments();
        fetchLegalTypes();
        fetchDepartments();
    }, []);

    async function fetchLegalDocuments() {
        setIsLoading(true);
        setErrorMessage(null);

        let { data: legalDocuments, error } = await supabase
        .from('legal_document').select(`
            id, 
            title, 
            issue_date,
            doc_url,
            legal_type (id, name),
            department (id, name)
        `)
        .order('created_at', { ascending: false });

        if (error) {
        setErrorMessage(error.message);
        } else {
        setLegalDocuments(legalDocuments);
        }

        setIsLoading(false);
    }
      

    async function fetchLegalTypes() {
        let { data: legalTypes, error } = await supabase.from('legal_type').select('*');

        if (error) {
        setErrorMessage(error.message);
        } else {
        setLegalTypes(legalTypes);
        }
    }

    async function fetchDepartments() {
        let { data: departments, error } = await supabase.from('department').select('*');

        if (error) {
        setErrorMessage(error.message);
        } else {
        setDepartments(departments);
        }
    }

    function handleSearchChange(event) {
        setSearch(event.target.value);
    }

    function filterDocuments() {
        let filteredDocuments = legalDocuments;
      
        // Filter by search keyword
        if (search !== "") {
          filteredDocuments = filteredDocuments.filter(document =>
            document.title.toLowerCase().includes(search.toLowerCase()) ||
            document.legal_type.name.toLowerCase().includes(search.toLowerCase()) ||
            document.department.name.toLowerCase().includes(search.toLowerCase()) ||
            document.issue_date.toLowerCase().includes(search.toLowerCase())
          );
        }
      
        // Filter by legal type
        if (selectedLegalType !== "") {
          filteredDocuments = filteredDocuments.filter(document =>
            document.legal_type.name === selectedLegalType
          );
        }
      
        // Filter by department
        if (selectedDepartment !== "") {
          filteredDocuments = filteredDocuments.filter(document =>
            document.department.name === selectedDepartment
          );
        }

        // Filter by issue date
        if (selectedIssueDate !== "") {
            // Split the selectedIssueDate into two dates for between filtering
            const selectedIssueDateParts = selectedIssueDate.split("-");
            const selectedIssueDateStart = new Date(
            selectedIssueDateParts[0],
            selectedIssueDateParts[1] - 1,
            selectedIssueDateParts[2]
            );
            const selectedIssueDateEnd = new Date(
            selectedIssueDateStart.getTime() + 86400000 // add 24 hours in milliseconds
            );

            filteredDocuments = filteredDocuments.filter(
            (document) =>
                new Date(document.issue_date) >= selectedIssueDateStart &&
                new Date(document.issue_date) < selectedIssueDateEnd
            );
        }
      
        return filteredDocuments;
    }

    const legalTypeOptions = legalTypes.map((type) => (
        <option key={type.name} value={type.name}>
        {type.name}
        </option>
    ));

    const departmentOptions = departments.map((dept) => (
        <option key={dept.name} value={dept.name}>
        {dept.name}
        </option>
    ));

    const legalDocumentRows = filterDocuments().map((document, index) => (
        <tr key={document.id}>
          <td className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">{index + 1}</td>
          <td className="px-3 py-3.5 text-left text-sm font-medium text-gray-500">{document.title}</td>
          <td className="px-3 py-3.5 text-left text-sm font-medium text-gray-500">{document.legal_type.name}</td>
          <td className="px-3 py-3.5 text-left text-sm font-medium text-gray-500">{document.department.name}</td>
          <td className="px-3 py-3.5 text-left text-sm font-medium text-gray-500">{new Date(document.issue_date).toLocaleDateString()}</td>
          <td className="px-3 py-3.5 text-left text-sm font-medium text-gray-500">
            <a href={document.doc_url} download>Download</a>
          </td>
        </tr>
    ));

    return (
        <>
            <Layout>
                <section className="pt-40 pb-12 -mt-24 bg-blueGray-100">
                    <div className="container">
                        <h1 className="mb-5 text-2xl font-bold lg:text-5xl wow animate__animated animate__fadeIn animated">Legal Resources</h1>
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
                                    Resources
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-auto h-5 text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center text-gray-400">
                                <span>Legal Resources</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <div className="container py-4 mx-auto">
                    <div class="grid grid-cols-4 gap-4 text-sm">
                        <div className='grid-cols-none'>
                            <label htmlFor="search" className="block mb-2 font-bold text-gray-700">
                            Search
                            </label>
                            <input
                            type="text"
                            name="search"
                            id="search"
                            value={search}
                            onChange={handleSearchChange}
                            placeholder="Search by title, type, & department"
                            className="w-full px-4 py-2 text-sm border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                            />
                        </div>
                        <div className=''>
                            <label htmlFor="legal_type" className="block mb-2 font-bold text-gray-700">
                            Legal Type
                            </label>
                            <div className="relative">
                                <select
                                    id="legal_type"
                                    value={selectedLegalType}
                                    onChange={(e) => setSelectedLegalType(e.target.value)}
                                    className="w-full h-10 px-5 pr-10 bg-white border-2 border-gray-200 rounded-lg appearance-none hover:border-gray-400 focus:outline-none"
                                >
                                    <option value="">All</option>
                                    {legalTypeOptions}
                                </select>
                            </div>
                        </div>
                        <div>
                        <label htmlFor="department" className="block mb-2 font-bold text-gray-700">
                            Department
                            </label>

                            <div className="relative">
                                <select
                                    id="department"
                                    value={selectedDepartment}
                                    onChange={(e) => setSelectedDepartment(e.target.value)}
                                    className="w-full h-10 px-5 pr-10 bg-white border-2 border-gray-200 rounded-lg appearance-none hover:border-gray-400 focus:outline-none"
                                >
                                    <option value="">All</option>
                                    {departmentOptions}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="date" className="block mb-2 font-bold text-gray-700">
                            Date
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    id="issue_date"
                                    value={selectedIssueDate}
                                    onChange={(e) => setSelectedIssueDate(e.target.value)}
                                    className="w-full h-10 px-5 pr-10 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                                {selectedIssueDate !== "" && (
                                    <button
                                    className="absolute top-0 right-0 px-1 py-2.5 text-sm font-semibold text-gray-700 hover:text-gray-900 focus:text-gray-900"
                                    onClick={() => setSelectedIssueDate("")}
                                    >
                                    Clear
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flow-root mt-8">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                {isLoading && <p>Loading...</p>}
                                {errorMessage && <p>{errorMessage}</p>}
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className='bg-blueGray-100'>
                                        <tr>
                                        <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">No</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Department</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Issue Date</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody className='divide-y divide-gray-200'>{legalDocumentRows}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            

                    
                  
            </Layout>
        </>
    );
};

export default LegalDocumentSearch;