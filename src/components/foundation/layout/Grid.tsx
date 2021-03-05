import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle, PropToStyle } from '../../../theme/utils/propToStyle';
import { valueToStyle } from '../../../theme/utils/grid/valueToStyle';
import { offsetToStyle } from '../../../theme/utils/grid/offsetToStyle';

interface ContainerProps {
    [propName: string]: any;
}

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

const Container = styled.div<ContainerProps>`
    width: 100%;
    max-width: initial;

    padding-left: 28px;
    padding-right: 28px;
    margin-left: auto;
    margin-right: auto;

    ${breakpointsMedia(cssByBreakpointsContainer)}

    ${propToStyle('marginTop')}
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -16px;
    margin-right: -16px;
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

    ${propToStyle('display')}
    ${propToStyle('alignItems')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flexDirection')}
`;

const Grid = {
  Container,
  Row,
  Col,
};

export default Grid;
