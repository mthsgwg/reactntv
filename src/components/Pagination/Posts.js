/* eslint-disable react/prop-types */
import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => (
          <div key={post?.id} className="col-sm">
            {post?.snippet?.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
