import gradesStore from "../stores/gradesStore";
export default function UpdateForm(){
    const store = gradesStore();
    if (!store.updateForm._id) return <></>;
    return (
        <div>
            <h2>Update Grade</h2>
            <form onSubmit={store.updateGrade}>
              <input 
                onChange={store.handleUpdateFieldChange}
                value = {store.updateForm.title}
                name="title"
                required = "true"
              />
              <input
                onChange={store.handleUpdateFieldChange}
                value = {store.updateForm.mark}
                type="number" 
                min="1" max="10" 
                name="mark"
                required = "true"
              />
              <button type="submit">Update Grade</button>
            </form>
          </div>
    );
}