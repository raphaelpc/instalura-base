// @ts-nocheck
import { get } from 'lodash';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { PropToStyle, propToStyle } from '../../theme/utils/propToStyle';
import { TextStyleVariants } from '../../theme/utils/text/TextStyleVariants';

interface TextBaseProps {
    variant?: string;
    color?: string;
    textAlign?: PropToStyle;
}

const TextBase = styled.span<TextBaseProps>`
    color: ${props => get(props.theme, `colors.${props.color}.color`)};
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

