import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  appWraper: {
    position: "relative",
    minHeight: "100vh",
    color: theme.color.primary,
    display: "flex",
  },
}));
