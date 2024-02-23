import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { collection, query, where, onSnapshot, getFirestore } from "firebase/firestore";
import firebase from "../config/firebase";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from "moment";
import { useNavigate } from 'react-router-dom'
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


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
    const [blogs, setBlogs] = useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const navigate = useNavigate()
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
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
    console.log(blogs)
    return (
        <div >
            <Navbar />
            <h1>Blog Page</h1>
            {loading ?
                <p>Loading ....</p> :
                blogs.length === 0 ? <p>Data not available</p> :
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {blogs.map((v, i) => {
                                return (
                                    <Grid item xl={2} lg={2} md={3} sm={4} xs={6}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                        R
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="settings">
                                                        <MoreVertIcon />
                                                    </IconButton>
                                                }
                                                title="ABC"
                                                subheader={moment(v.createdDate).format('MMM DD, YYYY')}
                                            />
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={v.fileUrl}
                                                alt="Paella dish"
                                            />
                                            <CardContent>
                                                <h5>{`${v.title.slice(0, 30)} ...`}</h5>
                                                <Typography variant="body2" color="text.secondary">
                                                    {`${v.details.slice(0, 90)} ...`}
                                                    <button onClick={() => navigate(`/blog-details/${v.id}`)}>View more</button>
                                                </Typography>
                                            </CardContent>

                                        </Card>
                                    </Grid>
                                )
                            })}


                        </Grid>
                    </Box>
            }


        </div>
    )
}
export default About