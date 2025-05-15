import React from 'react';
import { Server, Github, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Server className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">NodeJS App</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li className="hover:text-blue-400 transition-colors">Home</li>
              <li className="hover:text-blue-400 transition-colors">Features</li>
              <li className="hover:text-blue-400 transition-colors">About</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Your <span className="text-blue-400">Node.js</span> Application
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            A modern, responsive web application built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold py-3 px-6 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors">
            <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
              <Server className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
            <p className="text-gray-400">
              Built with modern best practices for optimal performance and scalability.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors">
            <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
              <Github className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Open Source</h3>
            <p className="text-gray-400">
              Leverage the power of open source technologies and contribute back to the community.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors">
            <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
              <Globe className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Deployment</h3>
            <p className="text-gray-400">
              Deploy your application globally with just a few clicks using modern cloud platforms.
            </p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-8 px-4 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Server className="h-5 w-5 text-blue-400" />
            <span className="font-semibold">NodeJS App</span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Your Node.js Application. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;