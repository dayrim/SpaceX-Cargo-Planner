import React, { useState, useEffect } from "react";
import combineClasses from "classnames";

import useStyles from "components/Input/Input.style";

const Input = ({ children, className, value, onChange, validation }) => {
  const classes = useStyles();
  const [localValue, setLocalValue] = useState(value || "");
  const [validity, setValidity] = useState(true);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  return (
    <input
      value={localValue}
      onChange={(e) => {
        if (validation) {
          try {
            validation.validateSync(e.target.value);
            setValidity(true);
            setLocalValue(e.target.value);
            onChange(e);
          } catch (err) {
            setValidity(false);
            setLocalValue(e.target.value);
          }
        } else {
          setLocalValue(e.target.value);
          onChange(e);
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
