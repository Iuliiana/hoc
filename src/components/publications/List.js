import React from 'react';
import PropTypes from 'prop-types';
import Video from "./Video";
import Article from "./Article";
import withHighlight from "../../hoc/withHighlight";
import uuid from "react-uuid";

const List = props => {

    const HighlightArticle = withHighlight(Article);
    const HighlightVideo = withHighlight(Video);

    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <HighlightVideo key={uuid()} {...item} />
                );

            case 'article':
                return (
                    <HighlightArticle key={uuid()} {...item} />
                );
            default:
                return null;
        }
    });
};

List.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            url: PropTypes.string,
            title: PropTypes.string,
            views: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};

export default List;
