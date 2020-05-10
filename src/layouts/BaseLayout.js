import React from "react";

import useStyles from "layouts/BaseLayout.style";
import { Sidebar, Page } from "components";

export default ({ children, routes }) => {
  const classes = useStyles();
  return (
    <div className={classes.appWraper}>
      <Sidebar routes={routes}></Sidebar>
      <Page>{children}</Page>
    </div>
  );
};
