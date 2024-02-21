import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [email, setEmail] = useState("")
    const [todos, setTodos] = useState([])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("login true", user)
            } else {
                navigate("/sign-in")
            }
        });
    }, [])

    const Users = [
        {
            name: "User 1",
            email: "user1@gmail.com",
            borderColor: "red",
            phoneNumber: ["003232323", "032323232323", "2232323"]
        },
        {
            name: "User 2",
            email: "user2@gmail.com",
            borderColor: "green",
            phoneNumber: ["003232323", "032323232323"]
        },
        {
            name: "User 3",
            email: "user3@gmail.com",
            borderColor: "blue",
            phoneNumber: ["003232323"]
        },
        {
            name: "User 4",
            email: "user4@gmail.com",
            borderColor: "yellow",
            phoneNumber: []
        },
        {
            name: "User 5",
            email: "user5@gmail.com",
            borderColor: "gray",
            phoneNumber: ["003232323", "032323232323", "2232323"]
        }
    ]
    // const addHandler = () => {
    //     let newArray = [];
    //     newArray.push(inputValue);
    //     // setTodos(newArray)
    //     setTodos([...todos, ...newArray]);
    //     setInputValue("")
    // }

    const addHandler = () => {
        let newArray = [];
        newArray.push({
            inputValue: inputValue,
            email: email
        });
        // setTodos(newArray)
        setTodos([...todos, ...newArray]);
        setInputValue("");
        setEmail("")
    }
    console.log("todos>>>>", todos)
    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <Card title="Title 01" details ="123132132 33232 32 23">
                <button>acb</button>
                <table>
                    <tr>
                        <td>fdsf</td>
                    </tr>
                </table>
                <ul>
                    <li>fsdf</li>
                    <li>fsdf</li>
                    <li>fsdf</li>
                    <li>fsdf</li>
                    <li>fsdf</li>
                </ul>
            </Card>
            <Card title="Title 02" details ="23132123123123">
                <h1>fsdf</h1>
                <h2>fsdf</h2>
                <h2>fsdf</h2>
                <h2>fsdf</h2>
                <h2>fsdf</h2>
                <h2>fsdf</h2>
                <h2>fsdf</h2>
                <h2>fsdf</h2>
            </Card>
            {/* {Users.map((val, index) => {
                return (
                    // <div style={{border:"1px solid",margin:"10px",borderColor:index%2 === 0 ? "red":"green"}}>
                    <div key={index} style={{ border: "1px solid", margin: "10px" ,borderColor:val.borderColor}}>
                        <h1>{val.name}</h1>
                        <p>{val.email}</p>
                        {val.phoneNumber.map((v,i)=>{
                            return(
                                <p key={i}>{v}</p>
                            )
                        })}
                    </div>
                )
            })} */}

            <input type="text" placeholder="Type something" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={addHandler}>Add</button>

            {/* {todos.length === 0 ?
                <p>Please add something</p> :
                todos.map((val, index) => {
                    return (
                        <p key={index}>{val}</p>
                    )
                })

            } */}

            {todos.length === 0 ?
                <p>Please add something</p> :
                todos.map((val, index) => {
                    return (
                        <div key={index}>
                            <p>{val.inputValue}</p>
                            <p>{val.email}</p>
                        </div>
                    )
                }).reverse()

            }
        </div>
    )
}
export default Home