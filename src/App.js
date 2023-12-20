import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Mynav';
import CustomFooter from './components/Myfooter';
import MyJumbotron from './components/MyJumbotron'
import Booklist from './components/BookList';
import fantasy from '../src/data/books/fantasy.json';

function App() {
  return (
    <div>
      <Navigation />
      <MyJumbotron />
      <Booklist books={fantasy}/>
      <CustomFooter />
    </div>
  );
}

export default App;