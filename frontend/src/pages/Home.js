import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Diabetic Retinopathy Prediction System
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Advanced AI-powered prediction system for early detection of diabetic retinopathy
        </p>
        <div className="space-x-4">
          <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Get Started
          </Link>
          <Link to="/login" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
            Login
          </Link>
        </div>
      </div>
      
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Early Detection</h3>
          <p className="text-gray-600">Identify diabetic retinopathy in its early stages</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">AI-Powered</h3>
          <p className="text-gray-600">Advanced machine learning algorithms for accurate predictions</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
          <p className="text-gray-600">Simple interface for healthcare professionals</p>
        </div>
      </div>
    </div>
  );
}

export default Home;