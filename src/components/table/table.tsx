import { FC } from 'react';
import { StyledTable, TBody, THead, TFoot, TH, TR, TD } from './style';

export const Table: FC<{}> = ({ children, ...rest }) => {
    return <StyledTable {...rest}>{children}</StyledTable>;
};

export const Head: FC<{}> = ({ children, ...rest }) => {
    return <THead {...rest}>{children}</THead>;
};

export const TableRow: FC<{}> = ({ children, ...rest }) => {
    return <TR {...rest}>{children}</TR>;
};
  
export const TableHead: FC<{}> = ({ children, ...rest }) => {
    return <TH {...rest}>{children}</TH>;
};

export const Body: FC<{}> = ({ children, ...rest }) => {
    return <TBody {...rest}>{children}</TBody>;
};
  
export const Foot: FC<{}> = ({ children, ...rest }) => {
    return <TFoot {...rest}>{children}</TFoot>;
};
  
export const TableData: FC<{}> = ({ children, ...rest }) => {
    return <TD {...rest}>{children}</TD>;
};  
  

  
  

 