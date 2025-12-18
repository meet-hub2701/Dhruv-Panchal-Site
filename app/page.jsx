'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Specialities } from '../components/Specialities'
import { Portfolio } from '../components/Portfolio'
import { Contact } from '../components/Contact'

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    // Initialize theme from local storage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark')
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        setIsDarkMode(prev => {
            const newTheme = !prev
            if (newTheme) {
                document.documentElement.classList.add('dark')
                localStorage.setItem('theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('theme', 'light')
            }
            return newTheme
        })
    }

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-dark text-white' : 'bg-white text-black'}`}>
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <main>
                <Hero isDarkMode={isDarkMode} />
                <About isDarkMode={isDarkMode} />
                <Specialities isDarkMode={isDarkMode} />
                <Portfolio isDarkMode={isDarkMode} />
                <Contact isDarkMode={isDarkMode} />
            </main>
        </div>
    )
}
