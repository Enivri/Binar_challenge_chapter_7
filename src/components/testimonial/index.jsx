import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import { Wrapper } from "./testimonial.styles";
import imgStar from "../../images/YellowStar.svg";
import imgPhoto1 from "../../images/img_photo.svg";
import imgPhoto2 from "../../images/img_photo2.svg";


const Testimonial = () => {
    return (
        <Wrapper>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                loop={"auto"}
                navigation={{
                    nextEl: "#next-button",
                    prevEl: "#prev-button",
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card-body bg-darkblue01 mx-3 br-5px">
                        <div className="row px-5">
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src={imgPhoto1} alt="eror" />
                            </div>
                            <div className="col-lg-9">
                                <p>
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                </p>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="fw-bold">
                                    John Dee 32, Bromo
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card-body bg-darkblue01 mx-3 br-5px">
                        <div className="row px-5">
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src={imgPhoto2} alt="eror" />
                            </div>
                            <div className="col-lg-9">
                                <p>
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                </p>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="fw-bold">
                                    John Dee 32, Bromo
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card-body bg-darkblue01 mx-3 br-5px">
                        <div className="row px-5">
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src={imgPhoto1} alt="eror" />
                            </div>
                            <div className="col-lg-9">
                                <p>
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                </p>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="fw-bold">
                                    John Dee 32, Bromo
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card-body bg-darkblue01 mx-3 br-5px">
                        <div className="row px-5">
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src={imgPhoto2} alt="eror" />
                            </div>
                            <div className="col-lg-9">
                                <p>
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                    <img src={imgStar} alt="eror" className="star-size" />
                                </p>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="fw-bold">
                                    John Dee 32, Bromo
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container wd-100 d-flex align-items-center justify-content-around mx-auto jrk-btn">
                <button type="button"
                    id="prev-button" className="btn btn-light circle-btn d-flex align-items-center justify-content-center">
                    <h5 className="">&lt;</h5>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button type="button"
                    id="next-button" className="btn btn-success bg-limegreen circle-btn d-flex align-items-center justify-content-center">
                    <h5 className="text-center"> &gt;</h5>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </Wrapper >
    )
}

export default Testimonial