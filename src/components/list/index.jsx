import React from 'react'
import { Wrapper } from "./list.styles";
import imgService from "../../images/Our_Services.jpg";
import imgCheckList from "../../images/checklist.svg";

const List = () => {
    return (
        <Wrapper>
            <div id="1" className="container d-flex justify-content-center align-items-center py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <img src={imgService} alt="eror" className=" wd-85" />
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center flex-column">
                        <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
                            kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                            meeting, dll.</p>
                        <ul className="fa-ul liststyle reset-padding">
                            <li className="py-2 d-flex"><span className="fa-li init"><img src={imgCheckList} alt="eror" className="size-check" /></span>
                                <p className="mrg-15">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                            </li>
                            <li className="py-2 d-flex"><span className="fa-li init"><img src={imgCheckList} alt="eror" className="size-check" /></span>
                                <p className="mrg-15">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                            </li>
                            <li className="py-2 d-flex"><span className="fa-li init"><img src={imgCheckList} alt="eror" className="size-check" /></span>
                                <p className="mrg-15">Sewa Mobil Jangka Panjang Bulanan</p>
                            </li>
                            <li className="py-2 d-flex"><span className="fa-li init"><img src={imgCheckList} alt="eror" className="size-check" /></span>
                                <p className="mrg-15">Gratis Antar - Jemput Mobil di Bandara</p>
                            </li>
                            <li className="py-2 d-flex"><span className="fa-li init"><img src={imgCheckList} alt="eror" className="size-check" /></span>
                                <p className="mrg-15">Layanan Airport Transfer / Drop In Out</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default List