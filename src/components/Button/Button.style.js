import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  button: {
    minWidth: "80px",
    minHeight: "35px",
    border: "0px",
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: theme.font.primary,
    backgroundColor: theme.color.primary,
    color: theme.color.primaryText,
    letterSpacing: "0.7px",
    cursor: "pointer",
    boxShadow: "0px 0px 7.5px 2.5px rgba(0,0,0,0.25);",
    "&:hover": {
      backgroundColor: theme.color.primaryText,
      color: theme.color.primary,
    },
  },
}));
