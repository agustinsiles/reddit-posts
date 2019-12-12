import React from 'react';
import PostsMenu from './components/PostsMenu/PostsMenu';
import PostDetails from './components/PostDetails/PostDetails';
import './App.css';

const App = () => (
    <div className="App">
        <PostsMenu />
        <PostDetails />
    </div>
);
    
export default App;