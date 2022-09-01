import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from "./VideoItem";
import uuid from "react-uuid";

const VideoList = props => {

    return (
        props.list.map(item => <VideoItem key={uuid()} item={item} />)
    );
};

VideoList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default VideoList;