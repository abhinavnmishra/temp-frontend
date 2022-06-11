import { List,ListItem } from '@mui/material';
import React from "react";
const Beginer =()=>{
    const courses = ["Mobile Learning","Sewing","Pot Drawing","Jewellery making","Basket weaving","English Speaking","Soft toys making"];
    const links = ["","https://www.youtube.com/playlist?list=PL7VQ5BDhWAeZXM8T30BosYMN1W-MdHldt","https://www.youtube.com/playlist?list=PLNCvg1YmDKZhP9I64kHFIhE5_Img_jjSe","https://www.youtube.com/playlist?list=PLAxGPazvUGqEIWr_L_4nv-cKMb5QMoSua","","https://www.youtube.com/playlist?list=PL3zJh86GqkXP9CJJ4JF6rxxaAI4rk7pA5","https://www.youtube.com/playlist?list=PLfInIIoPkZLMX8zRakSMsewwD7vbxtRnX"]
    const fun = (course,ind)=>{
        console.log(course);
        if(links[ind] !== ""){
            window.location.href= links[ind];
        }
        else{
            console.log("No link provided")
        }
    }
    return (<div>
        
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'  }}>
            {courses.map((course,ind)=>{
                return (<ListItem key={ind} onClick={()=>{fun(course,ind)}} style={{cursor:"pointer",fontSize:"30px"}}>{course}</ListItem>);
            })}
        </List>
        
    </div>)
}
export default Beginer;