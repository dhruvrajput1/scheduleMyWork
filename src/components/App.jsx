import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import db from "../firebase";


function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    db.collection("notesData").onSnapshot((snapshot) => {

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      }))

      setNotes(data);
    });

  });


  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    db.collection("notesData").doc(id).delete();
    // setNotes(prevNotes => {
    //   return prevNotes.filter((noteItem, index) => {
    //     return index !== id;
    //   });
    // });
  }

  

  return (

    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        if(noteItem.data && noteItem.data.title && noteItem.data.content) {
          return (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.data.title}
            content={noteItem.data.content}
            onDelete={deleteNote}
          />
        );
        }
        else {
          return null;
        }
        
      })}
      <Footer />
    </div>
  );
}

export default App;
