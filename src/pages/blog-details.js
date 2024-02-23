import React ,{useEffect,useState}from "react";
import {useLocation,useNavigate} from 'react-router-dom';
import { doc, onSnapshot,getFirestore } from "firebase/firestore";
import firebase from "../config/firebase";
const db = getFirestore(firebase);
const BlogDetails = ()=>{
    const location = useLocation();
    const navigate = useNavigate()
    const [blog,setBlog] = useState()
    console.log("location>>>>>>>>",location.pathname.slice(14))
    let path = location.pathname.slice(14)
    useEffect(()=>{
        const unsub = onSnapshot(doc(db, "blogs", path), (doc) => {
            // console.log("Current data: ", doc.data());
            if(doc.data() === undefined){
                navigate("/about-us")
            }else{
                setBlog(doc.data())

            }
        });
        
    },[])
    return(
        <div>
            <h1>Blog Details</h1>
            <h2>{blog?.title}</h2>
            <p>{blog?.details}</p>
            <img src={blog?.fileUrl} width={"100%"}/>
        </div>
    )
}
export default BlogDetails