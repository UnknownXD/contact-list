export interface ITypography  {
    variant: TTypographyVariantType,
    fontSize?: string,
    href?: string
  }
  
export type TTypographyVariantType = 'h1' | 'h2' | 'h3' | 'subtitle1' | 'hyperlink';