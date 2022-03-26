import styled from 'styled-components';

export const Container = styled.div`
max-width:1280px;
height:80vh;
margin:0 auto;
display:flex;
justify-content:space-between;
align-items:center;

`

export const DivContent = styled.div`
    margin:0 2rem;
    display:block;
    h1 {
        font-size: 3rem;
        font-weight:400;
        margin: 1rem 0;
    }

    p{
        font-size: 1.5rem;
        font-weight:400;
    }

    button {
        margin: 1.5rem 0;
        font-size:1rem;
        color:#694E4E;
        padding: 0.50rem 2rem;
        background:#F3C5C5;
        border-radius: 2.5rem;
        cursor: pointer;
        transition: filter 0.3s;

        &:hover {
            filter:brightness(0.9);
        }

        a {
            text-decoration:none;
            color:#694E4E;
        }
    }
    
`

export const DivImg = styled.div`
    
    
    img {
        width: 600px;
        height: 700px;
        border-radius: 7rem;
        
    }
`