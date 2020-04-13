import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    AppBar,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@material-ui/core';
import AdjustIcon from '@material-ui/icons/Adjust';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import WebIcon from '@material-ui/icons/Web';
import WorkIcon from '@material-ui/icons/Work';
import './style.css';


// FUTURE DEVELOPMENT
// =============================================
// NavBar Gradient color? Transparent? Off to side? Style to look cleaner
// Develop logo/brand - something with a bridge?

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginBottom: theme.spacing(4),
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },

}));

function Nav() {
    const classes = useStyles();
    const theme = useTheme();
    const [state, setState] = React.useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const chooseMenuList = text => {

        switch (text.text) {
            case "Home":
                return {
                    "redirect": "/",
                    "icon": <HomeIcon />
                }
            case "About":
                return {
                    // Future development: need to update file path when available
                    "redirect": "/about",
                    "icon": <PersonIcon />
                }
            case "Portfolio":
                return {
                    // Future development: need to update file path when available
                    "redirect": "/portfolio",
                    "icon": <WebIcon />
                }
            case "Services":
                // Need to add code for logging out. Maybe not here...?
                return {
                    "redirect": "/services",
                    "icon": <FingerprintIcon />
                }
            case "Experience":
                // Need to add code for logging out. Maybe not here...?
                return {
                    "redirect": "/experience",
                    "icon": <WorkIcon />
                }
            case "Contact":
                // Need to add code for logging out. Maybe not here...?
                return {
                    "redirect": "/contact",
                    "icon": <GroupIcon />
                }
            default:
                return <AdjustIcon />
        }
    };

    const list = (anchor) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'About', 'Portfolio', 'Services', 'Experience', 'Contact',].map((text, index) => (
                    <ListItem button key={text} component="a" href={chooseMenuList({ text }).redirect}>
                        <ListItemIcon>{chooseMenuList({ text }).icon}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                onClick={toggleDrawer(anchor, true)}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer className={classes.drawer} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav;