import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid } from "@material-ui/core"
import Posts from './Components/Posts/Posts'
import Form from './Components/Form/Form'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import Navbar from './Components/Navbar/Navbar'
export default function App() {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId])

    return (
        <Container maxWidth="lg">
            <Navbar />
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>

            </Grow >

        </Container >
    )
}
