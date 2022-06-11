import { List,ListItem, } from '@mui/material';
import { React} from "react";
const Advanced = ()=>{
//     1.	Basics of Marketing
// 2.	Loan Taking
// 3.	Sustainable Production
// 4.	Agriculture
// 5.	Waste Management
// 6.	Market Farm Products
    const courses =["Basics of Marketing","Loan Taking","Sustianable Production","Agriculture","Waste Management","Market Farm Products"]
    const links =["https://www.youtube.com/watch?v=5mPVpPYKnu0","https://www.youtube.com/playlist?list=PLSiDKpku4U_VnqmaQ0ISxnZVVSfQGuOUB","","","https://www.youtube.com/watch?v=T_pIJiZ8JYI",""];
    const fun = (course,ind)=>{
        console.log(course);
        if(links[ind] !== ""){
            window.location.href = links[ind];
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
export default Advanced;