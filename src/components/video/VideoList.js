import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from "./VideoItem";
import uuid from "react-uuid";
import withWordTime from "../../hoc/withWordTime";

const VideoList = props => {

    const VideoWithWordTime = withWordTime(VideoItem);

    return props.list.map((item) => {
        return (
            <VideoWithWordTime key={uuid()} {...item} />
        );
    });
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