import React, { useState } from "react";

const ThirdForm = ({ formValues }) => {
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
            <div className="container py-12 mx-auto">
                <div className="flex-wrap">
                    
                    <form >
                        
                        <div className="space-y-12">
                            <div className="pb-12 border-b border-gray-900/10">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Director Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Please fill out the necessary fields with your company's Director information.</p>
                                {directors.map((single, index) => (
                                <label >
                                    <div key={index} className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                                Director Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={directors.director}
                                                onChange={(e) => handleChange(e, index)}
                                                required
                                                autoComplete="name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        {directors.length !== 1 && (
                                        <div className="sm:col-span-2">
                                            <label className="invisible">
                                            Remove
                                            </label>
                                            <div className="mt-2">
                                            <button
                                                type="button"
                                                onClick={() => handleRemove(index)}
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
                        </div>
                        <button
                            type="button"
                            onClick={handleAdd}
                        >
                            Add Director
                        </button>
                    </form>
                    
                </div>
            </div>
        </section>
  );
};

export default ThirdForm;