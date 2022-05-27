import styled from "styled-components"

export const Wrapper = styled.div`
.swiper {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-slide {
    width: 50% !important;
}
.bg-darkblue01{
    background-color: rgb(207, 212, 237);
}
.bg-limegreen{
    background-color: #5CB85F;
}
.br-5px{
    border-radius: 5px;
}
.star-size{
    width: 25px;
    height: 25px ;
}
.wd-100{
        max-width: 100% !important;
}
.circle-btn{
    height: 25px;
    width: 25px;
    border-radius: 50%;
}
.jrk-btn{
    width: 120px; 
    margin: 50px;
}
`