import styled from "styled-components"

export const Wrapper = styled.div`
.bg-white{
    background-color: white;
}
.bg-limegreen{
    background-color: #5CB85F;
}
&.pop-up{
    width: 70%;
    margin: 0 auto !important;
    background-color: white;
    border-radius: 10px;
    transform: translateY(-50%);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 10000;
}
.tipe-driver{
    cursor: pointer;
    width: 100%;
    background-color: white;  
}
.tipe-driver:hover{
    background-color: rgb(207, 230, 204);
    color: green;
}
.input-box{
    width: 100%;
    height: 45px;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    border: 1px solid gray;
    position: relative;
    z-index: 1000;
}
.img-position{
    width: 20px;
    position:absolute;
    bottom: 27%;
    right: 5%;
    z-index: 10000;
}
.img-position-check{
    width: 15px;
    position:absolute;
    bottom: 37%;
    right: 10%;
    z-index: 10000;
}
.position-options{
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
}
.position-options-show{
    display: initial;
}
.date-absolute{
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    transform: translateY(-100%);
}
.position-relative{
    position: relative;
}
.reset-padding{
    padding: 0;
}
.text-lable{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.width-100{
    width: 100%;
}
.option-padding{
    padding: 10px;
}
&.selected {
    box-shadow: 0 0 0 1000vmax rgba(0,0,0, 0.5);
    z-index: 100;


}
`
export const Selection = styled.div`
`