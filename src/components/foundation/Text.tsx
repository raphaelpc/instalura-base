// @ts-nocheck
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { propToStyle } from '../../theme/utils/propToStyle';

export const TextStyleVariants = {
    paragraph1: css`
        font-size: ${props => props.theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${props => props.theme.typographyVariants.paragraph1.fontWeight};
        line-height: ${props => props.theme.typographyVariants.paragraph1.lineHeight};
    `,
    smallestException: css`
        font-size: ${props => props.theme.typographyVariants.smallestException.fontSize};
        font-weight: ${props => props.theme.typographyVariants.smallestException.fontWeight};
        line-height: ${props => props.theme.typographyVariants.smallestException.lineHeight};
    `,
}

interface TextBaseProps {
    variant?: string;
}

const TextBase = styled.span<TextBaseProps>`
    ${props => TextStyleVariants[props.variant]}
    ${propToStyle('textAlign')}
`;

interface TextProps extends TextBaseProps {
    tag: string;
    children: ReactNode;
    [propName: string]: any;
}

// p -> parágrafo
// h1, h2, ..., h6 -> títulos
// span -> textos inline
export default function Text({ children, tag, variant, ...rest }: TextProps) {

    //TODO: as dá erro de compilação typescript
    return (
        <TextBase 
            as={tag} 
            variant={variant}
            {...rest}
        >
            {children}
        </TextBase>
    );
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
}

