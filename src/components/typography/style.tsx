import styled from 'styled-components';
import { ITypography } from './types';

export const H1 = styled.h1`
    color: black;
`;

export const H2 = styled.h2`
    color: black;
`;

export const H3 = styled.h3`
    color: black;
`;

export const Subtitle1 = styled.p`
    color: black;
`

export const HyperLink = styled.a<Pick<ITypography, 'fontSize'>>`
    color: black;
    font-size: ${({fontSize}) => fontSize ? fontSize : 10} px;
`
