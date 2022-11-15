import './App.css';
import Counter from './components/counter/Contador';
import Tasklist from './components/lists/TaskList';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Tasklist></Tasklist>
    </div>
  );
}

export default App;
