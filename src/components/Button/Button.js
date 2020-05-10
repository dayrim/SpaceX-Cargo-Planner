import React from "react";

import useStyles from "components/Button/Button.style";

const Button = ({ children, onClick }) => {
  const classes = useStyles();
  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
};

export default Button;
