import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "transparent",
        position: "absolute",
        top: '0',
        zIndex: "2",
        width: "100%"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

export default function DenseAppBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {[{ name: 'Home', icon: <HomeOutlinedIcon />, link: '/' }, { name: 'Catalogue', icon: <ListOutlinedIcon />, link: '/catalogue' },
                { name: 'Mosaic', icon: <ComputerOutlinedIcon />, link: 'https://mymosaic.in/' }].map((text, index) => (
                    <a href={text.link} >
                        <ListItem button key={text}>
                            <ListItemIcon>{text.icon}</ListItemIcon>
                            <ListItemText primary={text.name} />
                        </ListItem>
                    </a>
                ))}
            </List>
            <Divider />
            <List>
                {[{ name: 'About', icon: <InfoOutlinedIcon />, link: "/about" },
                { name: 'Contact', icon: <CallOutlinedIcon />, link: "/contact" }].map((text, index) => (
                    <Link to={text.link} >
                        <ListItem button key={text}>
                            <ListItemIcon>{text.icon}</ListItemIcon>
                            <ListItemText primary={text.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: "linear-gradient(black, rgba(0,0,0,0.0))", width: "100%" }} elevation={0} >
                <Toolbar variant="dense">
                    <IconButton edge="start" onClick={toggleDrawer("left", true)} className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                        {list("list")}
                    </Drawer>
                    <Typography variant="h6" color="inherit">
                        The Liquor Valley
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
