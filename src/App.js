import Counter from './Counter.js'
import { GetMovieList } from './fetchApi.js';
import './App.css';


function App() {
   
  GetMovieList();
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
