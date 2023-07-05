import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="font-sans bg-gray-100 h-screen">
      <div className="text-center py-12">
        <img src={logo} className="mx-auto h-12 w-auto" alt="SportsFanter logo" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Join the waitlist</h2>
        <p className="mt-2 text-sm text-gray-600">Subscribe to be the first to experience SportsFanter</p>
      </div>

      <div className="max-w-md mx-auto px-6">
        <div className="bg-white py-8 px-12 shadow-md rounded-lg">
          <form className="mb-0 space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-gray-100 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Join the waitlist
              </button>
            </div>
          </form>
          <p className="mt-8 text-center text-xs text-gray-500">
            By joining the waitlist, you agree to receive promotional updates from SportsFanter. You can unsubscribe at any time.
          </p>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          SportsFanter is the ultimate destination for sports fans, athletes, journalists, and teams to connect, share stats, and banter about the latest games and events. Sign up now to be one of the first to experience this revolutionary new platform!
        </p>
      </div>
    </div>
  );
}

export default App;