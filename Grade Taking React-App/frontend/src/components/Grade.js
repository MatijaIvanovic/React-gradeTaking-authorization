import gradesStore from "../stores/gradesStore"

export default function Grade({ grade }){
    
    const store = gradesStore(store => {
        return {deleteGrade: store.deleteGrade, toggleUpdate: store.toggleUpdate};
    })
    return(
        <table>
        <div key={grade._id}>
        <tr><th>{grade.title}</th> 
        <th>{grade.mark}</th></tr>
        <tr>
        <td><button onClick={() => store.deleteGrade(grade._id)}>Delete grade</button></td>
        <td><button onClick={() => store.toggleUpdate(grade)}>Update grade</button></td>
        </tr>
        </div>
        </table>
    )
}