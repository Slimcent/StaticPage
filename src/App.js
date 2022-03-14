
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <div>
        <Header/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <Footer/>
    </div>
  );
}

export default App;
