import React, { useState } from 'react'

 function Login() {
  const [info,setInfo]=useState({
    email:'',
    password:'',
  });

 const handleChanges = (e)=>{
  const {name,value} = e.target;
  setInfo({
    ...info,
    [name]: value,
  });
 };

  return (
    <>
     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  " >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-teal-400">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action=""  className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-teal-400">
                Email address
              </label>
              <div className="mt-2">
                <input
                 onChange={handleChanges}
                  placeholder='exmaple: gow@gmail.com'
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline outline-1 -outline-offset-1 outline-gray-300"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-teal-400">
                  Password
                </label>
             
              </div>
              <div className="mt-2">
                <input
                 placeholder='example: Kalvium'
               
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold   bg-teal-500 focus-visible:outline "
              >
                sumbit
              </button>
            </div>
          </form>

          
        </div>
      </div>
    </>
  )
}
export default Login;