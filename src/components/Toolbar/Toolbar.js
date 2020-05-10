import React from "react";

import useStyles from "components/Toolbar/Toolbar.style";

const Toolbar = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.toolbar}>{children}</div>;
};

export default Toolbar;
