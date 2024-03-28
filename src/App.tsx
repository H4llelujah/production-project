import { Link, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import './styles/index.scss'
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {

  const {theme, toogleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={toogleTheme}>TOGGLE</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/about' element={<AboutPageAsync/>}/>
              <Route path='/' element={<MainPageAsync/>}/>
          </Routes>
        </Suspense>
    </div>
  )
}

export default App;
