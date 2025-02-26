import './App.css'
import { createBrowserRouter, RouterProvider }  from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './pages/homepage';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import NotFound from './pages/not-found';
import RootLayout from './layout/root-layout';
import CategoriesPage from './pages/movies';
import SearchPage from './pages/search';
import NowPlaying from './pages/movies/now-playing';
import TopRated from './pages/movies/top-rated';
import Popular from './pages/movies/popular';
import UpComing from './pages/movies/up-coming';
import MovieLayout from './layout/movies-layout';
import MovieDetails from './pages/movies/MovieDetails';
import { LoginProvider } from './components/LoginProvider';

import Ex from './components/Ex';

const router = createBrowserRouter([
  {
    path : '/',
    element : <RootLayout/>,
    errorElement : <NotFound/>,
    children : [
      {
        index: true,
        element: <HomePage/>,
        errorElement : <NotFound></NotFound>
      },
      {
      path : '/ex',
      element : <Ex></Ex>,
      errorElement : <NotFound></NotFound>
      },
      {
        path : '/login',
        element : <LoginPage></LoginPage>,
        errorElement : <NotFound></NotFound>
      },
      {
        path : '/signup',
        element: <SignupPage/>,
        errorElement : <NotFound></NotFound>
      },
      {
        path : '/search',
        element: <SearchPage/>,
        errorElement : <NotFound></NotFound>
      },
      {
        path : '/movies',
        element: <MovieLayout/>,
        errorElement : <NotFound></NotFound>,
        children : [{
          index: true,
          element: <CategoriesPage/>,
          errorElement : <NotFound></NotFound>  
        },
        {
          path : '/movies/now-playing',
          element : <NowPlaying></NowPlaying>,
          errorElement : <NotFound></NotFound>,
        },
        {
          path : '/movies/top-rated',
          element : <TopRated></TopRated>,
          errorElement : <NotFound></NotFound>,
        },
        {
          path : '/movies/popular',
          element : <Popular></Popular>,
          errorElement : <NotFound></NotFound>,
        },
        {
          path : '/movies/up-coming',
          element : <UpComing />,
          errorElement : <NotFound></NotFound>,
        },
        {
          path : '/movies/:movieId',
          element : <MovieDetails />,
          errorElement : <NotFound></NotFound>
        }
      ]
      }
    ]
  }
])

function App() {
  return (
    <LoginProvider>
      <RouterProvider router={router}/>
    </LoginProvider>
  )
}

export default App
