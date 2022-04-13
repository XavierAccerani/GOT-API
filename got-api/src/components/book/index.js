import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import Character from "../character";
import ListItem from "../../helper/listItem";

function Book({ book, index, charactersList }) {
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(!open);
  };

  const authors = book.authors.join(", ");

  // format the date of release of the book 
  const released = new Date(book.released).toDateString();

  // keep only the characters that are present in the book passed as props 
  const bookCharacters = () => {
    return charactersList.filter((c) => book.characters.includes(c.url));
  };

  return (
    <List
      sx={{
        width: "100%",
        marginLeft: "30%",
        maxWidth: "40%",
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Book {index + 1}: {book.name}
        </ListSubheader>
      }
    >
      <ListItem primary={`Author: ${authors}`} />
      <ListItem primary={`ISBN: ${book.isbn}`} />
      <ListItem primary={`Country: ${book.country}`} />
      <ListItem primary={`Date: ${released}`} />
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Characters: " />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {charactersList &&
            bookCharacters().map((c, i) => {
              return <Character key={i} c={c} i={i} />;
            })}
        </List>
      </Collapse>
    </List>
  );
}

export default Book;
