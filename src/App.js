import Router from './router'
import Maintenance from './components/Maintenance'

function App() {
    const maintenance = true
    return <div className="text-dark">{maintenance ? <Maintenance /> : <Router />}</div>
}

export default App
