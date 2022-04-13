import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";

function Character({ c, i }) {
  const aliases = c.aliases.join(", " )
  return (
    <div>
      <ListItemButton sx={{ pl: 6 }}>
        <ListItemText
          primary={`Name: ${c.name}`}
          secondary={`Aliases: ${aliases}`}
        />
      </ListItemButton>{" "}
    </div>
  );
}

export default Character;
