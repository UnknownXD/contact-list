import { FC } from "react";
import { ITypography } from "./types";
import { H1, H2, H3, HyperLink, Subtitle1 } from './style';

export const Typography: FC<ITypography> = ({ children, variant, fontSize, href, ...others}) => {

  let Text = <H1>{children}</H1>;
  if(variant === 'h1') Text = <H1>{children}</H1>;
  else if (variant === 'h2') Text = <H2>{children}</H2>;
  else if (variant === 'h3') Text = <H3>{children}</H3>;
  else if (variant === 'subtitle1') Text = <Subtitle1>{children}</Subtitle1>;
  else if (variant === 'hyperlink') Text = <HyperLink fontSize={fontSize} href={href}>{children}</HyperLink>;

  return (Text);

}
