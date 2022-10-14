import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clienId = process.env.REACT_APP_AUTH0_ID
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store} >
        <Auth0Provider
            domain={domain}
            clientId={clienId}
            redirectUri={window.location.origin}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Auth0Provider>
    </Provider>
);

