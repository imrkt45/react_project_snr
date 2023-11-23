import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import{ store} from './Reduxfeature/store';
import { setResources } from './Reduxfeature/userslice';
import jsondata from './components/data.json'

const newdata = jsondata.meta.users;

store.dispatch(setResources(newdata));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
 <App/>
 </Provider>
);


reportWebVitals();
