import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {

  const {theme, toogleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={toogleTheme}>TOGGLE</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/' element={<MainPage/>}/>
          </Routes>
        </Suspense>
    </div>
  )
}

export default App;
