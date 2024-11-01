import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Homepage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="p-5">
            <div >
                <Slider {...settings} className="w-full h-[100px]">
                    <div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWWydQPaULdOnolx7XF01igD05Duc7zFU5Q&s"
                            alt="Car Image 1"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWWydQPaULdOnolx7XF01igD05Duc7zFU5Q&s"
                            alt="Car Image 2"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KiQBv307OMrdRxiBmpbKHWsyO4JLP_VQGw&s"
                            alt="Car Image 3"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWWydQPaULdOnolx7XF01igD05Duc7zFU5Q&s"
                            alt="Car Image 4"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwd6PlOvWoLREYlpZr6mTfoEveQ7mHnbyKA&s"
                            alt="Car Image 5"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2d4P-X1zF8Ck119MQoa1ibhQHpPtiepWvQ&s"
                            alt="Car Image 6"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Homepage;
