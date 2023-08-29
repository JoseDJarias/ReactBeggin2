import React, {useState} from 'react';
import '../styles/ThemeSelector.css';
import Reactions from './Reaction';
function ThemeSelector() {
    const [isDarkMode,setIsDarkMode] = useState(false)
    
    const toggleTheme = () =>{
        // const currentMode = isDarkMode; //almacena el modo actual
        // setIsDarkMode(!currentMode);
        setIsDarkMode(!isDarkMode)

    }

    return (
        <div className={`app ${isDarkMode? 'dark': 'light'}`}>
            <header>
                <button onClick={toggleTheme}>Cambiar</button>
            </header>
            <main>
                <p>Este es el contenido del sitio</p>
                <Reactions isDarkMode={isDarkMode}/>
            </main>
        </div>
      );
}

export default ThemeSelector;