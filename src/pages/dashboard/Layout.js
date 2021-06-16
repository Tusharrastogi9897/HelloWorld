import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: "25%",
      flexShrink: 0,
    },
    borderColor: "primary"
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - 25%)`,
      marginLeft: drawerWidth,
      height: "10%"
    },
    [theme.breakpoints.up('sm')]: {
      height: "10%"
    },
    height: "9%",
    minHeight: "45px",
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: "25%",
    [theme.breakpoints.down("sm")]: {
      minWidth: "240px"
    }
  },
  listItem: {
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
}));

export default function Layout(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setMobileOpen(false));
    return () => window.removeEventListener("resize", () => setMobileOpen(false));
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Grid container>
      <Grid item xs={12} style={{
        height: "150px", backgroundColor: theme.palette.primary.main, marginBottom: 10
      }} />
      <Grid item xs={12}>
        {['Chat', 'Settings', 'About'].map((text, index) => (
          <ListItem button key={text} >
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </Grid>
    </Grid>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            size="medium"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <img src="/logo3.svg" alt="logo3" color="secondary" style={{ height: "100%", width: "30%", position: "absolute", right: 10 }} />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.toolbar} />
    </React.Fragment>
  );
}