import { createUseStyles } from "react-jss";

export default createUseStyles({
  input: {
    minHeight: "35px",
    padding: "5px 20px",
    "&.invalid": {
      borderColor: "red",
    },
  },
});
