import Link from "next/link";
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Avatar from '/components/users/Avatar.js'

export default function UserProfile( { session } ) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [full_name, setFullname] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, full_name, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setFullname(data.full_name)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, full_name, website, avatar_url }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        full_name,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  
    return (
      <div className="space-y-10 divide-y divide-gray-900/10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">User Profile</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
            Auth UI is a pre-built React component for authenticating users. It supports custom themes and extensible styles to match your brand and aesthetic.
            </p>
            <ul className="py-10">
                <li className="py-3">
                    <Link href="/company_registration" legacyBehavior>
                        <a className="text-sm text-blueGray-600 hover:text-blueGray-500">
                            Company/Business Registration
                        </a>
                    </Link>
                </li>
                <li className="py-3">
                    <Link href="/business_registration" legacyBehavior>
                        <a className="text-sm text-blueGray-600 hover:text-blueGray-500">
                            Small/Enterprises Registration
                        </a>
                    </Link>
                </li>
                <li className="py-3">
                    <Link href="/license_registration" legacyBehavior>
                        <a className="text-sm text-blueGray-600 hover:text-blueGray-500">
                            Business License Registration 
                        </a>
                    </Link>
                </li>
            </ul>
          </div>
  
          <form className="shadow-sm bg-gray-50 ring-1 ring-gray-200 sm:rounded-xl md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="col-span-full relative">
                  <div class="absolute top-0 right-0">
                    <Avatar
                        uid={user.id}
                        url={avatar_url}
                        size={150}
                        onUpload={(url) => {
                            setAvatarUrl(url)
                            updateProfile({ username, website, avatar_url: url })
                        }}
                        />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email" 
                      type="text" 
                      value={session.user.email} 
                      disabled
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={username || ''}
                      onChange={(e) => setUsername(e.target.value)}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="full_name" className="block text-sm font-medium leading-6 text-gray-900">
                    Full name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      value={full_name || ''}
                      onChange={(e) => setFullname(e.target.value)}
                      autoComplete="full_name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                    Website
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
                      <span className="flex items-center pl-3 text-gray-500 select-none sm:text-sm">http://</span>
                      <input
                        type="url"
                        name="website"
                        id="website"
                        value={website || ''}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="www.example.com"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8">
              <button type="button" 
              onClick={() => supabase.auth.signOut()}
              className="text-sm font-semibold leading-6 text-gray-900">
                Sign Out
              </button>
              <button
                onClick={() => updateProfile({ username,full_name, website, avatar_url })}
                disabled={loading}
                className="px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {loading ? 'Loading ...' : 'Update'}
                
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }