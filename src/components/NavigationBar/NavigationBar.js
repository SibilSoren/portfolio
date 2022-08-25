import React, { useContext, useState } from 'react'
import DarkModeToggle from "react-dark-mode-toggle";
import Store from '../../store';
import Hamburger from 'hamburger-react'

const NavigationBar = () => {
    const [isOpen, setOpen] = useState(false)
    const { setIsDarkMode, isDarkMode } = useContext(Store);

    return (
        <div className='pt-10 flex justify-between'>
            <p className='font-bold text-2xl font-lobster cursor-pointer'>Sibil Sarjam Soren</p>
            <div className='flex items-center'>
                <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
                <DarkModeToggle
                    onChange={setIsDarkMode}
                    checked={isDarkMode}
                    size={40}
                />
            </div>

        </div>
    )
}

export default NavigationBar