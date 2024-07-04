import React from 'react';
import list from '@public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const Freebook = () => {
    // Filter data based on category "Free"
    const filterData = list.filter((data) => data.category === "Free");
   

    // Slider settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
                <p>
                    At BookNest, we're dedicated to your learning journey. Explore our free courses on writing, professional development, and more. Enhance your skills and knowledge with expert-led classes. Join us today and start learning for free!
                </p>

                <div>
                    <Slider {...settings}>
                        {/* Map through filterData and render Cards component */}
                        {filterData.map((item) => (
    <Cards item={item} key={item.id} />
))}
                    </Slider>
                </div>

            </div>
        </>
    );
};

export default Freebook;
