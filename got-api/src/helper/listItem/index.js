import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";

function ListItem({ primary }) {
  return (
    <div>
      <ListItemButton>
        <ListItemText primary={primary} />
      </ListItemButton>
    </div>
  );
}

export default ListItem;
