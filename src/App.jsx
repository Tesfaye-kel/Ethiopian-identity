import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* A router would typically go here to switch between pages */}
        <Home />
      </main>
      <Footer />
    </div>
  )
}
export default App
