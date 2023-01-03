import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Domain dev-4aryhbxchft2mlj2.us.auth0.com
// client id q4cqKqPI5lf3nXUuVbXtwuzh2vj4Qo9z
root.render(
            <Auth0Provider
            domain="dev-4aryhbxchft2mlj2.us.auth0.com"
            clientId="q4cqKqPI5lf3nXUuVbXtwuzh2vj4Qo9z"
            redirectUri={window.location.origin}
            cacheLocation="localstorage"
          ><UserProvider>
            <ProductsProvider>
                <FilterProvider>
                  <CartProvider>
                    <App />
                  </CartProvider>
                </FilterProvider>
            </ProductsProvider>
            </UserProvider>
            </Auth0Provider>
            );
