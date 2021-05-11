import React, {useState, useEffect} from 'react'
import {createUseStyles} from 'react-jss'
import Pad from './Pad'

const FONT_COLOR = 'white'

const useStyles = createUseStyles({
    calculator: {
        padding: 5,
        margin: 0,
        width: 400,
        height: 500,
        backgroundColor: '#000000',
        border: 'solid #47476b 2px',
        display: 'grid',
        fontFamily: 'Share Tech Mono, sans-serif',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr'
    },
    '@media screen and (max-width: 430px)': {
        calculator: {
            width: '90%',
            height: '70%'
        }
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
    const [operation, setOperation] = useState([])
    const [display, setDisplay] = useState('')

    // change display when operation changes
    useEffect(() => {
        setDisplay(operation.join(' '))
    }, [operation])

    const handleClick = (evt) => {
        // there is no way to input anything other than numbers or + / X - so no need to check for characters
        const input = evt.target.textContent
        // set input
        setInput(input)
        // set operation
        const previousInput = operation[operation.length - 1]
        const isInputDot = input === '.'
        const isInputNotANumber = isNaN(parseFloat(input))
        const isPrevInputNotANumber = isNaN(parseFloat(previousInput))
        // if this input and previous input was an operation delete the previous input
        if(isInputNotANumber && !isInputDot) {
            if(isPrevInputNotANumber) {
                setOperation([...operation.slice(0, -1), input])
                return
            }
        } 
        // if previous input was an operation, don't allow a dot input
        if(isPrevInputNotANumber && isInputDot)
            return
        // if previus input ends with a dot and new input is an operation remove the dot
        if(isInputNotANumber && previousInput.endsWith('.')) {
            const newPrevInput = previousInput.slice(0, -1) // dot is PART of the previous input
            setOperation([...operation.slice(0, -1), newPrevInput, input])
            return
        }
        // if previous input and the new input is a number or a dot concatanate the new input to the last input
        if(!isPrevInputNotANumber && (!isInputNotANumber || isInputDot)) {
            // if previous input already contains a dot, ignore the new dot
            if(previousInput.includes('.') && isInputDot) 
                return
            const newAndPrev = `${previousInput}${input}`
            setOperation([...operation.slice(0, -1), newAndPrev])
            return
        }

        setOperation([...operation, input])
    }

    const handleCalculate = (evt) => {
        // calculate using operations and numbers in variable operation
    }

    const handleAC = (evt) => {
        // empty operation, input, and display
        setInput('')
        setOperation([])
        setDisplay('')
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

            <Pad bg={acBG} onClick={handleAC} character='AC' column='1/3' row='2' color={FONT_COLOR} />
            <Pad bg={operationBG} onClick={handleClick} character='/' column='3' row='2' color={FONT_COLOR} />
            <Pad bg={operationBG} onClick={handleClick} character='X' column='4' row='2' color={FONT_COLOR} />

            <Pad bg={numberBG} onClick={handleClick} character='7' column='1' row='3' color={FONT_COLOR} />
            <Pad bg={numberBG} onClick={handleClick} character='8' column='2' row='3' color={FONT_COLOR} />
            <Pad bg={numberBG} onClick={handleClick} character='9' column='3' row='3' color={FONT_COLOR} />
            <Pad bg={operationBG} onClick={handleClick} character='-' column='4' row='3' color={FONT_COLOR} />
            
            <Pad bg={numberBG} onClick={handleClick} character='4' column='1' row='4' color={FONT_COLOR} />
            <Pad bg={numberBG} onClick={handleClick} character='5' column='2' row='4' color={FONT_COLOR} />
            <Pad bg={numberBG} onClick={handleClick} character='6' column='3' row='4' color={FONT_COLOR} />
            <Pad bg={operationBG} onClick={handleClick} character='+' column='4' row='4' color={FONT_COLOR} />

            <Pad bg={numberBG} onClick={handleClick} character='1' column='1' row='5' color={FONT_COLOR} />
            <Pad bg={numberBG} onClick={handleClick} character='2' column='2' row='5' color={FONT_COLOR} />
            <Pad bg={numberBG} onClick={handleClick} character='3' column='3' row='5' color={FONT_COLOR} />
            <Pad bg={equalsBg} onClick={handleCalculate} character='=' column='4' row='5/7' color={FONT_COLOR} />

            <Pad bg={numberBG} onClick={handleClick} character='0' column='1/3' row='6' color={FONT_COLOR} />
            <Pad bg={numberBG} onClick={handleClick} character='.' column='3' row='6' color={FONT_COLOR} />
        </div>
    )
}

export default Calculator