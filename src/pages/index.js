import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { agencyTheme } from "common/theme/agency";
import AppCreative from "./appcreative2";

const Main = () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        <AppCreative />
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;
