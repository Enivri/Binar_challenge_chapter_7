import React from 'react'
import { Wrapper } from "./faq.styles";

const Faq = () => {
    return (
        <Wrapper>
            <div id="4" className="container wd-85 py-5">
                <div className="row">
                    <div className="col-sm-5 txts-center">
                        <h3 className="fw-bold">Frequently Asked Question</h3>
                        <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="col-sm-7">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item border-top mrgbot25">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Apa saja syarat yang dibutuhkan?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-top mrgbot25">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Berapa hari minimal sewa mobil lepas kunci?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-top mrgbot25">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-top mrgbot25">
                                <h2 className="accordion-header" id="headingfour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                        Apakah Ada biaya antar-jemput?
                                    </button>
                                </h2>
                                <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-top mrgbot25">
                                <h2 className="accordion-header" id="headingfive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                        Bagaimana jika terjadi kecelakaan
                                    </button>
                                </h2>
                                <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Faq