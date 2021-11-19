
import { FC } from 'react';
import { Color } from '../constants';
import { Container } from './style';
import { IButton } from './types';

export const Button: FC<IButton> = ({ 
    children, 
    isDisable = false,
    color = Color.WHITE,
    ...others
}) => {
    return(<Container {...others} >{children}</Container>);
}