import {createRoot} from 'react-dom/client'
import React from 'react'
import App from './app'

import './styles/imports.scss'

const element = document.getElementById('app')!
const root = createRoot(element)
root.render(<App />)
