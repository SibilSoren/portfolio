import { useContext } from 'react';
import './App.css';
import HeroContent from './components/HeroContent';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Store from './store';
function App() {
  const { isDarkMode } = useContext(Store);
  return (
    <div className={`App  lg:pr-40 lg:pl-40 md:pr-10 md:pl-10 sm:pr-5 sm:pl-5 h-screen ${isDarkMode ? `dark:bg-slate-800 dark:text-white` : ``} `}>
      <NavigationBar />
      <HeroContent />
    </div>
  );
}

export default App;
