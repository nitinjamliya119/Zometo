import React from 'react'

 export default function Fotter() {
  return (
    <>
      <footer className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-200 mb-8">
            <div className="mb-4 md:mb-0">
              <img src="src/components/Photos/logo.avif" alt="Zomato Logo" className="h-8 rounded" />
            </div>

            <div className="flex space-x-4">
              <div className="relative inline-block text-left">
                <select className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition-all duration-200">
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.586 4.586z"/></svg>
                </div>
              </div>

              <div className="relative inline-block text-left">
                <select className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition-all duration-200">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.586 4.586z"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-8 md:gap-y-12 lg:gap-y-0 gap-x-8">

            <div>
              <h3 className="font-bold text-gray-800 tracking-wider mb-4">ABOUT ZOMATO</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Who We Are</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Work With Us</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Investor Relations</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Report Fraud</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Press Kit</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 tracking-wider mb-4">ZOMAVERSE</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Zomato</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Blinkit</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Feeding India</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Hyperpure</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Zomato Live</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Zomaland</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Weather Union</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 tracking-wider mb-4">FOR RESTAURANTS</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Partner With Us</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Apps For You</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 tracking-wider mb-4">LEARN MORE</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Privacy</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Security</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Terms</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 tracking-wider mb-4">SOCIAL LINKS</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200 text-2xl" aria-label="LinkedIn">
                  &#x2139;
                </a>
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200 text-2xl" aria-label="Instagram">
                  &#x2139;
                </a>
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200 text-2xl" aria-label="Twitter">
                  &#x2139;
                </a>
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200 text-2xl" aria-label="Facebook">
                  &#x2139;
                </a>
              </div>

              <div className="space-y-4">
                <a href="#" className="block w-full">
                  <img src="https://placehold.co/120x40/000000/ffffff?text=App+Store" alt="Download on App Store" className="w-32 h-auto rounded" />
                </a>
                <a href="#" className="block w-full">
                  <img src="https://placehold.co/120x40/000000/ffffff?text=Google+Play" alt="Get it on Google Play" className="w-32 h-auto rounded" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 mt-8 text-xs text-gray-500 leading-relaxed">
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. &copy; 2008-2025 Zomato Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

