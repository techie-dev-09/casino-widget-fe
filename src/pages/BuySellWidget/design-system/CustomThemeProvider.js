import { createParamsData } from '../../../services/params';
import { darkThemeObj, lightThemeObj } from './index';
import { createContext, useContext, useState } from 'react';

const CustomThemeCtx = createContext(lightThemeObj);
const CustomDarkThemeCtx = createContext(darkThemeObj);

export function CustomThemeProvider(props) {
  const { theme, children } = props;
  let themeObj;

  if (typeof theme === 'string') {
    themeObj = theme === 'light' ? lightThemeObj : darkThemeObj;
  } else {
    themeObj = theme;
  }
  return <CustomThemeCtx.Provider value={themeObj}>{children}</CustomThemeCtx.Provider>;
}

export function useCustomTheme() {
  let params = window.location.search;
  let paramsValue = createParamsData(params);
  const [widgetTheme] = useState(
    paramsValue['widgetTheme'] === 'dark'
      ? 'dark'
      : paramsValue['widgetTheme'] === 'light'
      ? 'light'
      : paramsValue['widgetTheme'] === 'bluey'
      ? 'bluey'
      : 'light'
  );
  return useContext(widgetTheme === 'light' ? CustomThemeCtx : CustomDarkThemeCtx);
}

export function formatOrdinalNumber(number) {
  let suffix = 'th';
  if (number % 100 !== 11 && number % 10 === 1) {
    suffix = 'st';
  } else if (number % 100 !== 12 && number % 10 === 2) {
    suffix = 'nd';
  } else if (number % 100 !== 13 && number % 10 === 3) {
    suffix = 'rd';
  }

  return `${suffix}`;
}
