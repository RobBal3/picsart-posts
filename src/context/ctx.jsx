import { createContext, useState, useEffect } from 'react';

export const mainContext = createContext([]);

function MainContextProvider({ children }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }, []);

    function deletePost(id) {
        // Delete in the server
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        });

        setPosts((prev) => {
            return prev.filter((post) => post.id !== id);
        });
    }

    function addPost(newPost) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        setPosts((prev) => {
            return [...prev, newPost];
        });
    }

    function saveEditPost(id, newTitle, newBody) {
        setPosts((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return {
                        id: item.id,
                        userID: item.userID,
                        title: newTitle,
                        body: newBody,
                    };
                }
                return item;
            });
        });
    }

    return (
        <mainContext.Provider
            value={{ posts, setPosts, deletePost, saveEditPost }}
        >
            {children}
        </mainContext.Provider>
    );
}

export default MainContextProvider;
