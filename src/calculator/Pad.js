import React from 'react'
import {createUseStyles} from 'react-jss'
import PropTpes from 'prop-types'

const useStyles = createUseStyles({
    pad: {
        backgroundColor: props => props.bg,
        color: props => `${props.color}`,
        gridColumn: props => `${props.column}`,
        gridRow: props => `${props.row}`,
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        cursor: 'pointer',
        userSelect: 'none',

        '&:hover': {
            margin: 0,
            color: '#000000',
            border: '1px solid grey'
        }
    }
})

const Pad = ({
    column, row, character, bg, color, onClick
}) => {
    const styles = useStyles({column, row, bg, color})

    return (
        <div onClick={onClick} className={styles.pad}>{character}</div>
    )
}

Pad.propTypes = {
    column: PropTpes.number.isRequired,
    row: PropTpes.number.isRequired,
    character: PropTpes.string.isRequired,
    bg: PropTpes.string.isRequired,
    color: PropTpes.string.isRequired,
    onClick: PropTpes.func.isRequired
}

export default Pad