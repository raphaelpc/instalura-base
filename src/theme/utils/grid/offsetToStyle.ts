import { css } from 'styled-components';
import { breakpointsMedia } from '../breakpointsMedia';
import { PropToStyle } from '../propToStyle';

export function offsetToStyle(offset: PropToStyle) {

    if (typeof offset === 'string' || typeof offset === 'number') {
        const offsetNumber = Number(offset);
        return css`
            margin-left: ${(100 * offsetNumber) / 12}%;
        `
    }

    if (typeof offset === 'object') {
        const breakpointsNames = Object.keys(offset);
        const cssByBreakpoints = {}
        breakpointsNames.forEach(breakpoint =>
            cssByBreakpoints[breakpoint] = css`
                margin-left: ${(100 * offset[breakpoint]) / 12}%;
            `
        );
        return breakpointsMedia(cssByBreakpoints)
    }
}