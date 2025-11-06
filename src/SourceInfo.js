import React from 'react';
import { months } from './utils';
import PropTypes from 'prop-types';


export const SourceInfo = ({ kildedato, showKildeDato = false }) => {
    if (!kildedato) {
        return null;
    }
        
    if(!showKildeDato) {
        return null;
    }

    const dato = new Date(Date.parse(kildedato));
    const year = dato.getFullYear();
    const month = months[dato.getMonth()]

    return (
        <p> 
            Kilde: Statistisk sentralbyrå {year + 1}. Tall fra {month} {year}.{" "}
            <a href="/tema/om_utdanning.no/om_yrkes-_og_utdanningstatistikken">Forklaring til statistikken</a>
        </p>
    )
}

SourceInfo.propTypes = {
    kildedato: PropTypes.string,
    showKildeDato: PropTypes.bool
}