import PropTypes from 'prop-types';

function Item({ marca, ano_lancamento }) {
    return (
        /* <> </> Fragmentos */
        <> 
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

/* Especificar tipo dos props */
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

/* Valores default dos props */
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0
}

export default Item