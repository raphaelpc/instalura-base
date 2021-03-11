// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactNode } from 'react';
import { get } from 'lodash';
import styled from 'styled-components';
import propToStyle, { PropToStyle } from '../../styles/utils/propToStyle';
import TextStyleVariants from '../../styles/components/foundation/TextStyleVariants';

interface TextBaseProps {
  variant?: string;
  color?: string;
  textAlign?: PropToStyle;
}

const TextBase = styled.span<TextBaseProps>`
    ${props => TextStyleVariants[props.variant]}
    color: ${props => get(props.theme, `colors.${props.color}.color`)};
    ${propToStyle('textAlign')}
    ${propToStyle('marginBottom')}
    ${propToStyle('margin')}
`;

interface TextProps extends TextBaseProps {
    tag: string;
    children: ReactNode;
    [propName: string]: any;
}

// p -> parágrafo
// h1, h2, ..., h6 -> títulos
// span -> textos inline
export default function Text({
  children,
  tag,
  variant,
  ...rest
}: TextProps) {
  // TODO: as dá erro de compilação typescript
  return (
    <TextBase
      as={tag || 'span'}
      variant={variant || 'paragraph1'}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </TextBase>
  );
}
