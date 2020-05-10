import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  toolbar: {
    minHeight: "60px;",
    backgroundColor: theme.color.secondary,
    color: theme.color.secondaryText,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    padding: "0 20px",
    boxShadow: "0px -40px 40px 40px rgba(0,0,0,0.20);",
  },
}));
