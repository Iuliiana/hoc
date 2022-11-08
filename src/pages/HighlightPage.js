import {publicationsList} from "../data/data";
import List from "../components/publications/List";
import {useEffect, useState} from "react";


const HighlightPage = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(publicationsList);
    }, [])

    return (
        <List list={list}/>
    );
}

export {HighlightPage};