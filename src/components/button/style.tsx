import styled from "styled-components";
import { Color } from "../constants";
import { IButton } from './types';

export const Container = styled.button<IButton>`
    color: ${({color}) => color? color : Color.BLACK};
`