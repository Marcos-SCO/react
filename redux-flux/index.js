/**
 * index.js react application
 */

// import store
import store from './store/store';
// import provide from react-redux
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MyView />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);