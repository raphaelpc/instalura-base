import { css } from 'styled-components';
import breakpointsMedia from '../breakpointsMedia';
import { PropToStyle } from '../propToStyle';

export default function valueToStyle(value: PropToStyle) {
  if (typeof value === 'string' || typeof value === 'number') {
    const valueNumber = Number(value);
    return css`
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: ${(100 * valueNumber) / 12}%;
      max-width: ${(100 * valueNumber) / 12}%;
    `;
  }

  if (typeof value === 'object') {
    const breakpointsNames = Object.keys(value);
    const cssByBreakpoints = {};
    breakpointsNames.forEach(breakpoint => {
      cssByBreakpoints[breakpoint] = css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value[breakpoint]) / 12}%;
        max-width: ${(100 * value[breakpoint]) / 12}%;
      `;
    });
    return breakpointsMedia(cssByBreakpoints);
  }

  return {};
}
