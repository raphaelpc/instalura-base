import styled from 'styled-components';
import propToStyle from '../../../styles/utils/propToStyle';

interface BoxProps {
    [propName: string]: any;
}

const Box = styled.div<BoxProps>`
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flex')}
    ${propToStyle('flexWrap')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
`;

export default Box;