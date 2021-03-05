import { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const TextStyleVariants = {
  title: css`
    font-size: ${props => props.theme.typographyVariants.title.fontSize};
    font-weight: ${props => props.theme.typographyVariants.title.fontWeight};
    line-height: ${props => props.theme.typographyVariants.title.lineHeight};
  `,
  titleXS: css`
    font-size: ${props => props.theme.typographyVariants.titleXS.fontSize};
    font-weight: ${props => props.theme.typographyVariants.titleXS.fontWeight};
    line-height: ${props => props.theme.typographyVariants.titleXS.lineHeight};
  `,
  subTitle: css`
    font-size: ${props => props.theme.typographyVariants.subTitle.fontSize};
    font-weight: ${props => props.theme.typographyVariants.subTitle.fontWeight};
    line-height: ${props => props.theme.typographyVariants.subTitle.lineHeight};
  `,
  paragraph1: css`
    font-size: ${props => props.theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${props => props.theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${props => props.theme.typographyVariants.paragraph1.lineHeight};
  `,
  paragraph2: css`
    font-size: ${props => props.theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${props => props.theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${props => props.theme.typographyVariants.paragraph2.lineHeight};
  `,
  smallestException: css`
    font-size: ${props => props.theme.typographyVariants.smallestException.fontSize};
    font-weight: ${props => props.theme.typographyVariants.smallestException.fontWeight};
    line-height: ${props => props.theme.typographyVariants.smallestException.lineHeight};
  `,
};
