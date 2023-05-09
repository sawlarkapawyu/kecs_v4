import React from 'react';
import Layout from '../../components/layout/Layout';
import CounterUp from "../../components/elements/Counterup"
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import supabaseLoader from '/src/utilities/supabase-image-loader'
import { UpdateFileInStorage, UploadFileToStorage } from '/src/utilities/storage'

import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

const BusinessRegistration = ({ session }) => {
    
    const router = useRouter();
    const [rendered, setRendered] = useState(false)

    const supabase = useSupabaseClient()
    const [signature, setSignature] = useState(null)

    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [signatureUri, setSignatureUri] = useState('')

    useEffect(() => {
        getApplicant()
    }, [session])
   
    async function getApplicant() {
        try {
          setLoading(true)
    
          let { data, error, status } = await supabase
            .from('business_applicant')
            .select(`signature`)
            .eq('id', user.id)
            .single()
    
          if (error && status !== 406) {
            throw error
          }
    
          if (data) {
            setSignatureUri(data.signature)
          }
        } catch (error) {
          alert('Error loading data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    }

    async function updateApplicant({ signature }) {
        try {
          setLoading(true)
    
          const updates = {
            id: user.id,
            signature,
            updated_at: new Date().toISOString(),
          }
    
          let { error } = await supabase.from('business_applicant').upsert(updates)
          if (error) throw error
          alert('Updated!')
        } catch (error) {
          alert('Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    }
    

    return (
        <>
            <Layout>
                <section className="px-4 py-12 bg-gray-100">
                    <div className="container mx-auto">
                        <h1 className="mb-4 text-3xl font-bold text-gray-800">Image Testing</h1>
                        <p className="mb-6 text-gray-700">Please select whether you want to register your business at the central or district level:</p>
                        <div>
                        <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-12">
                            
                        </div>
                        </div>
                        <div className="form-widget">
                            <div>
                                <button
                                className="block button primary"
                                onClick={() => updateApplicant({ signatureUri })}
                                disabled={loading}
                                >
                                {loading ? 'Loading ...' : 'Update'}
                                </button>
                            </div>

                            <div>
                                <button className="block button" onClick={() => supabase.auth.signOut()}>
                                Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </section>                 
            </Layout>
        </>
    );
};

export default BusinessRegistration;