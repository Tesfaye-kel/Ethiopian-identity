import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Ethiopia from './pages/nations/Ethiopia';
import Oromo from './pages/nations/Oromo';
import Amhara from './pages/nations/Amhara';
import Tigrayan from './pages/nations/Tigrayan';
import Somali from './pages/nations/Somali';
import Afar from './pages/nations/Afar';
import Nnp from './pages/nations/Nnp';
import Gambela from './pages/nations/Gambela';
import Gumuz from './pages/nations/Gumuz';

import './App.css'

function App() {
  return (
    <Router>
<div className="flex flex-col min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-200 selection:text-emerald-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/nations/ethiopia" element={<Ethiopia />} />
            <Route path="/nations/oro" element={<Oromo />} />
            <Route path="/nations/oromo" element={<Oromo />} />
            <Route path="/nations/amhara" element={<Amhara />} />
            <Route path="/nations/tigrayan" element={<Tigrayan />} />
            <Route path="/nations/tigray" element={<Tigrayan />} />
            <Route path="/nations/somali" element={<Somali />} />
            <Route path="/nations/affar" element={<Afar />} />
            <Route path="/nations/nnp" element={<Nnp />} />
            <Route path="/nations/gab" element={<Gambela />} />
            <Route path="/nations/gumuz" element={<Gumuz />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
export default App

