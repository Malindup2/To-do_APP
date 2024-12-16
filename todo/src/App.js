import "./index.css";
import Searchbar from "./components/Searchbar";
import { Addbtn } from "./components/Addbtn";
import { Task } from "./components/Task";


function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gradient-to-t from-orange-300 to-indigo-400 m-auto">
        <div className="text-2xl font-bold font-sans text-center pt-5">To<span className="text-yellow-300 text-center pt-5"> - Do</span></div>
        <Searchbar />
        <Addbtn />
        <Task />
      </div>
    </div>
  );
}

export default App;
