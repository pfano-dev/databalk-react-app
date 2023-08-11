import notesStore from "../stores/notesStore";

export default function Note({ note }) {
  const store = notesStore((store) => {
    return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
  });

  return (
    <div className="notes" key={note._id}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <div className="btn">
        <button className="dlt" onClick={() => store.deleteNote(note._id)}>
          Delete note
        </button>
        <button className="upt" onClick={() => store.toggleUpdate(note)}>
          Update note
        </button>
      </div>
    </div>
  );
}
