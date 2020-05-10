import React from "react";
import combineClasses from "classnames";

import { Input } from "components";

import useStyles from "./SearchInput.style";

const SearchInput = ({ className, onChange, value, validation }) => {
  const classes = useStyles();

  return (
    <Input
      onChange={onChange}
      value={value}
      validation={validation}
      className={combineClasses(
        { [classes.searchInput]: true },
        {
          [className]: !!className,
        }
      )}
    ></Input>
  );
};
export default SearchInput;
