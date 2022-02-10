import Router from './router'
import Maintenance from './components/Maintenance'

function App() {
    const maintenance = false
    return <div className="text-dark">{maintenance ? <Maintenance /> : <Router />}</div>
}

export default App
