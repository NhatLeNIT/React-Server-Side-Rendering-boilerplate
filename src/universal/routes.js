import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/App';
import Home, { getHomeData } from '../pages/Home/Home';
import About, { getAboutData } from '../pages/About/About';
import UserList, { getUserData } from '../pages/UserList/UserList';
import NotFound from '../pages/NotFound/NotFound';

// for more details see https://reacttraining.com/react-router/web/guides/server-rendering
// specify routes with the asnyc function required to fetch the data to render the route
// IMPORTANT: the loadData function must return a Promise
export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        loadData: () => getHomeData()
    },
    {
        path: '/about',
        exact: true,
        component: About,
        loadData: () => getAboutData()
    },
    {
        path: '/users',
        exact: true,
        component: UserList,
        loadData: (store) => getUserData(store)
    },
    {
        path: '/users/:id',
        exact: true,
        component: UserList,
        loadData: (store) => getUserData(store)
    },
    {
        component: NotFound
    }
];

export default function Router() {
    return (
        <App>
            <Switch>
                {routes.map(route => (
                    <Route key={route.path || 'NotFound'} {...route} />
                ))}
            </Switch>
        </App>
    );
}
