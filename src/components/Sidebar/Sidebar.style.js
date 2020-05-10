import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  sidebar: {
    backgroundColor: theme.color.primary,
    borderRight: `10px solid ${theme.color.secondary}`,
    minHeight: "100px",
    width: "300px",
    flex: "1 0 auto",
    zIndex: "2",
    display: "flex",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.15);",
    padding: "30px",
    overflowY: "scroll",
    maxHeight: "100vh",
  },
  sidebarItem: {
    margin: "0 0 10px 0",
  },
  sidebarLink: {
    color: theme.color.primaryText,
    textDecoration: "none",
    "&:hover": {
      color: theme.color.secondary,
    },
  },
}));
