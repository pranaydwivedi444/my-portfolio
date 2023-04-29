import "./ProjectSection.styles.css";

import { useEffect } from "react";
import { useState } from "react";

import forkify from "./../../../Assets/projectSnaps/forkify.png";
import ecommerce from "./../../../Assets/projectSnaps/ecommerce.png";
import chess from "./../../../Assets/projectSnaps/chess.png";
import airbnb from "./../../../Assets/projectSnaps/airbnb.png";
import chatAI from "./../../../Assets/chatAIBOT.jpg";

import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/css";
import Title from "../../UI/Title/Title.component";
function ProjectSection() {
  SwiperCore.use([Navigation, Pagination]);

  const [swiper, setSwiper] = useState(null);

  function openLink(event) {
    const url = event.target.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank");
    }
  }

  useEffect(() => {
    if (!swiper) {
      setSwiper(
        new SwiperCore(".product-slider", {
          spaceBetween: 30,
          effect: "fade",
          loop: false,
          navigation: {
            nextEl: ".next",
            prevEl: ".prev",
          },
          on: {
            init: function () {
              var index = this.activeIndex;

              var target = document
                .querySelector(
                  ".product-slider__item:nth-child(" + (index + 1) + ")"
                )
                .getAttribute("data-target");

              console.log(target);

              document
                .querySelectorAll(".product-img__item")
                .forEach((el) => el.classList.remove("active"));

              document.querySelector("#" + target).classList.add("active");
            },
          },
        })
      );
    } else {
      swiper.on("slideChange", function () {
        var index = this.activeIndex;

        var target = document
          .querySelector(".product-slider__item:nth-child(" + (index + 1) + ")")
          .getAttribute("data-target");

        document
          .querySelectorAll(".product-img__item")
          .forEach((el) => el.classList.remove("active"));

        document.querySelector("#" + target).classList.add("active");

        if (swiper.isEnd) {
          document.querySelector(".prev").classList.remove("disabled");
          document.querySelector(".next").classList.add("disabled");
        } else {
          document.querySelector(".next").classList.remove("disabled");
        }

        if (swiper.isBeginning) {
          document.querySelector(".prev").classList.add("disabled");
        } else {
          document.querySelector(".prev").classList.remove("disabled");
        }
      });
    }
  }, [swiper]);
  return (
    <div className="project__container">
      <Title>Projects</Title>
      <div className="wrapper">
        <div className="content">
          <div className="product-img">
            <div className="product-img__item" id="img1">
              <img
                src={forkify}
                alt="forkify"
                className="product-img__img"
                width={"400em"}
              />
            </div>
            <div className="product-img__item" id="img2">
              <img
                src={ecommerce}
                alt="ecommerce"
                className="product-img__img"
                width={"400em"}
              />
            </div>
            <div className="product-img__item" id="img3">
              <img
                src={chatAI}
                alt="chat AI image"
                className="product-img__img"
                width={"400em"}
              />
            </div>
            <div className="product-img__item" id="img4">
              <img
                src={airbnb}
                alt="airbnb"
                className="product-img__img"
                width={"400em"}
              />
            </div>
          </div>
          <div className="product-slider">
            <button className="prev disabled">
              <span className="icon">
                <svg className="icon icon-arrow-right">
                  <use xlinkHref="#icon-arrow-left" />
                </svg>
              </span>
            </button>
            <button className="next">
              <span className="icon">
                <svg className="icon icon-arrow-right">
                  <use xlinkHref="#icon-arrow-right" />
                </svg>
              </span>
            </button>
            <div className="product-slider__wrp swiper-wrapper">
              <div
                className="product-slider__item swiper-slide"
                data-target="img4"
              >
                <div className="product-slider__card">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp"
                    alt="star wars"
                    className="product-slider__cover"
                  />
                  <div className="product-slider__content">
                    <h1 className="product-slider__title">Airbnb Clone</h1>
                    <span className="product-slider__price">
                      Next JS,Tailwind CSS, Mapbox
                    </span>
                    <div className="product-ctr">
                      <div className="product-inf">
                        <span className="product-inf__title">
                          <ul>
                            <li>
                              Developed an Airbnb clone using ReactJS, Next.js,
                              Tailwind CSS, and Mapbox,
                            </li>
                            <li>
                              Incorporated a calendar and date picker feature
                              that allows users to easily select their desired
                              dates and book a listing, streamlining the booking
                              process.
                            </li>
                            <li>
                              Integrated Mapbox to display all listings on a
                              map, providing an intuitive way for users to find
                              their desired location
                            </li>
                          </ul>
                        </span>
                      </div>
                    </div>
                    <div className="product-slider__bottom">
                      <button
                        className="product-slider__cart"
                        data-url="https://github.com/pranaydwivedi444/"
                        onClick={openLink}
                      >
                        Live Link
                      </button>
                      <button
                        className="product-slider__fav js-fav"
                        data-url="https://github.com/pranaydwivedi444/"
                        onClick={openLink}
                      >
                        <span className="heart" /> code here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="product-slider__item swiper-slide"
                data-target="img1"
              >
                <div className="product-slider__card">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-1-bg.webp"
                    alt="star wars"
                    className="product-slider__cover"
                  />
                  <div className="product-slider__content">
                    <h1 className="product-slider__title">
                      Forkify <br /> Recipe Search Engine
                    </h1>
                    <span className="product-slider__price">
                      vanilla js , food2fork API
                    </span>
                    <div className="product-ctr">
                      <div className="product-inf">
                        <span className="product-inf__title">
                          <ul>
                            <li>
                              Developed a complex application that incorporates
                              search functionality and bookmarking based upon
                              MVC architecture.
                            </li>
                            <li>
                              {" "}
                              Integrated the app using AJAX calls to the
                              Food2Fork API to display recipes and search
                              functionality
                            </li>
                            <li>
                              {" "}
                              Built an MVC architecture and utilized modules for
                              code organization and optimization.
                            </li>
                            <li>
                              {" "}
                              Integrated features such as recipe searching,
                              bookmarking, and custom recipe creation which can
                              be uploaded by the user.
                            </li>
                          </ul>
                        </span>
                      </div>
                    </div>
                    <div className="product-slider__bottom">
                      <button
                        className="product-slider__cart"
                        data-url="https://forkify-project-recipe.netlify.app/"
                        onClick={openLink}
                      >
                        LIVE LINK
                      </button>
                      <button
                        className="product-slider__fav js-fav"
                        data-url="https://github.com/pranaydwivedi444/Forkify"
                        onClick={openLink}
                      >
                        <span className="heart" /> CODE HERE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="product-slider__item swiper-slide"
                data-target="img2"
              >
                <div className="product-slider__card">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-2-bg.webp"
                    alt="star wars"
                    className="product-slider__cover"
                  />
                  <div className="product-slider__content">
                    <h1 className="product-slider__title">
                      CROWN CLOTHING <br /> Ecommerce
                    </h1>
                    <span className="product-slider__price">
                      React, Firebase, Stripe Api
                    </span>
                    <div className="product-ctr">
                      <div className="product-inf">
                        <span className="product-inf__title">
                          <ul>
                            <li>
                              Developed a fully functional e-commerce website
                              using React.js, Router,React Context, and Firebase
                              Authentication
                            </li>
                            <li>
                              Developed a fully functional e-commerce website
                              using React.js, Router,React Context, and Firebase
                              Authentication
                            </li>
                            <li>
                              Built a responsive e-commerce application with
                              features such as user shopping cart
                            </li>
                            <li>Integration using stripe API</li>
                          </ul>
                        </span>
                      </div>
                    </div>
                    <div className="product-slider__bottom">
                      <button
                        className="product-slider__cart"
                        data-url="https://crwn-clothing-ecommerce-store.netlify.app/"
                        onClick={openLink}
                      >
                        Live Link
                      </button>
                      <button
                        className="product-slider__fav js-fav"
                        data-url="https://github.com/pranaydwivedi444/crwn-shopping-web--app"
                        onClick={openLink}
                      >
                        <span className="heart" /> CODE HERE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="product-slider__item swiper-slide"
                data-target="img3"
              >
                <div className="product-slider__card">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-3-bg.webp"
                    alt="star wars"
                    className="product-slider__cover"
                  />
                  <div className="product-slider__content">
                    <h1 className="product-slider__title">SAMVAAD CHAT</h1>
                    <span className="product-slider__price">
                      React Js, Firebase , Chat Engine
                    </span>
                    <div className="product-ctr">
                      <div className="product-inf">
                        <span className="product-inf__title">
                          <ul>
                            <li>
                              Three AI bots that can participate in group
                              conversations, answer questions, and provide
                              project assistance.
                            </li>
                            <li>
                              Developed a scalable and maintainable Real time
                              Chat application using React,Chat Engine.
                            </li>
                            <li>
                              AI bot can summarize the entire group conversation
                              and provide a final conclusion.
                            </li>
                          </ul>
                        </span>
                      </div>
                    </div>
                    <div className="product-slider__bottom">
                      <button
                        className="product-slider__cart"
                        data-url="https://github.com/pranaydwivedi444/samvaad-chat"
                        onClick={openLink}
                      >
                        Live Link
                      </button>
                      <button
                        className="product-slider__fav js-fav"
                        data-url="https://github.com/pranaydwivedi444/samvaad-chat"
                        onClick={openLink}
                      >
                        <span className="heart" />
                        CODE HERE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social">
          <a
            href="https://twitter.com/PranayD32"
            target="_blank"
            className="social__item"
          >
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405220/starwars/twitter.webp"
              alt="Pranay Dwivedi"
              className="social__img"
            />
            <span className="social__txt">Pranay Dwivedi</span>
          </a>
          <a
            href="https://github.com/pranaydwivedi444"
            target="_blank"
            className="social__item"
          >
            <img
              src="https://img.icons8.com/material-rounded/60/null/github.png"
              alt="github icon"
              className="social__img"
            />
            <span className="social__txt">other projects </span>
          </a>
        </div>
      </div>
      <svg className="hidden" hidden="">
        <symbol id="icon-arrow-left" viewBox="0 0 32 32">
          <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z" />
        </symbol>
        <symbol id="icon-arrow-right" viewBox="0 0 32 32">
          <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z" />
        </symbol>
      </svg>
    </div>
  );
}

export default ProjectSection;
