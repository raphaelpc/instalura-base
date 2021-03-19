import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import get from 'lodash/get';

const StyledLink = styled.a`
  color: ${({ theme, color }) => (color
    ? `${get(theme, `colors.${color}.color`)}`
    : 'inherit')};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

interface LinkProps {
  href: string;
  children: ReactNode;
  [propName: string]: any;
}

export default function Link({ href, children, ...rest }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledLink {...rest}>
        {children}
      </StyledLink>
    </NextLink>
  );
}
