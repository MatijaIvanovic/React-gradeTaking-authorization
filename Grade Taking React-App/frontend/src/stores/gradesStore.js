import create from "zustand"
import axios from "axios"
const gradesStore = create((set) =>({
    grades: null,

    createForm: {
        title: '',
        mark: '',
    },
    updateForm: {
        _id: null,
        title: "",
        mark: "",
    },
    fetchGrades: async() =>{
    //fetch the notes
    const res = await axios.get('/grade');
    

    //set to state
    set({ grades: res.data.grades,});
    },
    updateCreateFormField: (e)=>{
     const {name, value} = e.target;

     set((state) =>{
        return{
            createForm:{
                ...state.createForm,
                [name]:value,
            },
        };
     });
    },    
    addGrade: async (e) => {
        e.preventDefault();
    
        const {createForm, grades} = gradesStore.getState();
        //create note
        const res = await axios.post("/grade", createForm);

        set({
            grades: [...grades, res.data.grade],
            createForm: {
                title: '', 
                mark: '',
            },
        });
    
    },
    deleteGrade: async (_id) => {

        
        const res = await axios.delete(`/grade/${_id}`);
        const { grades } = gradesStore.getState();

        const newGrades = grades.filter((grade) => {
          return grade._id !== _id;
        });
        set({grades:newGrades});
        console.log(`deleted ${_id}`)
       
    },
    handleUpdateFieldChange: (e) => {
        const { value, name } = e.target;
    
        set((state) => {
            return{
                updateForm: {
                    ...state.updateForm,
                    [name]: value,
                },
            };
        });
        
    },
    toggleUpdate: ({_id, title, mark }) =>{
        set({
            updateForm:{
                title,
                mark,
                _id,
            },
        });
    
        
    },
    updateGrade: async (e) => {
        e.preventDefault();
        const { 
            updateForm:{title , mark, _id},
            grades,
        } = gradesStore.getState();
        
          //Send the update request
          const res =  await axios.put(`/grade/${_id}`, {title, mark});
          //Update
          const newGrades = [...grades];
          const gradeIndex = grades.findIndex((grade) =>{
            return grade._id=== _id;
          });
          newGrades[gradeIndex] =res.data.grade;

          set({
            grades: newGrades,
            updateForm: {
                _id: null,
                title: "",
                body: "",
            },
          }); 
      },
    
}),);

export default gradesStore;