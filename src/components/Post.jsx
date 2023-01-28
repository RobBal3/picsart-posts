import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { mainContext } from '../context/ctx';

const Post = () => {
    const { posts } = useContext(mainContext);
    const { id } = useParams();

    const post = posts.find((item) => item.id === parseInt(id));

    console.log(post);

    return (
        <div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default Post;
