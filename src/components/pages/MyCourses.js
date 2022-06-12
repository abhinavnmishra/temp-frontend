import { React,useState} from "react"
import { useHistory } from "react-router-dom";
import "./MyCourses.css"
const MyCourses =()=>{
    const [name,setName] = useState("");
    const [course,setCourse] =useState("");
    const [feedback,setFeedback] = useState("");
     const history = useHistory();
     console.log("My courses component");
    const fun1 = ()=>{
        console.log("Beginer services clicked");
        history.push("/services/beginer");
    }
    const fun2 = ()=>{
        console.log("Intermediate services clicked");
        history.push("/services/intermediate");
    }
    const fun3 = ()=>{
        console.log("Advanced services clicked");
        history.push("/services/advanced");
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        const feed = {
            name : name,
            course : course,
            feedback : feedback
        }
        console.log(feed);
    }

    return ( <div>
        <div class="course-type">
        <button onClick={fun1} className="course-type-btn-1">Beginner</button>
        <button onClick={fun2} className="course-type-btn-2">Intermediate</button>
        <button onClick={fun3} className="course-type-btn-3">Advanced</button>
        </div>
        <div>
        <form  className="form-1">
                <h2 className="form-heading">Feed Back</h2>
                <div className="form-item">
                <label>Name</label>
                <br></br>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e)=>{setName(e.target.value)}}
                />
                </div>
                <div className="form-item">
                <label>Course adpoted</label>
                <br></br>
                <input
                    type="text"
                    placeholder="course adpoted"
                    onChange={(e)=>{setCourse(e.target.value)}}
                />
                </div>
                <div className="form-item">
                <label>Feedback</label>
                <br></br>
                <input
                    type="text"
                    placeholder="Feedback"
                    onChange={(e)=>{setFeedback(e.target.value)}}
                />
                </div>

                
                <button onClick={onSubmit}>submit</button>
            </form>
            </div>
    </div>)

}
export default MyCourses;