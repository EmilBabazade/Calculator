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
    
    const numberBG = '#4d4d4d'
    const operationBG = '#666666'
    const acBG = '#ac3939'
    const equalsBg = '#004466'
    const color = '#f4f4f4'
    return(
        <div className={styles.calculator}>
            <Pad bg={acBG} character='AC' column='1/3' row='2' color={color} />
            <Pad bg={operationBG} character='/' column='3' row='2' color={color} />
            <Pad bg={operationBG} character='X' column='4' row='2' color={color} />

            <Pad bg={numberBG} character='7' column='1' row='3' color={color} />
            <Pad bg={numberBG} character='8' column='2' row='3' color={color} />
            <Pad bg={numberBG} character='9' column='3' row='3' color={color} />
            <Pad bg={operationBG} character='-' column='4' row='3' color={color} />
            
            <Pad bg={numberBG} character='4' column='1' row='4' color={color} />
            <Pad bg={numberBG} character='5' column='2' row='4' color={color} />
            <Pad bg={numberBG} character='6' column='3' row='4' color={color} />
            <Pad bg={operationBG} character='+' column='4' row='4' color={color} />

            <Pad bg={numberBG} character='1' column='1' row='5' color={color} />
            <Pad bg={numberBG} character='2' column='2' row='5' color={color} />
            <Pad bg={numberBG} character='3' column='3' row='5' color={color} />
            <Pad bg={equalsBg} character='=' column='4' row='5/7' color={color} />

            <Pad bg={numberBG} character='0' column='1/3' row='6' color={color} />
            <Pad bg={numberBG} character='.' column='3' row='6' color={color} />
        </div>
    )
}

export default Calculator