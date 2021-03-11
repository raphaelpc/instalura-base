import styled from 'styled-components';
import propToStyle from '../../../styles/utils/propToStyle';

interface BoxProps {
    [propName: string]: any;
}

const Box = styled.div<BoxProps>`
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('boxShadow')}
    ${propToStyle('display')}
    ${propToStyle('marginTop')}
    ${propToStyle('flex')}
    ${propToStyle('flexDirection')}
    ${propToStyle('flexWrap')}
    ${propToStyle('justifyContent')}
    ${propToStyle('padding')}
`;

export default Box;
