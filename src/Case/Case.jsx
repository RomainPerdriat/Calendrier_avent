import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './case.scss';

const Case = ({
    className,
    title,
    ...rest}) => {
   return (
       <div
            className={classnames('case', className)}
         >
            {title}
        </div>
   );
};

Case.propTypes = {
    className: PropTypes.string,
};
Case.defaultProps = {
    className: '',
};
export default React.memo(Case);
