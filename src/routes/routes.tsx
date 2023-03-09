
import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';


const routes = createBrowserRouter([
{
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
       {
        path: '/',
        element: <Home />
       }
    ]
}
])

export default routes;