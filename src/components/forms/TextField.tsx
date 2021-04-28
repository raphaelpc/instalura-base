import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import Text from '../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

interface TextFieldProps {
  placeholder: string;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type?: string;
  value?: any;
}

export default function TextField({
  placeholder,
  name,
  onChange,
  type,
  value,
}: TextFieldProps) {
  return (
    <InputWrapper>
      <Input
        type={type ?? 'text'}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  );
}
