import React from 'react'
import { Wrapper } from "./footer.styles";
import imgFacebook from "../../images/icon_facebook.png";
import imgInstagram from "../../images/icon_instagram.png";
import imgTwitter from "../../images/icon_twitter.png";
import imgMail from "../../images/icon_mail.png";
import imgTwitch from "../../images/icon_twitch.png";

const Footer = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="col-lg-2">
                        <p className="fw-bold">Our services.</p>
                        <p className="fw-bold">Why Us</p>
                        <p className="fw-bold">Testimonial</p>
                        <p className="fw-bold">FAQ</p>
                    </div>
                    <div className="col-lg-3">
                        <p>Connect with us</p>
                        <p>
                            <img src={imgFacebook} className="px-2" alt="eror"/>
                            <img src={imgInstagram} className="px-2" alt="eror"/>
                            <img src={imgTwitter} className="px-2" alt="eror"/>
                            <img src={imgMail} className="px-2" alt="eror"/>
                            <img src={imgTwitch} className="px-2" alt="eror"/>
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <p>Copyright Binar 2022</p>
                        <div className="navbar-brand bg-darkblue04"></div>
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}

export default Footer