import classes from './App.module.css';
import globalsetup from './components/_globalsetup.module.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'

export default function App(){
  

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Login isLogged={true} />,
    },
    {
      path:'/home',
      element: <Home />,
    }
  ])
  return (

    <div className={`${globalsetup.setup} ${classes.root}`}>
      <RouterProvider router={router} />
    </div>
  );
};
