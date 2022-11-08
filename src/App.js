import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Homepage} from "./pages/Homepage";
import {Notfoundpage} from "./pages/Notfoundpage";
import {Layout} from "./components/Layout";
import TimePage from "./pages/TimePage";
 import {HighlightPage} from "./pages/HighlightPage";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path='view-time' element={<TimePage/>}/>
                <Route path='highlight' element={<HighlightPage/>}/>
                <Route path='*' element={<Notfoundpage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
