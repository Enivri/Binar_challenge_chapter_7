import React from 'react'
import { Wrapper } from "./jumbotron.styles";

const Jumbotron = () => {
    return (
        <Wrapper>
            <div className="container wd-85 py-5">
                <div className="d-flex bg-darkblue04 ml-45 wd-100 br-10px align-items-center justify-content-center flex-column">
                    <h1 className="text-white text-center">Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p className=" text-white text-center wd-45 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="lead text-center">
                        <a className="btn btn-success bg-limegreen btn-lg fw-bold" role="button">Mulai Sewa Mobil</a>
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Jumbotron