import React, { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import EditNote from "./components/EditNote";

import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:9000/notes")
      .then((res) => {
        console.log(res);
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createNote = (noteData) => {
    axios
      .post("http://localhost:9000/create_note", noteData)
      .then((response) => {
        setNotes((prevNotes) => [...prevNotes, response.data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteNote = (id) => {
    axios
      .delete(`http://localhost:9000/delete_note/${id}`)
      .then(() => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleEdit = (id, note) => {
    setEditMode(true);
    setSelectedNote(note);
  };

  const handleUpdateNote = (updatedData) => {
    console.log("Updating note APP:", updatedData)
    axios
      .put(`http://localhost:9000/update_note/${selectedNote.id}`, updatedData)
      .then((response) => {
        console.log("Note updated:", response.data);
        setEditMode(false);
        setSelectedNote(null);
        axios
          .get("http://localhost:9000/notes")
          .then((res) => {
            setNotes(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          {editMode ? (
            <EditNote
              initialValues={selectedNote}
              editNote={handleUpdateNote}
            />
          ) : (
            <AddNote createNote={createNote} />
          )}

          <Notes notes={notes} deleteNote={deleteNote} handleEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;