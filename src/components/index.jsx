import { Toolbar, Divider, List, ListItemButton, ListItem, ListItemText, ListItemIcon, AppBar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import PodcastsIcon from '@mui/icons-material/Podcasts';
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useState, useEffect } from "react";

export const Header = (props) => {
    const nomeUsuario = "nome do usuario";
    const [open, setOpen] = useState(false);
    useEffect(() => {
        localStorage.setItem("open", [open]);
    }, [open]);
    
    return(
        <AppBar position="fixed" sx={{ background: "black", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Box sx={{margin: "inherit"}}>
                    <Link to="/">
                        <><PodcastsIcon />DeEP Rádio</>
                    </Link>
                </Box>
                <Box sx={{ color: "orange", display: {xs: "flex", sm: "flex"}, right: {xs: 60, sm: 100}, position: "absolute" }}>
                    <a href="https://www.facebook.com/profile.php?id=100078405736484" target="_blank"><FacebookIcon /></a>
                    <a href="https://github.com/PyterSmithDarkGhost" target="_blank"><GitHubIcon /></a>
                </Box>
                {props.burger ? props.burger :
                    null
                }
            </Toolbar>
        </AppBar>
    );
}

export const SideBar = (props) => {
    //text.toUpperCase() === window.location.pathname.replace("/", "").toUpperCase()
    var rota = window.location.pathname.replace("/", "").toUpperCase()
    if (props.pList) {
        var pList = props.pList;
    } else {
        var pList = ["Home", "Noticias", "Vendas", "Configurações"];
    }
    return(
        <Box sx={{ backgroundColor: "#1E1E1E", color: "white", height: "100vh", width: {xs: "100vw", sm: "auto"}}}>
            <Toolbar>
            </Toolbar>
            <Divider />
            <List>
                {pList.map((text, index) => (
                    <Link to={(props.pList ? "../home/" : "../") + text.toLowerCase()} style={{color: "white"}}>
                        <ListItem key={text} disablePadding>
                            <ListItemButton selected={rota.indexOf(text.toUpperCase())?false:true} sx={{'&.Mui-selected, &.Mui-selected:hover, &:hover': {backgroundColor: "#FF8307"}}}>                        
                                <ListItemIcon> <KeyboardArrowRightIcon sx={{color: "orange", fontSize: "30px"}}/> </ListItemIcon>
                                <ListItemText><p style={{fontWeight: "bold", padding: 0, color: "white", lineHeight: "0.5rem"}}>{text}</p></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
                {
                    props.pList ? null : 
                    <Link to={"../"} style={{color: "white"}}>
                    <ListItem disablePadding>
                        <ListItemButton selected={true} sx={{'&.Mui-selected, &.Mui-selected:hover, &:hover': {backgroundColor: "orangered"}}}>                        
                            <ListItemIcon> <img src="/img/fi-sr-rhombus.png" alt="" style={{width: "18px"}}/> </ListItemIcon>
                            <ListItemText>
                                <p style={{fontWeight: "bold", padding: 0, color: "white", lineHeight: "0.5rem"}}>PAINEL</p>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                }
            </List>
        </Box>
    );
}