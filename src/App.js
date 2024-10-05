import './App.css';
//import Biodata from './Biodata/biodata';
// import Navbar from './components/Navbar/navbar'
// import Hero from './components/Hero/hero';
// import About from './components/About/about';
// import Contact from './components/Contact/contact';
// import Footer from './components/Footer/footer';
import ToDoList from './ToDoListApp/todolist';
//import Navbar from './Navigation/Navbar';

function App() {
  return (
    <div className="ToDoListApp">
      {/*<Biodata />
      < Navbar />*/}
      <ToDoList /> 
    </div>
    ) ;
}

export default App;