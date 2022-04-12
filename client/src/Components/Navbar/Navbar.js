import React from 'react'
import useStyles from './styles';
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import memories from '../../images/memories.png'
import { Link } from "react-router-dom";
export default function Navbar() {
    const classes = useStyles();
    const user = null;
    return (
        <AppBar className={classes.appBar} position='static' color="inherit">
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} component={Link} to="/" variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {/* {user ? (
                    <div >

                    </div>
                ) : (

                    )} */}

            </Toolbar>

        </AppBar>
    )
}
