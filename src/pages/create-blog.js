import React, { useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import moment from "moment";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebase from "../config/firebase";
const db = getFirestore(firebase);
const CreateBlog = () => {
    const storage = getStorage();

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [fileUrl, setFileUrl] = useState("");


    // upload file
    const uploadFile = (e) => {
        const file = e.target.files[0]
        const storageRef = ref(storage, `blog-images/${file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setFileUrl(downloadURL)
                });
            }
        );
    }
    // create blog
    const createBlogHandler = async () => {
        const blog = {
            title: title,
            details: details,
            fileUrl: fileUrl,
            createdDate: moment().format()
        }
        const docRef = await addDoc(collection(db, "blogs"),
            blog);
        console.log("blog", blog)
    }



    return (
        <div>
            <h1>Create Blog</h1>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            <input type="file" onChange={(e) => uploadFile(e)} />
            <button onClick={createBlogHandler}>Create Blog</button>
        </div>
    )
}
export default CreateBlog