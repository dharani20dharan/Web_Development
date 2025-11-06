import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Thermostat from './components/Thermostat'
import Timer from './components/Timer'


const navItems = [
'Home',
'Education',
'Skills',
'Projects',
'Experience',
'Achievements',
'Thermostat',
'Timer'
]


export default function App(){
return (
<div className="app">
<aside className="sidebar">
<h1 className="logo">Dharanidharan M</h1>
<nav>
{navItems.map(item => (
<NavLink
key={item}
to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
className={({isActive}) => isActive ? 'navlink active' : 'navlink'}
>
{item}
</NavLink>
))}
</nav>
</aside>
<main className="content">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/education" element={<Education/>} />
<Route path="/skills" element={<Skills/>} />
<Route path="/projects" element={<Projects/>} />
<Route path="/experience" element={<Experience/>} />
<Route path="/achievements" element={<Achievements/>} />
<Route path="/thermostat" element={<Thermostat/>} />
<Route path="/timer" element={<Timer/>} />
</Routes>
</main>
</div>
)
}