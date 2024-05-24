import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/';
import Header from './Components/Header/';
import Footer from './Components/Footer/';
import CursorFollower from './Components/CursorFollower/';

function App() {
    return (
        <Router>
            <CursorFollower />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} /> {/* First Page */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
