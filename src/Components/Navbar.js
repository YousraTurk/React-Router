import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import About from './About'
import Contact from './Contact'
import Home from './Home'
const Navbar = () => {
    return (
        <div>
            <Router>
            <nav style={{ margin: 10 }}>
    <Link to="/" style={{ padding: 5 }}>
      Home
    </Link>
    <Link to="/about" style={{ padding: 5 }}>
      About
    </Link>
    <Link to="/contact" style={{ padding: 5 }}>
      Contact
    </Link>

  </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes>

            </Router>
            
        </div>
    )
}

export default Navbar
