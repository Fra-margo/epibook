import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Mynav';
import CustomFooter from './components/Myfooter';
import Welcome from './components/Mywelcome'
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <div>
      <Navigation />
      <Welcome />
      <AllTheBooks />
      <CustomFooter />
    </div>
  );
}

export default App;