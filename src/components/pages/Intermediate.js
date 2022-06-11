import { List,ListItem, } from '@mui/material';
import { React} from "react"
const Intermidiate = ()=>{

    const courses =["English Writing","Computer Learning","Financial Literacy","Calculator","Basics of farming","Basic Maths"]
    const links = ["https://www.youtube.com/playlist?list=PLoB_X0P2TIPAVOfU5Xaweg2jIs_pSC-Jy","https://www.youtube.com/playlist?list=PL4Wh1F6PxzzSNY0WZ12oM2KbHVRJwtwW4","https://www.youtube.com/watch?v=u88In_gPPFg","https://www.youtube.com/watch?v=u1ZuGfksu50","https://www.youtube.com/playlist?list=PL_JBLkeIIhm7OQg-H8OCqbciYwBlCQuf7","https://www.youtube.com/playlist?list=PLbpXrZGbB0i58G-9BBGhoR_VIy1VkGUXj"];
    const fun = (course,ind)=>{
        console.log(course);
        if(links[ind] !== ""){
            window.location.href = links[ind]
        }
        else{
            console.log("No link provided")
        }
    }
    return  (<div>
        
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {courses.map((course,ind)=>{
                return (<ListItem key={ind} onClick={()=>{fun(course,ind)}} style={{cursor:"pointer",fontSize:"30px"}}>{course}</ListItem>);
            })}
        </List>
        
    </div>)
}
export default Intermidiate