import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Testimonial.css";
import "./arrows.css";

const settings = {
  arrows: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
  className: "react__slick__slider__parent",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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
      },
    },
  ],
};

const data = [
  {
    id: 1,
    name: "Akshay Mishra",
    title: "Data Engineer Intern at Amazon",
    description:
      "I started my interview preparation journey from the first seminar of O(1). Things were explained very well in detail, from tips and tricks for interviews to resources for DSA and core subjects.CPL was one of the highlights for me as I was able to improve my problem solving skills significantly. I would recommend O(1) to every fresher looking for mentorship, guidance and a productive atmosphere to learn and grow.",
    image: "testimonials/akshayMishra.png",
  },
  {
    id: 2,
    name: "Amarkumar Mishra",
    title: "BackEnd Developer Intern at HackerEarth",
    description:
      "I participated in CPL organized by O(1) Coding Club in May 2020 and I was team leader of my team. As, CPL was a team game it not only helped me to enhance my codingskills but also helped me to understand- 1. How to collaboratively solve a problem as a team. 2. Other better approaches for the same problem that you find out after discussing with your team mates. I would highly recommend to participate in CPL contest organized by O(1) coding club.",
    image: "testimonials/AmarkumarMishra.png",
  },
  {
    id: 3,
    name: "Sakshi Thakur",
    title: "R&D Intern at VMware",
    description:
      "I have been helped a lot from O(1) club! Right from the first seminar, we have been guided in almost everything related to placements. I started participating rigorously in CPL aore subjects. As a fresher guidance and resources helped me to learn and grow.",
    image: "testimonials/SakshiThakur.png",
  },
  {
    id: 4,
    name: "Pranav Manbhekar",
    title: "Software Engineering Intern at Fivetran",
    description:
      "CPL and various knowledge sessions helped me in my competitive coding and interview preparation.CPL was quite helpful as it helped to improve competitive coding in a funway and it also improved coding culture. It would help beginners to kickstart their coding journey. Various off-campus opportunities were also posted which can help to avoid missing on opportunities.",
    image: "testimonials/PranavManbhekar.png",
  },
  {
    id: 5,
    name: "Bhumika Nagrecha",
    title: "SD Intern at Bank of New York Mellon",
    description:
      "I started my interview preparation journey from the first seminar of O(1). Things were explained very well in detail, from tips and tricks for interviews to resources for DSA andin contest streaks which improved my coding skills due to which I could clear the off-campus coding test for a job opportunity at Bank Of New York in my 3rd year itself . So in a nutshell, O(1) club is a single point solution for complete placement guidance.",
    image: "testimonials/BhumikaNagrecha.png",
  },
  {
    id: 6,
    name: "Shrey Agrawal",
    title: "Power Programmer at Infosys",
    description:
      "My first experience with O(1) coding club was from their first seminar and since then, I have nothing but good things to say. From their guidance relating to placements, both on and off campus,to their CPL, everything important was explained and helped in becoming better programmers. I was fortunate enough lead a team in CPL, and watching me, my classmates, and juniors improve every contest was a great experience.",
    image: "testimonials/ShreyAgrawal.png",
  },
  {
    id: 7,
    name: "Vishal Kriplani",
    title: "Software Engineering Intern at Fivetran",
    description:
      "The CPL helped me to maintain the speed and accuracy of problem-solving. Senior-Junior interaction was increased during these events. The Knowledge sessions were quite informative.",
    image: "testimonials/VishalKriplani.png",
  },
  {
    id: 8,
    name: "Sudhanshu Bhogal",
    title: "Software Engineering Intern at Fivetran",
    description:
      "The CPL helped me to maintain the speed and accuracy of problem-solving. Senior-Junior interaction was increased during these events. The Knowledge sessions were quite informative.",
    image: "testimonials/SudhanshuBhogal.png",
  },
];

const TestimonialSlider = () => {
  const [trim, setTrim] = useState(true);

  return (
    <div>
      <section className="testimonial-section">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <span className="section-separator"></span>
            <p>
              We believe in simplicity. Learning can be very simple if you have
              the right approach.
            </p>
          </div>
        </div>
        <div className="testimonials-carousel-wrap">
          <div className="testimonials-carousel">
            <div className="swiper-container">
              <div className="swiper-wrapper"></div>
              <Slider {...settings}>
                {data.map((testimonial) => (
                  <SwiperSlide className="swiper-slide" key={testimonial.id}>
                    <div className="testi-item">
                      <div className="testi-avatar">
                        <img src={testimonial.image} />
                      </div>
                      <div className="testimonials-text-before">
                        <i className="fa fa-quote-right"></i>
                      </div>
                      <div className="testimonials-text">
                        <div className="listing-rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>
                          {(trim &&
                            testimonial.description.substring(0, 250)) ||
                            testimonial.description}

                          <button
                            onClick={() => setTrim(!trim)}
                            style={{
                              borderRadius: "4px ",
                              padding: " 0 2px",
                              fontFamily: "sans-serif",
                              opacity: "0.6",
                              textDecoration: "underline",
                              border: "none",
                            }}
                          >
                            {(trim && `See more`) || `See less`}
                          </button>
                        </p>

                        <div className="testimonials-avatar">
                          {/* <a href="#" className="text-link">in</a> */}
                          <h3>{testimonial.name}</h3>

                          <h4>{testimonial.title}</h4>
                        </div>
                      </div>
                      <div className="testimonials-text-after">
                        <i className="fa fa-quote-left"></i>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Slider>{" "}
            </div>
            <div className="tc-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
