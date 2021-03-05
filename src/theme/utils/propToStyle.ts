import { breakpointsMedia } from './breakpointsMedia';

export type PropToStyle = string | number | {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
}

interface Props {
  [propName: string]: PropToStyle
}

export function propToStyle(propName: string) {
  return (props: Props) => {
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
      const breakpointsNames = Object.keys(propValue);
      const cssByBreakpoints = {};
      breakpointsNames.forEach(breakpoint => {
        cssByBreakpoints[breakpoint] = {
          [propName]: propValue[breakpoint],
        };
      });
      return breakpointsMedia(cssByBreakpoints);
    }

    return {};
  };
}
