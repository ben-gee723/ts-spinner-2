import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const ImgLoader = styled.img`
    // border-radius: 50%;
    width: 7rem;
    height: 7rem;
    animation: ${Spin} 2s linear infinite;    
`

export default ImgLoader;
