import React from 'react'
import { Container } from "@material-ui/core"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
export default function App() {

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path='/' exact component={Home} />
                    <Route path='/auth' exact component={Auth} />
                </Routes>
                <Home />
            </Container >
        </BrowserRouter>

    )
}
