import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import Pad from './Pad'

const FONT_COLOR = 'white'

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
    },
    display: {
        gridColumn: '1/7',
        gridRow: '1',
        margin: 0,
        color: `${FONT_COLOR}`,
        '& *': {
            margin: 0,
            padding: 0,
            textAlign: 'end'
        },
        '& h3': {
            color: '#b07200'
        },
        fontFamily: 'Geostar, sans-serif'
    },
    input: {
        fontSize: 35
    },
    output: {
        color: '#b07200'
    }
})

const Calculator = () => {
    const [input, setInput] = useState('')
    const [operation, setOperation] = useState('')
    const [display, setDisplay] = useState('')

    const handleClick = (evt) => {
        console.log(evt.target.value)
    }

    const styles = useStyles()
    
    const numberBG = '#4d4d4d'
    const operationBG = '#666666'
    const acBG = '#ac3939'
    const equalsBg = '#004466'
    return(
        <div className={styles.calculator}>
            <div className={styles.display}>
                <div className={styles.output}>{display}</div>
                <div className={styles.input}>{input}</div>
            </div>

            <Pad bg={acBG} onClick={handleClick} character='AC' column='1/3' row='2' color={FONT_COLOR} />
            <Pad bg={operationBG} character='/' column='3' row='2' color={FONT_COLOR} />
            <Pad bg={operationBG} character='X' column='4' row='2' color={FONT_COLOR} />

            <Pad bg={numberBG} character='7' column='1' row='3' color={FONT_COLOR} />
            <Pad bg={numberBG} character='8' column='2' row='3' color={FONT_COLOR} />
            <Pad bg={numberBG} character='9' column='3' row='3' color={FONT_COLOR} />
            <Pad bg={operationBG} character='-' column='4' row='3' color={FONT_COLOR} />
            
            <Pad bg={numberBG} character='4' column='1' row='4' color={FONT_COLOR} />
            <Pad bg={numberBG} character='5' column='2' row='4' color={FONT_COLOR} />
            <Pad bg={numberBG} character='6' column='3' row='4' color={FONT_COLOR} />
            <Pad bg={operationBG} character='+' column='4' row='4' color={FONT_COLOR} />

            <Pad bg={numberBG} character='1' column='1' row='5' color={FONT_COLOR} />
            <Pad bg={numberBG} character='2' column='2' row='5' color={FONT_COLOR} />
            <Pad bg={numberBG} character='3' column='3' row='5' color={FONT_COLOR} />
            <Pad bg={equalsBg} character='=' column='4' row='5/7' color={FONT_COLOR} />

            <Pad bg={numberBG} character='0' column='1/3' row='6' color={FONT_COLOR} />
            <Pad bg={numberBG} character='.' column='3' row='6' color={FONT_COLOR} />
        </div>
    )
}

export default Calculator