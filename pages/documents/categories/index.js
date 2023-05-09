import React from 'react';
import Layout from '../../../components/layout/Layout';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

const Category = () => {
    
    const router = useRouter();
    const [rendered, setRendered] = useState(false)
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)


    //Start
    const [name, setName] = useState('');

    //List
    const [categories, setCategories] = useState([]);
    
    //Create
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const { data, error } = await supabase.from('categories').insert({ name });
          if (error) {
            throw error;
          }
          console.log('Category created successfully:', data);
          setName('');
        } catch (error) {
          console.error('Error creating category:', error);
        }
    };

    //List
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const { data, error } = await supabase.from('categories').select('*');
            if (error) {
              throw error;
            }
            setCategories(data);
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
        };
        fetchCategories();
    }, []);

    return (
        <>
            <Layout>
                <section className="px-4 py-12 bg-gray-100">
                    <div className="container mx-auto">
                        <h1 className="mb-4 text-3xl font-bold text-gray-800">Document Category Testing</h1>
                        <p className="mb-6 text-gray-700">Please select whether you want to register your business at the central or district level:</p>
                        <div>
                        <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">
                            
                        </div>
                        </div>
                        <section className="pt-12">
                            <div className="container py-4 mx-auto">
                                <div className="flex flex-wrap">
                                    <div className="space-y-12">
                                        <form onSubmit={handleSubmit}>
                                            <label htmlFor="name">Category Name</label>
                                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
                                            <button type="submit">Create Category</button>
                                        </form>
                                        <ul>
                                        {categories.map((category, index) => (
                                            <table>
                                                <tr key={category.id}>
                                                    <td className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">{index + 1}</td>
                                                    <td className="px-3 py-3.5 text-left text-sm font-medium text-gray-500">{category.name}</td>
                                                </tr>
                                            </table>
                                        ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                    </div>
                </section>                 
            </Layout>
        </>
    );
};

export default Category;