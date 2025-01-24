import React, { useState } from "react";

const AddressCard = () => {
  const [address, setAddress] = useState({
    city: "",
    country: "",
    ad1: "",
    ad2: "",
    zipcode: "",
    addressType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Submitted:", address);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Address Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Address Line 1:
          </label>
          <input
            type="text"
            name="ad1"
            value={address.ad1}
            onChange={handleChange}
            placeholder="Enter address line 1"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Address Line 2:
          </label>
          <input
            type="text"
            name="ad2"
            value={address.ad2}
            onChange={handleChange}
            placeholder="Enter address line 2"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            City:
          </label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
            placeholder="Enter city"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Country:
          </label>
          <input
            type="text"
            name="country"
            value={address.country}
            onChange={handleChange}
            placeholder="Enter country"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            ZIP Code:
          </label>
          <input
            type="text"
            name="zipcode"
            value={address.zipcode}
            onChange={handleChange}
            placeholder="Enter ZIP code"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Address Type:
          </label>
          <select
            name="addressType"
            value={address.addressType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="" disabled>
              Select Address Type
            </option>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddressCard;
