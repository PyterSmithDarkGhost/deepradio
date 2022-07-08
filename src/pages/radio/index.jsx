import React, { useEffect, useState, useRef } from "react";
import { Drawer, Box, IconButton, Container, Grid, Paper } from "@mui/material";
import { SideBar, Header } from "../../components";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RadioIcon from '@mui/icons-material/Radio';
import Wavesurfer from "wavesurfer.js";
import Axios from "../../api";
//import "./style.css";

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

function Radio() {
    const waveform = useRef(null);

    useEffect(() => {
        if (!waveform.current) {
        waveform.current = Wavesurfer.create({
            barWidth: 3,
            barRadius: 3,
            barGap: 2,
            barMinHeight: 1,
            cursorWidth: 1,
            container: "#waveform",
            backend: "WebAudio",
            height: 40,
            progressColor: "orange",
            responsive: true,
            waveColor: "gray",
            cursorColor: "transparent"
        });
        waveform.current.load("music.mp3");
        }
    }, []);

    const playAudio = () => {
        setPlay(!play);
        if (waveform.current.isPlaying()) {
        waveform.current.pause();
        } else {
        waveform.current.play();
        }
    };
    const [open, setOpen] = useState(false);
    const [play, setPlay] = useState(false)
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

                        <Paper sx={{backgroundColor: "#1E1E1E"}}>
                        <div id="wave" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "right", height: "200px", width: "100%", gap: "2rem", background: "transparent"}}>
                            <h1 style={{position: "absolute", left: "15rem", color: "red", 
                            textShadow: "5px 0 3px black"}}><RadioIcon/> Uvb-76</h1>
                            <img src="https://i.kym-cdn.com/entries/icons/original/000/015/729/6101a719cd8cebd611b4c42e5ee9e568.jpg" alt="" style={{height: "100%", width: "auto"}} />
                            <div id="waveform" style={{width: "100%", height: "40px", marginLeft: "10px"}}/>
                                <div id="player" style={{textAlign: "right"}}>
                                {play ? 
                                <PauseCircleIcon onClick={playAudio} sx={{cursor: "pointer", color: "orange", fontSize: "60px"}}/> : 
                                <PlayCircleIcon onClick={playAudio} sx={{cursor: "pointer", color: "orange", fontSize: "60px"}}/>
                                }
                            </div>
                        </div>
                        </Paper>
                        <h2>Mais radios</h2>
                        <GetRadios />
                    </Container>
                </Box>
            </Box>
        </>
    );
}

export default Radio;