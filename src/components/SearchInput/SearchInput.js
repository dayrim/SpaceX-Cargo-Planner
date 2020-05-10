import React from "react";
import combineClasses from "classnames";

import { Input } from "components";

import useStyles from "./SearchInput.style";

const SearchInput = ({ className }) => {
  const classes = useStyles();

  return (
    <Input
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
