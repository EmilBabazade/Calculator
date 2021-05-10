import React from 'react'
import {createUseStyles} from 'react-jss'
import Pad from './Pad'

const useStyles = createUseStyles({
    calculator: {
        padding: 5,
        margin: 0,
        width: 334,
        height: 394,
        backgroundColor: '#000000',
        border: 'solid #47476b 2px',
        display: 'grid',
        fontFamily: 'Share Tech Mono, sans-serif',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr'
    }
})

const Calculator = () => {
    const styles = useStyles()
    
    return(
        <div className={styles.calculator}>
            <Pad bg='#4d4d4d' character='8' column='2' row='3' color='#f4f4f4' />
            <Pad bg='#4d4d4d' character='7' column='1' row='3' color='#f4f4f4' />
            <Pad bg='#4d4d4d' character='4' column='1' row='4' color='#f4f4f4' />
        </div>
    )
}

export default Calculator