import React from 'react'
import {createUseStyles} from 'react-jss'
import 'jss-plugin-global'
import Calculator from './calculator/Calculator'

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
    container: {
        backgroundColor: '#c2c2d6',
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const App = () => {
    const styles = useStyles()

    return (
        <div className={styles.container}>
            <Calculator />
        </div>
    )
}

export default App