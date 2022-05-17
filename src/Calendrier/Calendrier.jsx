import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './calendrier.scss';
import Case from '../Case/Case';
import jeuxvideo from '../datas/jeuxvideo';

const Calendrier = ({
    className,
    datas,
    ...rest}) => {
        const musiques = datas.musiques;
        const jeuxVideos = datas.jeuxvideo;
   return(
       ( musiques ? 
            <div>
                <h2>
                        Calendrier de Musiques                 
                </h2>
                <div className='calendrier-musique' 
                    {...rest}
                >    
                    { musiques.map((musique)=>(
                        <Case
                            key = {musique.id}
                            title = {musique.name}
                        />
                    ))                 
                        
                    }
                </div>
            </div>
        :
            <div>
                <h2>
                            Calendrier de JeuxVideos                 
                </h2>
                <div className='calendrier-jv' 
                    {...rest}
                >    
                    { jeuxVideos.map((jeuvideo)=>(
                        <Case
                            key = {jeuvideo.id}
                            title = {jeuvideo.name}
                        />
                    ))                    
                    }
                </div>
            </div>
        )            
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
