import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import db from "../firebase";

function CreateArea(props) {
  const [note, setNote] = useState({ // complex state
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => { // prevNote refers to all the previously saved notes
      return {
        ...prevNote,
        [name]: value // appending the new note to all the previous notes
      };
    });
  }

  function submitNote(event) {

    db.collection("notesData").add({
      title: note.title,
      content: note.content,
    });

    props.onAdd(note); // sending the data to app component
    setNote({ // clearing the input area after pressing the add button
      title: "",
      content: ""
    });

    event.preventDefault(); // prevent refreshing (used only in forms)
  }

  function expand() { // used to expand the text area and title area when clicked on it
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input      // if expanded is true only then we will show the title area 
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        {/* changing the button to fab */}
        <Zoom in={isExpanded}>
          <Fab color="secondary" onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
