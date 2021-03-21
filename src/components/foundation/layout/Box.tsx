import styled from 'styled-components';
import propToStyle from '../../../styles/utils/propToStyle';

interface BoxProps {
  [propName: string]: any;
}

const Box = styled.div<BoxProps>`
  ${propToStyle('alignItems')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('boxShadow')}
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('flexDirection')}
  ${propToStyle('flexWrap')}
  ${propToStyle('justifyContent')}
  ${propToStyle('listStyle')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
  ${propToStyle('marginTop')}
  ${propToStyle('padding')}
  ${propToStyle('width')}
`;

export default Box;
