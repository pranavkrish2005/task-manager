import './App.css';
import ToDoList from './components/todolist';
import Blog from './components/Blog';
// import Example from './components/test';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
