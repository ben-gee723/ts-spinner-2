// Not Working Properly

import { Img } from 'react-image';
import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg';

const Spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
const Loader = styled.div`
    border: 0.2em solid rgba(0, 0, 0, 0.1);
    border-top: 0.2em solid #767676;
    border-radius: 50%;
    width: 10rem;
    height: 10;
    animation: ${Spin} 0.6s linear infinite;    
`

export const LoaderReactImage = () => <Img src={logo} loader={<Loader />} />

export default LoaderReactImage;
