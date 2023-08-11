import React, { useEffect } from "react";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";
import notesStore from "../stores/notesStore";

function NotesPage() {
  const store = notesStore();

  // Use effect
  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div>
      <UpdateForm />
      <CreateForm />
      <Notes />
    </div>
  );
}

export default NotesPage;
