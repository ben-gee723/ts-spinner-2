import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
const LoaderNice = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid blue;
    border-right: 16px solid green;
    border-bottom: 16px solid red;
    width: 120px;
    height: 120px;
    -webkit-animation: ${Spin} 2s linear infinite;
    animation: ${Spin} 2s linear infinite;
`

export default LoaderNice;