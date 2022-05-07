import React from 'react';
import PropTypes from 'prop-types';
import './homepage.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const HomePage = ({
        className,
        ...rest
    }) => {

   return (
        <>
            <h2>Veuillez choisir un thème</h2> 
            <div className='homePage'>

                
                <Box className='box'>
                <NavLink to ="/Musique"  style={{ textDecoration: 'none'}} >
                    <Button variant="contained">Musique</Button>
                </NavLink>
                <NavLink to ="/JeuxVideo" style={{ textDecoration: 'none'}}>
                    <Button  variant="contained">JeuxVideo</Button>
                </NavLink>
                </Box>
                
                    
                           
            </div>
        </>
        
   );
};

HomePage.propTypes = {
    className: PropTypes.string,
};
HomePage.defaultProps = {
    className: '',
};
export default React.memo(HomePage);
