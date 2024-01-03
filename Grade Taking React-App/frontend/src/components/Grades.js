import gradesStore from "../stores/gradesStore";
import Grade from "../components/Grade";


export default function Grades(){
    const store = gradesStore();
    return(
            <div>
                <h2>Grades:</h2>
                {store.grades &&
                    store.grades.map((grade) => {
                        return <Grade grade={grade} key={grade._id}/>;
                    })}
            </div>
    );
    
}