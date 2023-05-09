import React from 'react';
import Layout from '../../components/layout/Layout';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { v4 as uuidv4 } from 'uuid';

const DocumentAdd = () => {
    
    const router = useRouter();
    const [rendered, setRendered] = useState(false)
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)

    //Add
    const [documents, setDocuments] = useState([]);
    const [documentTitle, setDocumentTitle] = useState('');
    const [documentUrl, setDocumentUrl] = useState(null);
    const [documentCategory, setDocumentCategory] = useState('');
    const [categoryOptions, setCategoryOptions] = useState([]);

    // Fetch categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
        try {
            const { data: categories, error } = await supabase.from('categories').select('id, name');
            if (error) {
            throw error;
            }
            // Map category data to options for the select input
            const options = categories.map((category) => ({
            label: category.name,
            value: category.id,
            }));
            setCategoryOptions(options);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
        };
        fetchCategories();
    }, []);

    // Load documents from Supabase on initial mount
    useEffect(() => {
        const fetchDocuments = async () => {
        const { data, error } = await supabase.from('documents').select(`
            title,
            categories (name),
            file_url
            `);
        if (error) console.log('error', error);
        else setDocuments(data);
        };
        fetchDocuments();
    }, []);

    // Handle file upload
    const handleFileUpload = (e) => {
        setDocumentUrl(e.target.files[0]);
    };

    // Handle document creation
    const handleCreateDocument = async (e) => {
        e.preventDefault();
        const fileNameParts = documentUrl.name.split('.');
        const fileType = fileNameParts[fileNameParts.length - 1];
        const fileName = `${uuidv4()}.${fileType}`;

        const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(fileName, documentUrl);
        if (uploadError) {
        console.log('error uploading document', uploadError);
        return;
        }

        const { data: documentData, error: documentError } = await supabase
            .from("documents")
            .insert([
            {
                title: documentTitle, 
                category_id: documentCategory, 
                file_url: fileName
            },
        ]);
        console.log(documentData)

        if (documentError) {
            throw documentError;
        }
    };
    
    // Handle document download
    const handleDownloadDocument = async (file_url) => {
        try {
          const { data, error } = await supabase.storage.from('documents').download(file_url);
          if (error) {
            console.log('error downloading document', error);
            return;
          }
          const url = window.URL.createObjectURL(new Blob([data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', file_url);
          document.body.appendChild(link);
          link.click();
        } catch (error) {
          console.log('error downloading document', error);
        }
    };

    // Handle document view
    const handleViewDocument = async (file_url) => {
        try {
          const { data, error } = await supabase.storage.from('documents').download(file_url);
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
      
    
    // Handle document deletion
    const handleDeleteDocument = async (documentId) => {
        const { error } = await supabase.from('documents').delete().eq('id', documentId);
        if (error) {
        console.log('error deleting document', error);
        return;
        }
        setDocuments(documents.filter((d) => d.id !== documentId));
    };


    
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
                                    Document
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-auto h-5 text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center text-gray-400">
                                <span>Testing</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="pt-12">
                    <div className="container py-4 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full space-y-12">
                                <form onSubmit={handleCreateDocument}>
                                    <div className='py-2'>
                                    <label htmlFor="documentTitle">Name:</label>
                                        <input
                                            type="text"
                                            id="documentTitle"
                                            value={documentTitle}
                                            onChange={(e) => setDocumentTitle(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className='py-2'>
                                        <label htmlFor="documentCategory">Category:</label>
                                        <select
                                        id="documentCategory"
                                        value={documentCategory}
                                        onChange={(e) => setDocumentCategory(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                        >
                                        <option value="">Select a category</option>
                                        {categoryOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                            {option.label}
                                            </option>
                                        ))}
                                        </select>
                                    </div>
                                    <div className='py-2'>
                                        <label htmlFor="documentUrl">File:</label>
                                        <input type="file" id="documentUrl" onChange={handleFileUpload} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                                    </div>
                                    <button 
                                    type="submit"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                    Create Document
                                    </button>
                                </form>
                                <div className="flow-root mt-8">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead>
                                                    <tr>
                                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                        No
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Title
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Category
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        View
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Download
                                                    </th>
                                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                        <span className="sr-only">Delete</span>
                                                    </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {documents.map((d, index) => (
                                                    <tr key={d.id}>
                                                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                                                        {index + 1}
                                                        </td>
                                                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                                                        {d.title}
                                                        </td>
                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{d.categories.name}</td>
                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"><button onClick={() => handleViewDocument(d.file_url)}>View</button></td>
                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"><button onClick={() => handleDownloadDocument(d.file_url)}>Download</button></td>
                                                        <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                            <button onClick={() => handleDeleteDocument(d.id)}>Delete</button>
                                                        </a>
                                                        </td>
                                                    </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
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

export default DocumentAdd;