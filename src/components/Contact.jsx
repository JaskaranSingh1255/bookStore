import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();
    
      const [submissionMessage, setSubmissionMessage] = useState('');
      const onSubmit = (data) => {
        console.log(data);
        setSubmissionMessage('Message has been sent');
        reset(); // Reset the form fields after submission
      };
    
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-6">Contact</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
                {...register('email', { required: 'This field is required' })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
                rows="5"
                {...register('message', { required: 'This field is required' })}
              ></textarea>
              {errors.message && <span className="text-red-500">{errors.message.message}</span>}
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">Submit</button>
          </form>
          {submissionMessage && <p className="mt-4 text-green-500">{submissionMessage}</p>}
          <Link to="/" className="mt-4 inline-block bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200">Back</Link>
        </div>
      );
}

export default Contact
