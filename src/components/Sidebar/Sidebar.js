import React from "react";
import { Link } from "react-router-dom";

import useStyles from "components/Sidebar/Sidebar.style";

const Sidebar = ({ routes }) => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <ul>
        {routes.map(({ key, name }) => {
          return (
            <li key={key} className={classes.sidebarItem}>
              <Link className={classes.sidebarLink} to={`/${key}`}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
