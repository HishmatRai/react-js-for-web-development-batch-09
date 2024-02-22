import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { collection, query, where, onSnapshot, getFirestore } from "firebase/firestore";
import firebase from "../config/firebase";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const db = getFirestore(firebase);
const About = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const q = query(collection(db, "blogs"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const newBlogs = [];
            querySnapshot.forEach((doc) => {
                newBlogs.push(doc.data());
            });
            console.log("blogs ", newBlogs);
            setBlogs([...newBlogs])
            setLoading(false)
        });
    }, [])
    return (
        <div >
            <Navbar />
            <h1>Blog Page</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>1</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>2</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>3</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>4</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>5</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>6</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>7</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>8</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>9</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>10</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>11</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>12</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>13</Item>
                    </Grid>
                    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
                        <Item>14</Item>
                    </Grid>
                </Grid>
            </Box>
            {loading ?
                <p>Loading ....</p> :
                blogs.length === 0 ? <p>Data not available</p> :
                    <p>Data available</p>
            }
        </div>
    )
}
export default About