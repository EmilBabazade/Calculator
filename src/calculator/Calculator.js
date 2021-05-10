import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    calculator: {
        width: 334,
        height: 394,
        backgroundColor: '#000000',
        border: 'solid #47476b 2px'
    }
})

const Calculator = () => {
    const styles = useStyles()
    
    return(
        <div className={styles.calculator}>

        </div>
    )
}

export default Calculator