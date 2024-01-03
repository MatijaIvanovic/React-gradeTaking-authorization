import { useEffect } from "react";
import gradesStore from "../stores/gradesStore";
import Grades from "../components/Grades";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";


export default function GradePage() {
  const store =gradesStore();
  useEffect(() =>{
    store.fetchGrades();
  },[]);

  return (
    <div><Grades/>
    <UpdateForm/>
    <CreateForm/>
    </div>
  )
}
