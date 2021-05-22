import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import RepositoriesList from './components/RepositoriesList';

const App = () => {
  return <Provider store={store}>
    <RepositoriesList />
  </Provider>
}

ReactDOM.render(<App></App>, document.querySelector('#root'));