import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Body from '../Components/Body'
import GorrasScreen from '../Components/body/screen/GorrasScreen'
import RemerasScreen from '../Components/body/screen/RemerasScreen'
import Header from '../Components/Header'


const RoutesMain = () => {
    return (
        <>
            <Header>

                <div>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/gorras'}>Gorras</Link>
                    <Link to={'/remeras'}>Remeras</Link>
                </div>
            </Header>
            <Routes>
                <Route path='/' element={<Body />} />
            </Routes>
            <Routes>
                <Route path='/gorras' element={<GorrasScreen />} />
            </Routes>
            <Routes>
                <Route path='/remeras' element={<RemerasScreen />} />
            </Routes>
        </>
    )
}

export default RoutesMain
