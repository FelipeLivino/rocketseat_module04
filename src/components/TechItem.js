import React from 'react';
import PropTypes from 'prop-types';

function TechItem({tech, ondelete}){
    return(
        <li >{tech}
            <button
            type="button"
            onClick={ondelete}
            >Remover</button>
        </li>
    );
}

TechItem.defaultProps={
    tech: 'Oculto'
}

TechItem.propTypes={
    tech: PropTypes.string.isRequired,
}
export default TechItem;
