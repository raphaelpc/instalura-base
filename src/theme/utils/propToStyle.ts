import { breakpointsMedia } from "./breakpointsMedia";

interface Props {
    [propName: string]: string | {
        xs?: string | number;
        sm?: string | number;
        md?: string | number;
        lg?: string | number;
        xl?: string | number;
    }
}

export function propToStyle(propName: string) {

    return function (props: Props) {

        const propValue = props[propName];

        if (typeof propValue === 'string') {
            return {
                [propName]: propValue,
            }
        }

        if (typeof propValue === 'object') {
            const breakpointsNames = Object.keys(propValue);
            const cssByBreakpoints = {}
            breakpointsNames.forEach(breakpoint =>
                cssByBreakpoints[breakpoint] = {
                    [propName]: propValue[breakpoint],
                }
            );
            return breakpointsMedia(cssByBreakpoints);
        }
    }
}