import React, { useRef, useEffect, useState } from 'react'
import { Wrapper, Selection } from "./search.styles";
import { useDispatch, useSelector } from "react-redux";
import imgDown from "../../images/icon_down.png";
import imgCalendar from "../../images/icon_clendar.png";
import imgClock from "../../images/icon_clock.png";
import imgUser from "../../images/icon_user.png";
import { carAction } from "../../store/carSlice";

const Search = () => {
    // const { isWithDriver, availableAt, capacity } = useSelector(state => state.cars.filter)

    const driver = useRef()
    const time = useRef()
    const passenger = useRef()
    const date = useRef()
    const shadowbox = useRef()

    const [isWithDriver, setisWithDriver] = useState("")
    const [availableAt, setavailableAt] = useState("")
    const [availableTime, setavailableTime] = useState("")
    const [capacity, setcapacity] = useState("")

    const dispatch = useDispatch()

    const openOptions = (e) => {
        const { id: target } = e.currentTarget
        if (target === "driver") {
            driver.current.classList.add("position-options-show")
        }
        else if (target === "time") {
            time.current.classList.add("position-options-show")
        }
        else if (target === "passenger") {
            passenger.current.classList.add("position-options-show")
        }
        else if (target === "date") {
            date.current.showPicker()
        }
        shadowbox.current.classList.add("selected")
    }

    const closeOptions = () => {
        driver.current.classList.remove("position-options-show")
        time.current.classList.remove("position-options-show")
        passenger.current.classList.remove("position-options-show")
        shadowbox.current.classList.remove("selected")
    }

    const saveState = (e, target) => {
        const value = e.currentTarget.textContent || e.currentTarget.value
        if (target === "driver") {
            setisWithDriver(value)
        }
        else if (target === "date") {
            setavailableAt(value)
        }
        else if (target === "time") {
            setavailableTime(value)
        } else if (target === "passanger") {
            setcapacity(value)
        }
        closeOptions()
    }

    useEffect(() => {
        window.addEventListener("click", e => {
            if (shadowbox.current && driver.current && time.current && passenger.current && date.current) {
                if (!shadowbox.current.contains(e.target)) {
                    closeOptions()
                }
            }
        })
    }, [])

    const searchButton = (e) => {
        dispatch(carAction.updateFilter({
            isWithDriver,
            availableAt,
            availableTime,
            capacity
        }))
        dispatch(carAction.updateCard())
    }

    return (
        <Wrapper ref={shadowbox} className="row pop-up py-3 justify-content-center">

            <div className="col-lg-2 position-relative reset-padding mx-3 ">
                <div className="d-flex flex-column position-relative">
                    <p className="px-2 text-lable">Tipe Driver</p>
                    <div id="driver" className="form-floating reset-padding px-2" onClick={openOptions}>
                        <input type="text" className="form bg-white driver input-box" id="" placeholder="Pilih Tipe Driver" readOnly value={isWithDriver} />
                        <img src={imgDown} alt="eror" className="img-position-check" />
                    </div>
                </div>
                <Selection ref={driver} className=" position-options driver width-100 px-2">
                    <div className="tipe-driver option-padding driver" onClick={(e) => saveState(e, "driver")}>
                        Dengan Sopir
                    </div>
                    <div className="tipe-driver option-padding driver" onClick={(e) => saveState(e, "driver")}>
                        Tanpa Sopir (Lepas Kunci)
                    </div>
                </Selection>
            </div>

            <div className="col-lg-2 position-relative reset-padding px-2 ">
                <div className="d-flex flex-column position-relative">
                    <p className="px-2 text-lable">Tanggal</p>
                    <div id="date" className="form-floating" onClick={openOptions}>
                        <input type="text" className="form bg-white input-box date" id="" placeholder="Pilih tanggal" readOnly value={availableAt} />
                        <img src={imgCalendar} alt="eror" className="img-position" />
                        <input type="date" ref={date} className="form date-absolute"
                            onChange={(e) => saveState(e, "date")}
                        />
                    </div>
                </div>
            </div>

            <div className="col-lg-2 position-relative reset-padding mx-3">
                <div className="d-flex flex-column position-relative px-2">
                    <p className="px-2 text-lable">Waktu Jemput/Ambil</p>
                    <div id="time" className="form-floating" onClick={openOptions}>
                        <input type="text" className="form bg-white time input-box" id="" placeholder="Pilih Waktu" readOnly value={availableTime} />
                        <img src={imgClock} alt="eror" className="img-position" />
                    </div>
                </div>
                <Selection ref={time} className=" position-options width-100 px-2 time">
                    <div className="tipe-driver option-padding time" onClick={(e) => saveState(e, "time")}>
                        08: 00 WIB
                    </div>
                    <div className="tipe-driver option-padding time" onClick={(e) => saveState(e, "time")}>
                        09: 00 WIB
                    </div>
                    <div className="tipe-driver option-padding time" onClick={(e) => saveState(e, "time")}>
                        10: 00 WIB
                    </div>
                    <div className="tipe-driver option-padding time" onClick={(e) => saveState(e, "time")}>
                        11: 00 WIB
                    </div>
                    <div className="tipe-driver option-padding time" onClick={(e) => saveState(e, "time")}>
                        12: 00 WIB
                    </div>
                </Selection>
            </div>

            <div className="col-lg-2 position-relative reset-padding mx-3">
                <div className="d-flex flex-column position-relative px-2">
                    <p className="px-2 text-lable">Jumlah Penumpang (oprional)</p>
                    <div id="passenger" className="form-floating" onClick={openOptions}>
                        <input type="text" className="form bg-white passenger input-box" id="" placeholder="Jumlah Penumpang" readOnly value={capacity} />
                        <img src={imgUser} alt="eror" className="img-position" />
                    </div>
                </div>
                <Selection ref={passenger} className=" position-options width-100 px-2 passenger">
                    <div className="tipe-driver option-padding passenger" onClick={(e) => saveState(e, "passanger")}>
                        1 orang
                    </div>
                    <div className="tipe-driver option-padding passenger" onClick={(e) => saveState(e, "passanger")}>
                        2 orang
                    </div>
                    <div className="tipe-driver option-padding passenger" onClick={(e) => saveState(e, "passanger")}>
                        3 orang
                    </div>
                    <div className="tipe-driver option-padding passenger" onClick={(e) => saveState(e, "passanger")}>
                        4 orang
                    </div>
                    <div className="tipe-driver option-padding passenger" onClick={(e) => saveState(e, "passanger")}>
                        5 orang
                    </div>
                </Selection>
            </div>

            <div className="col-lg-2 mx-3">
                <p>&nbsp; </p>
                <button type="button" className="btn btn-success bg-limegreen fw-bold cari-mobil" onClick={searchButton}>Cari Mobil</button>
            </div>


        </Wrapper>
    )
}

export default Search