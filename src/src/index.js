import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from "./store";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)