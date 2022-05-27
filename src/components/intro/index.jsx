import React from 'react';
import { Wrapper } from "./intro.styles";
import imgCar from "../../images/img_car.svg"; 

const Intro = ({registerPage}) => {
    return (
        <Wrapper>
                <div className="bg-darkblue01 wd-100">
                    <div className="d-flex row align-items-centre">
                        <div className="col-lg-6 pdnav">
                            <h1 className="fw-bold">Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                                Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            {registerPage && <a href="/filter" className="btn btn-success bg-limegreen">
                                <h5>Mulai Sewa Mobil</h5>
                            </a>}
                        </div>
                        <div className="col-lg-6 reset-padding">
                            <img src= {imgCar} alt = "eror" className = "wd-100"/>
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
}

export default Intro