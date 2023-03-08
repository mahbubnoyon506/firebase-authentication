
import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';

const routes = createBrowserRouter([
{
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
       {
        path: '/',
        element: <Home />
       },
       {
        path: '/signup',
        element: <SignUp />
       },
       {
        path: '/login',
        element: <Login />
       }
    ]
}
])

export default routes;