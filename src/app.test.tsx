import React from 'react'
import App from './app'
import {render, screen} from '@testing-library/react'
import axios from 'axios'
jest.mock('axios')
describe('App component', () => {
    it('Should render App component', () => {
        render(<App/>)
        screen.debug()
    })
})
