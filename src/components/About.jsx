import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-center">About BookNest</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to BookNest, your one-stop destination for all things books! At BookNest, we believe in the power of literature to transform lives and open up new worlds. Our mission is to make books accessible to everyone, providing a vast collection of genres and authors to cater to every reader's taste.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Established in 2023, BookNest has quickly grown to become a beloved platform for book enthusiasts. Whether you're looking for the latest bestsellers, timeless classics, or hidden gems, we have something for everyone. Our user-friendly website and dedicated customer service ensure a seamless and enjoyable shopping experience.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          At BookNest, we are more than just a bookstore; we are a community of readers who share a passion for the written word. Join us in our journey to celebrate and promote the love of reading. Stay connected with our blog for book reviews, author interviews, and reading recommendations. Follow us on social media to participate in discussions, book clubs, and exclusive events.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for choosing BookNest. Happy reading!
        </p>
        <Link to="/" className="mt-4 inline-block bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200">Back</Link>
      </div>
    </div>
  );
}

export default About;
