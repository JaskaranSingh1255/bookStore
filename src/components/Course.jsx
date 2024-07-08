import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import Cards from './Cards';
import axios from "axios";

function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
    try{ 
       const res=await axios.get("https://bookstoreback-3.onrender.com/book");
       console.log(res.data);
       setBook(res.data);
    }
    catch(error){
      console.log(error);
    }
  };
  getBook();
},[]);
  return (
     <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
     <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          
Step into the world of BookNest, where the magic of literature awaits at every turn. Nestled within our virtual shelves are treasures waiting to be discovered—premium paid books that promise to captivate, educate, and entertain.

At BookNest, we believe in the power of a good book to transport you to new worlds, spark your imagination, and deepen your understanding. Our collection is meticulously curated to offer something for every reader, whether you crave thrilling adventures, profound insights, or heartwarming tales.

From acclaimed bestsellers to hidden literary gems, each book in our repertoire is chosen with care, ensuring a rich and diverse selection that spans genres and tastes. Whether you're exploring the classics or embracing the latest releases, BookNest invites you to indulge in the pleasure of quality reading.

Navigate our user-friendly platform and immerse yourself in an experience designed for book lovers by book lovers. With seamless browsing, personalized recommendations, and detailed book insights, finding your next favorite read is effortless.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
           {
             book.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
           }
        </div>
     </div>
     </>
  )
}

export default Course
