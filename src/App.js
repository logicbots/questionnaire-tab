import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'
import Landing from './Screens/Landing';
import Question from './Screens/Question';
import Finish from './Screens/Finish';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/questions" element={<Question/>} />
        <Route path='/finish' element={<Finish/>} />
      </Routes>
    </Router>
  );
}

export default App;
