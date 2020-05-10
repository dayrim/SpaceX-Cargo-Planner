import { createUseStyles } from "react-jss";

export default createUseStyles({
  shipmentView: {
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "60px 0 0 0",
  },
  toolbarActions: {
    "&>*": {
      margin: "0 10px 0 0",
      "&:last-child": {
        margin: "0",
      },
    },
  },
  toolbarSearch: {
    flex: "1 1 30%",
    margin: "0 30px",
  },
  toolbarHeader: {},

  cargoBayCount: {
    fontWeight: "700",
    fontSize: "16px",
  },
  label: {
    margin: "0 0 10px 0",
  },
});
