import styled, { css } from 'styled-components';
import breakpointsMedia from '../../utils/breakpointsMedia';
import TextStyleVariants from '../foundation/TextStyleVariants';

const cssByBreakpointsMenuWrapper = {
  md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
  `,
  lg: css`
      max-width: 1160px;
  `,
  xl: css`
      max-width: 1222px;
  `,
};

const cssByBreakpointsMenuWrapperDivLeft = {
  md: css`
      width: 131px;
      height: 28px;
      order: initial;
      padding-right: 16px;
  `,
};

const cssByBreakpointsMenuWrapperDivCentral = {
  md: css`
      max-width: 332px;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
  `,
};

const cssByBreakpointsMenuWrapperDivCentralA = {
  xs: css`
      ${TextStyleVariants.smallestException}
  `,
  md: css`
      ${TextStyleVariants.paragraph1}
  `,
};

const cssByBreakpointsMenuWrapperDivRight = {
  md: css`
      order: initial;
  `,
};

const MenuWrapper = styled.nav`
    font-family: ${props => props.theme.fontFamily};

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 18px;
    padding-left: 28px;
    padding-right: 28px;

    ${breakpointsMedia(cssByBreakpointsMenuWrapper)}

    div {
        padding: 0;
        margin: 0;

        &.left {
            order: 1;

            ${breakpointsMedia(cssByBreakpointsMenuWrapperDivLeft)}
        }

        &.central {
            order: 3;
            width: 100%;
            list-style: none;

            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-top: 17px;
            border-top: 1px solid #88989E;
            border-bottom: 1px solid #88989E;
            padding: 12px;

            ${breakpointsMedia(cssByBreakpointsMenuWrapperDivCentral)}

            a {
                text-align: center;
                display: block;
                text-decoration: none;
                color: #88989E;
                transition: 200ms ease-in-out;

                ${breakpointsMedia(cssByBreakpointsMenuWrapperDivCentralA)}

                &:hover,
                &:focus {
                    font-weight: 500;
                    color: #070C0E;
                }
            }
        }

        &.right {
            order: 2;
            flex: 1;

            display: flex;
            justify-content: flex-end;
            padding: 0;
            margin: 0;

            ${breakpointsMedia(cssByBreakpointsMenuWrapperDivRight)}
        }
    }
`;

export default MenuWrapper;
