import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserEmail } from '../../Redux/User/UserActions';
import { setEmail } from '../../Redux/User/UsersSlice';

function LoginPage() {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    userEmail: "",
    userPassword: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };
  const handleClickLogin = async (e) => {
    // axios request to backend
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/user/login", 
      // email:userCredentials.userEmail,
      // password:userCredentials.userPassword
      userCredentials
    );
    console.log(userCredentials);
    dispatch(setUserEmail(userCredentials.email));
    localStorage.setItem("token", response.data.token);
    // console.log(data);
    navigate("/");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-800">
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleClickLogin}>
          <div>
            <label
              htmlFor="userEmail"
              className="block text-sm/6 font-medium text-gray-800"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                autoComplete="email"
                required
                value={userCredentials.userEmail}
                onChange={handleInputChange}
                className="text-black block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="userPassword"
                className="block text-sm/6 font-medium text-gray-800"
              >
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="userPassword"
                id="userPassword"
                autoComplete="current-password"
                required
                onChange={handleInputChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-violet-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Log in
            </button>
            <p className="text-center">
              Do not have an account ? <Link to={"/signup"}>SignUp</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
