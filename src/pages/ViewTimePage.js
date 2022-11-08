import React, {useState} from 'react';
import videoList from "../data/data";
import VideoList from "../components/video/VideoList";

export default function ViewTimePage() {
    const [list] = useState(videoList);

    return (
        <VideoList list={list}/>
    );
}