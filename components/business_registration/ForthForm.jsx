import React, { useState } from "react";

const ForthForm = ({ formValues }) => {
    const [directors, setDirector] = useState([{ director: "" }]);
    
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...directors];
        list[index][name] = value;
        setDirector(list);
    };

    const handleRemove = (index) => {
        const list = [...directors];
        list.splice(index, 1);
        setDirector(list);
    };

    const handleAdd = () => {
        setDirector([...directors, { director: "" }]);
    };

  return (
    <section className="pt-12">
        <div className="container py-4 mx-auto">
            <div className="flex-wrap">
                
                <form>
                    
                    <div className="space-y-12">
                        <div className="pb-12 border-b border-gray-900/10">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Documents Required</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Please fill out the necessary fields with your company's documents required information.</p>
                                
                                <div className="sm:grid sm:grid-cols-4 sm:items-start sm:gap-4 sm:py-6">
                                    <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        (1) Memorandum of Association
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <div className="flex justify-center max-w-2xl px-6 py-10 border border-dashed rounded-lg border-gray-900/25">
                                        <div className="text-center">
                                            <div className="flex mt-4 text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PDF up to 10MB</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-4 sm:items-start sm:gap-4 sm:py-6">
                                    <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        (2) Article of Association
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <div className="flex justify-center max-w-2xl px-6 py-10 border border-dashed rounded-lg border-gray-900/25">
                                        <div className="text-center">
                                            <div className="flex mt-4 text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative font-semibold text-blue-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PDF up to 10MB</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-4 sm:items-start sm:gap-4 sm:py-6">
                                    <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        (3) List of Business currently operating
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <div className="flex justify-center max-w-2xl px-6 py-10 border border-dashed rounded-lg border-gray-900/25">
                                        <div className="text-center">
                                            <div className="flex mt-4 text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative font-semibold text-blue-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PDF up to 10MB</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-4 sm:items-start sm:gap-4 sm:py-6">
                                    <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        (4) List of Business Activities in XLS format 
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <div className="flex justify-center max-w-2xl px-6 py-10 border border-dashed rounded-lg border-gray-900/25">
                                        <div className="text-center">
                                            <div className="flex mt-4 text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative font-semibold text-blue-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PDF up to 10MB</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    </section>
  );
};

export default ForthForm;