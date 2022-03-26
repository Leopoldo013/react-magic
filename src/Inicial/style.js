import styled from 'styled-components';

export const Container = styled.div`
    max-width:1280px;
    margin:0 auto;
    
    h2 {
        margin:2rem;
        font-size:2rem;
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
    }
`

export const DivCartas = styled.div`
    max-width:1280px;
    display:grid;
    grid-template-columns:repeat(6, 1fr);
    gap:0.25rem;

    img{
        width:150px;
        border-radius: 1rem;
        margin:2rem;
    }

`

export const DivButtons = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`