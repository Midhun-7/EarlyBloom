'use client'

import React from 'react';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">🔐 Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-600" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-600" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-600" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account? <a href="#" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
