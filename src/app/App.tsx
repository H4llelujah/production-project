import { Link } from 'react-router-dom';
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widget/Navbar';

const App = () => {

  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toogleTheme}>TOGGLE</button>
    </div>
  )
}

export default App;

