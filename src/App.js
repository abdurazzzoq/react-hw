import './App.css'
import { Header } from "./components/Header/Header";
import  Main  from './components/Main/Main';
import { Services } from './components/Our-Services/Services';
import { Healthcare } from './components/Healthcare/Healthcare';
import { Application } from './components/Application/Application';
import { Customer } from './components/Customer/Customer';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='div'>
     <Header />
     <Main />
     <Services />
     <Healthcare />
    <Application />
    <Customer />
    <Footer />
    </div>
  );
}

export default App;
 