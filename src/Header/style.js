import styled from 'styled-components';

export const Container = styled.header`
        height:5rem;
        width:1280px;
        margin: 1rem auto;
        display:flex;
        align-items:center;
        justify-content:space-between;
        
        h2{
            margin: 2rem;
            font-weight:400;
            font-size:2rem;                  
        }
        strong{
            margin:0 2rem; 
        }
        a{
            text-decoration: none;
            color: black;
            padding: 9px;
            transition: color 0.4s;
            
            

            &:hover{
                color: #694E4E;
                border: 1px solid #694E4E;
                border-radius: 5rem;
                padding: 0.5rem;
                
            }

        }
    `