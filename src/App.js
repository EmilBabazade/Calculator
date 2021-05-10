import React from 'react'
import {createUseStyles} from 'react-jss'
import 'jss-plugin-global'

const useStyles = createUseStyles({
    '@global': {
        html: {
            boxSizing: 'border-box'
        },
        'html, body, #root': {
            height: '100%',
            width: '100%',
            margin: 0,
            padding: 0
        },
        '*, *:before, *:after': {
            boxSizing: 'inherit'
        }
    },
})

const App = () => {
    return (
        <div>
      hello
        </div>
    )
}

export default App