import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../styles/utils/breakpointsMedia';
import propToStyle, { PropToStyle } from '../../../styles/utils/propToStyle';
import valueToStyle from '../../../styles/utils/grid/valueToStyle';
import offsetToStyle from '../../../styles/utils/grid/offsetToStyle';

const cssByBreakpointsContainer = {
  sm: css`
      max-width: 576px;
  `,
  md: css`
      max-width: 768px;
      padding-left: 16px;
      padding-right: 16px;
  `,
  lg: css`
      max-width: 1160px;
  `,
  xl: css`
      max-width: 1222px;
  `,
};

interface ContainerProps {
    [propName: string]: any;
}

const Container = styled.div<ContainerProps>`
    width: 100%;
    max-width: initial;

    padding-left: 28px;
    padding-right: 28px;
    margin-left: auto;
    margin-right: auto;

    ${breakpointsMedia(cssByBreakpointsContainer)}

    ${propToStyle('alignItems')}
    ${propToStyle('display')}
    ${propToStyle('flex')}
    ${propToStyle('marginTop')}
`;

interface RowProps {
    [propName: string]: any;
}

const Row = styled.div<RowProps>`
    display: flex;
    flex-wrap: wrap;
    margin-left: -16px;
    margin-right: -16px;

    ${propToStyle('alignItems')}
    ${propToStyle('flex')}
    ${propToStyle('flexDirection')}
    ${propToStyle('marginBottom')}
    ${propToStyle('marginLeft')}
    ${propToStyle('marginRight')}
    ${propToStyle('marginTop')}
    ${propToStyle('justifyContent')}
`;

interface ColProps {
    value?: PropToStyle;
    offset?: PropToStyle;
    [propName: string]: any;
}

const Col = styled.div<ColProps>`
    padding-left: 16px;
    padding-right: 16px;
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;

    ${props => valueToStyle(props.value)}
    ${props => offsetToStyle(props.offset)}

    ${propToStyle('alignItems')}
    ${propToStyle('display')}
    ${propToStyle('flex')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('order')}
    ${propToStyle('paddingRight')}
`;

const Grid = {
  Container,
  Row,
  Col,
};

export default Grid;
