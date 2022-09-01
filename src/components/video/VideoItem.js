import React from 'react';
import PropTypes from 'prop-types';
import DateTime from "./DateTime";


function VideoItem(props) {
    const {
        url,
        date
    } = props;

    return (
        <div className="video">
            <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTime date={date}/>
        </div>
    );
}

VideoItem.propTypes = {
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default VideoItem;