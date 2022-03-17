import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostData } from "../../redux/slices/postSlice";

const Post = () => {
  const post = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostData());
  }, [dispatch]);
  console.log(post);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>This is post</h1>
      {post.map((p) => (
        <li>{p.title}</li>
      ))}
    </div>
  );
};

export default Post;
