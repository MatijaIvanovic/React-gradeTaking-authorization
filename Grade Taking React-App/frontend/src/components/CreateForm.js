import gradesStore from "../stores/gradesStore"

export default function CreateForm(){

    const store = gradesStore();

    if (store.updateForm._id) return <></>;
    return (
        
        <div>
            <h2>Add grade</h2>
            <form onSubmit={store.addGrade}>
              <input 
                onChange={store.updateCreateFormField}
                value={store.createForm.title} 
                name="title"
                required = "true"
              />
              <input 
                onChange={store.updateCreateFormField}
                value={store.createForm.mark} 
                type="number" 
                min="1" max="10" 
                name="mark"
                required = "true"
              />
              <button type="submit">Add grade!</button>
            </form>
          </div>
          )
        
    
  
}
