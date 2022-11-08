import React from 'react'
import App from './app'
import {render} from '@testing-library/react'
import axios from 'axios'
jest.mock('axios')


describe('App Component', () => {
    it('shoud render articles when api response', async() => {
        render(<App/>)

    })
})
describe('fetchNews', () => {
    describe(' when API call is successfull', () => {
        it('should return articles list', () => {
            (axios.get as jest.Mock).mockImplementation(() =>
            Promise.resolve({status: 200, data: {'key': 'value'} })
            )
        })
    })
    describe('when API call is fails', () => {
        it('should return empty articles list', () => {
            (axios.get as jest.Mock).mockImplementation(() =>
            Promise.reject({status: 401})
            )
        })
    })
})