import React, { useState } from "react";
import combineClasses from "classnames";

import useStyles from "components/Input/Input.style";

const Input = ({ children, className, value, onChange, validation }) => {
  const classes = useStyles();
  const [localValue, setLocalValue] = useState(value);
  const [validity, setValidity] = useState(true);
  console.log(validity, "validity");
  return (
    <input
      value={localValue}
      onChange={(e) => {
        if (validation) {
          try {
            console.log(e.target.value, "e.target.value");
            validation.validateSync(e.target.value);
            setValidity(true);
            setLocalValue(e.target.value);
            onChange(e);
          } catch (err) {
            console.log(err);
            setValidity(false);
            setLocalValue(e.target.value);
          }
        }
      }}
      className={combineClasses(
        { [classes.input]: true },
        { invalid: !validity },
        {
          [className]: !!className,
        }
      )}
    >
      {children}
    </input>
  );
};

export default Input;
