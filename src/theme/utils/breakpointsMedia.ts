import { css, FlattenInterpolation } from 'styled-components';
import { breakpoints } from '../breakpoints';

interface CssByBreakpoints {
  xs?: FlattenInterpolation<any>;
  sm?: FlattenInterpolation<any>;
  md?: FlattenInterpolation<any>;
  lg?: FlattenInterpolation<any>;
  xl?: FlattenInterpolation<any>;
}

// eslint-disable-next-line import/prefer-default-export
export function breakpointsMedia(cssByBreakpoints: CssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  const breakpointsAvailable = Object.keys(breakpoints);

  // considera somente os breakpoints válidos
  const breakpointsFiltered = breakpointsNames.filter(
    // eslint-disable-next-line comma-dangle
    breakpointName => breakpointsAvailable.includes(breakpointName)
  );

  return breakpointsFiltered.map(breakpointName => css`
    @media screen and (min-width: ${breakpoints[breakpointName]}px) {
      ${cssByBreakpoints[breakpointName]}
    }
  `);
}
