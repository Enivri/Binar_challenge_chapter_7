import React from 'react'
import { Wrapper } from "./card.styles";
import { useDispatch } from "react-redux";
import imgUser from "../../images/user_card.png";
import imgGear from "../../images/gear_card.png";
import imgCalendar from "../../images/calendar_card.png";


const Card = ({data}) => {

    const dispatch= useDispatch()

    const {manufacture, model, rentPerDay, description, capacity, transmission, year, image} = data 

    return (
        <Wrapper>
            <div id="cars-container">
                <div className="card">
                    <img src={ image.replace("./", "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/") } alt="eror" className="card-img-top"/>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="">{manufacture}/{model}</h5>
                        <h3 className="fw-bold">Rp {rentPerDay.toLocaleString()}/ hari</h3>
                        <p className="card-text">{description}</p>
                        <ul className="fa-ul liststyle reset-padding">
                            <li className=" d-flex"><span className="fa-li init">
                                <img src={imgUser} alt="eror" className="size-check" /></span>
                                <p className="mrg-15">{capacity} orang</p>
                            </li>
                            <li className=" d-flex"><span className="fa-li init">
                                <img src={imgGear} alt="eror" className="size-check" /></span>
                                <p className="mrg-15">{transmission}</p>
                            </li>
                            <li className=" d-flex"><span className="fa-li init">
                                <img src={imgCalendar} alt="eror" className="size-check" /></span>
                                <p className="mrg-15">Tahun {year}</p>
                            </li>
                        </ul>
                        <button className="btn btn-success bg-limegreen fw-bold wd-100">Pilih Mobil</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Card