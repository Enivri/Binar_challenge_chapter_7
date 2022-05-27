import styled from "styled-components"

export const Wrapper = styled.div`
#cars-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 2rem;
    width: 80%;
    margin: 0 auto;
}
.size-check{
    width: 24px;
}
.card-img-top{
    height: 222px;
    object-fit: cover;
    border-radius: 2px;
}
.liststyle{
    list-style: none;
}
.reset-padding{
    padding: 0;
}
.mrg-15{
    margin-left: 15px;
}
.bg-limegreen{
    background-color: #5CB85F;
}
.wd-100{
        max-width: 100% !important;
    }
`