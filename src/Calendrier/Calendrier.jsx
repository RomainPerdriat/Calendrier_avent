import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './calendrier.scss';
import Case from '../Case/Case';

const Calendrier = ({
    className,
    datas,
    ...rest}) => {
        console.log(datas)
   return (
       <>
        <h2>
                {datas.musiques ?
                    "Calendrier de Musiques " 
                :   "Calendrier de Jeux vidéo"
                }
        </h2>
        <div
                className={datas.musiques ?
                    'calendrier-musique' 
                :   
                    'calendrier-jv'
                }
                {...rest}
            >                
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>

            </div>
        </>
   );
};

Calendrier.propTypes = {
    className: PropTypes.string,
    datas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};
Calendrier.defaultProps = {
    className: '',
};
export default React.memo(Calendrier);
