
import { FC } from 'react';
import { ITextField } from './types';
import { Container } from './style';



export const TextField: FC<ITextField> = ({ 
    children, 
    placeHolder = "", 
    isDisable = false
}) => {
    return(<Container placeholder={placeHolder} disabled={isDisable}></Container>);
}