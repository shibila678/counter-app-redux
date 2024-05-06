import logo from './logo.svg';
import './App.css';
import Parent from './Components/Parent';
import Counter from './Components/Counter';
import Counter2 from './Components/Counter2';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>
      {/* <Counter2></Counter2> */}
    </Provider>

  );
}

export default App;
