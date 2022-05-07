import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './error404.scss';

const Error404 = ({className, ...rest}) => {
   return (
       <div
            className={classnames('error404', className)}
            {...rest}
         >
            Cette page n'est pas disponible désolé.
        </div>
   );
};

Error404.propTypes = {
    className: PropTypes.string,
};
Error404.defaultProps = {
    className: '',
};
export default React.memo(Error404);
