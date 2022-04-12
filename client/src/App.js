import React from 'react'
import { Container } from "@material-ui/core"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Auth from './Components/Auth/Auth'
export default function App() {

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path='/auth' exact element={<Auth />} />
                    <Route path='/' exact element={<Home />} />
                </Routes>

            </Container >
        </BrowserRouter>

    )
}
