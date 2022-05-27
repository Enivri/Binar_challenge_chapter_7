import React from 'react'
import { Wrapper } from "./whyUs.styles";
import imgComplete from "../../images/icon_complete.svg";
import imgPrice from "../../images/icon_price.svg";
import imgHour from "../../images/icon_24hours.svg";
import imgProfessional from "../../images/icon_professional.svg";

const WhyUs = () => {
    return (
        <Wrapper>
            <div id="2" className="container wd-85 py-5 mx-auto">
                <div>
                    <h1>Why Us?</h1>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 py-3">
                        <div className="card mx-auto size-card1">
                            <div className="card-body d-flex flex-column justify-content-around">
                                <p className="d-flex">
                                    <img src={imgComplete} alt="eror" />
                                </p>
                                <h5 className="card-title">Mobil Lengkap</h5>
                                <p className="card-text py-2">Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan
                                    terawat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 py-3">
                        <div className="card mx-auto size-card1">
                            <div className="card-body d-flex flex-column justify-content-around">
                                <p className="d-flex">
                                    <img src={imgPrice} alt="eror" />
                                </p>
                                <h5 className="card-title">Harga Murah</h5>
                                <p className="card-text py-2">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                                    mobil
                                    lain.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 py-3">
                        <div className="card mx-auto size-card1">
                            <div className="card-body d-flex flex-column justify-content-around">
                                <p className="d-flex">
                                    <img src={imgHour} alt="eror" />
                                </p>
                                <h5 className="card-title">Layanan 24 Jam</h5>
                                <p className="card-text py-2">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia
                                    di
                                    akhir
                                    minggu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 py-3">
                        <div className="card mx-aut0 size-card1">
                            <div className="card-body d-flex flex-column justify-content-around">
                                <p className="d-flex">
                                <img src={imgProfessional} alt="eror" />
                                </p>
                                <h5 className="card-title">Supir Profesional</h5>
                                <p className="card-text py-2">Sopir yang profesional, berpengalaman, jujur, ramah, dan selalu tepat
                                    waktu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default WhyUs