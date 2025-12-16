import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import SkillsLog from './components/SkillsLog'
import Divider from './components/Divider'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <Divider />
        <SkillsLog />
      </div>
    </div>
  )
}

export default App