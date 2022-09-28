import React from 'react'
import App from './app'
import {render} from '@testing-library/react'

test('renders component', async () => {
    const {getByText} = render(<App/>)
    expect(getByText('Hello World')).toBeInTheDocument()
})
