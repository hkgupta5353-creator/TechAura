import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Workshops from './pages/Workshops';


function App() {
return (
<Router>
<div className="min-h-screen bg-gray-900">
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/events" element={<Events />} />
<Route path="/workshops" element={<Workshops />} />
</Routes>
</div>
</Router>
);
}

export default App;