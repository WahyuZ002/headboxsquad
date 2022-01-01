import Home from './views/Home'
import Comic from './views/Comic'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="text-dark">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/comic" element={<Comic />}></Route>
            </Routes>
        </div>
    )
}

export default App
