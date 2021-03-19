// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactNode } from 'react';
import { get } from 'lodash';
import styled from 'styled-components';
import propToStyle, { PropToStyle } from '../../styles/utils/propToStyle';
import TextStyleVariants from '../../styles/components/foundation/TextStyleVariants';
import Link from '../commons/Link';

interface TextBaseProps {
  variant?: string;
  color?: string;
  textAlign?: PropToStyle;
}

const TextBase = styled.span<TextBaseProps>`
    ${({ variant }) => TextStyleVariants[variant]}
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')}
    ${propToStyle('marginBottom')}
    ${propToStyle('margin')}
`;

interface TextProps extends TextBaseProps {
  children: ReactNode;
  tag?: string;
  href?: string;
  [propName: string]: any;
}

// p -> parágrafo
// h1, h2, ..., h6 -> títulos
// span -> textos inline
export default function Text({
  children,
  tag,
  variant,
  href,
  ...rest
}: TextProps) {
  // TODO: as dá erro de compilação typescript
  if (href) {
    // se recebe href, o TextBase renderizará como Link
    return (
      <TextBase
        as={Link}
        href={href}
        variant={variant || 'paragraph1'}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </TextBase>
    );
  }

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
