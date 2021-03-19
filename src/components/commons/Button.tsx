import React, { ReactNode } from 'react';
import ButtonWrapper from '../../styles/components/commons/Button';
import Link from './Link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  [propName: string]: any;
}

export default function Button({ children, href, ...rest }: ButtonProps) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';
  return (
    <ButtonWrapper
      as={tag}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </ButtonWrapper>
  );
}
