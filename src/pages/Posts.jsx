import React, { useContext, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { mainContext, deletePost, handleAddPost } from '../context/ctx';
import { v4 as uuidv4 } from 'uuid';

const Posts = () => {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { posts, deletePost, editPost, addPost } = useContext(mainContext);
    const navigate = useNavigate();

    function handleEdit(post) {
        setEditMode(true);
        setTitle(post.title);
        setBody(post.title);
    }

    function handleAddPost() {
        addPost({
            id: uuidv4(),
            userId: '1',
            title: title,
            body: body,
        });

        setTitle('');
        setBody('');
    }

    return (
        <div>
            <h1>All Posts</h1>

            <div>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type='text'
                    placeholder='Title'
                    value={title}
                />
                <input
                    value={body}
                    type='text'
                    placeholder='body'
                    onChange={(e) => setBody(e.target.value)}
                />

                <button onClick={() => handleAddPost()}>Add</button>
                {editMode && <button onClick={() => {}}>Save Edit</button>}
            </div>

            {posts.map((post) => {
                return (
                    <div>
                        <div onClick={() => navigate(`${post.id}`)}>
                            <div>{post.title}</div>
                            <div>{post.body}</div>
                        </div>
                        <button onClick={() => handleEdit(post)}>Edit</button>
                        <button onClick={() => deletePost(post.id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;
