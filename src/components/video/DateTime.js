import React from 'react';
import PropTypes from 'prop-types';

DateTime.propTypes = {
    date: PropTypes.string.isRequired,
};

function DateTime(props) {
    const {date} = props;
    return (
        <p className="date">{date}</p>
    );
}

export default DateTime;