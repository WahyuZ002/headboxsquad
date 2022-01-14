import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Comic from '../views/comics/Index'
import NotFound from '../views/errors/NotFound'

export default function index() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/comics" element={<Comic />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}
