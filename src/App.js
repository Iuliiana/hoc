import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Homepage} from "./pages/Homepage";
import {Notfoundpage} from "./pages/Notfoundpage";
import {Layout} from "./components/Layout";
import ViewTimePage from "./pages/ViewTimePage";

// import {Crudpage} from "./pages/Crudpage";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path='view-time' element={<ViewTimePage/>}/>
                {/*<Route path='crud' element={<Crudpage/>}/>*/}
                <Route path='*' element={<Notfoundpage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
