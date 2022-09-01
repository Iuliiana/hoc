import React, {useState} from 'react';
import videoList from "./data/data";
import VideoList from "./components/video/VideoList";

function DateTime(props) {
  return (
      <p className="date">{props.date}</p>
  )
}

export default function App() {
  const [list, setList] = useState(videoList);

  return (
      <VideoList list={list} />
  );
}