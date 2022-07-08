import React, { useEffect, useState } from "react";
import { Drawer, Box, IconButton, Container, Grid, Paper } from "@mui/material";
import { SideBar, Header } from "../../components";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Axios from "../../api";
import "./style.css";

const drawerWidth = 210;
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const radios = [
    {"nome": "Uvb-76",
    "image": "https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg",
    "url": "#",
    "id": "77393"},
    {"nome": "Uvb-76",
    "image": "https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg",
    "url": "#",
    "id": "77393"},
    {"nome": "Uvb-76",
    "image": "https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg",
    "url": "#",
    "id": "77393"},
    {"nome": "Uvb-76",
    "image": "https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg",
    "url": "#",
    "id": "77393"},
    {"nome": "Uvb-76",
    "image": "https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg",
    "url": "#",
    "id": "77393"},
    {"nome": "Uvb-76",
    "image": "https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg",
    "url": "#",
    "id": "77393"},
    {"nome": "Uvb-76",
    "image": "https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg",
    "url": "#",
    "id": "77393"},
    {"nome": "Uvb-76",
    "image": "https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg",
    "url": "#",
    "id": "77393"},
    {"nome": "Uvb-76",
    "image": "https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg",
    "url": "#",
    "id": "77393"},
    {"nome": "Uvb-76",
    "image": "https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg",
    "url": "#",
    "id": "77393"},
    {"nome": "Uvb-76",
    "image": "https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg",
    "url": "#",
    "id": "77393"},
    {"nome": "Uvb-76",
    "image": "https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg",
    "url": "#",
    "id": "77393"}
]

const GetRadios = () => {
    return(
        <>
            <Grid container spacing={2} alignItems="center">
                {radios.map((text, index) => (
                    <Grid item sm={3} xs={6}>
                        <Link to={"/radio/" + text.id}>
                            <Paper sx={{backgroundColor: "#1E1E1E", "&:hover": {margin: "-5px"}}}>
                                <img src={text.image} alt="" />
                                <div>
                                    <h3>{text.nome}</h3>
                                </div>
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

function Home() {
    const [open, setOpen] = useState(false);
    
    /*
    const [radios, setRadios] = useState([]);
    useEffect(() => {
        Axios.get("/radio/all").then((content) => {
            setRadios(content.data);
        }).catch((err) => {
            //pass
        });
    },[])
    */

    const burger = (
        <IconButton aria-label="open navbar" edge="start" sx={{ mr: 2, display: { sm: "none", position: "absolute" } , width: "auto", right: 0}} onClick={() => setOpen(!open)}>
            <MenuIcon sx={{color: "orange"}} />
        </IconButton>
    );

    return(
        <>
            <Box sx={{ display: "flex" }}>
                <Header burger={burger} />
                <Box component="nav" sx={{ overflow: "auto", width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                    <Drawer sx={{display: {xs: "block", sm: "none"}}} variant="temporary" open={open} onClose={() => setOpen(false)}>
                        <SideBar />
                    </Drawer>
                    <Drawer sx={{display: {xs: "none", sm: "block"}, "&.MuiDrawer-paper": { boxSizing: 'border-box', width: drawerWidth }}} variant="permanent" open={false}>
                        <SideBar />
                    </Drawer>
                </Box>
                <Box width="100%" sx={{paddingLeft: {xs: "0rem", sm: "none"}, paddingRight: {xs: "0rem", sm: "0rem"}, paddingTop: "5rem", paddingBottom: "5rem"}}>
                    <Container justifyContent="center" alignItems="center">
                        <GetRadios />
                    </Container>
                </Box>
            </Box>
        </>
    );
}

export default Home;