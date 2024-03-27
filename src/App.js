import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import { buycake } from './redux/cakes/cakeactions';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer/>
    </div>
    </Provider>
  );
}


export default App;
