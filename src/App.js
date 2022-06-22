import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header';
import Sidebar from './components/shared/Sidebar';
import Footer from './components/shared/Footer';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div class="wrapper">
      <Header/>
      <Sidebar/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
