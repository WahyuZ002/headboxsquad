import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import ComicIndex from '../views/comics/Index'
import ComicShow from '../views/comics/Show'
import NotFound from '../views/errors/NotFound'

export default function index() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/comics" element={<ComicIndex />}></Route>
                <Route path="/comics/:episode" element={<ComicShow />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}
