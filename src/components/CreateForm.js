import notesStore from "../stores/notesStore";

export default function CreateForm() {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  return (
    <div>
      <h2 className="notesh1">Create note</h2>
      <form onSubmit={store.createNote}>
        <input
          className="input"
          onChange={store.updateCreateFormField}
          value={store.createForm.title}
          name="title"
          placeholder="enter title"
        />
        <textarea
          className="input"
          onChange={store.updateCreateFormField}
          value={store.createForm.body}
          name="body"
          placeholder="Add Note"
        />
        <button type="submit">Create note</button>
      </form>
    </div>
  );
}
