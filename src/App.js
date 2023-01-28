import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import MainContextProvider from './context/ctx.jsx';
import Post from './components/Post';

function App() {
    return (
        <MainContextProvider>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/posts/:id' element={<Post />} />
                </Routes>
            </div>
        </MainContextProvider>
    );
}

export default App;
