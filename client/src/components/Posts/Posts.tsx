import { useEffect, useLayoutEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PostStateInterface } from "../../interfaces/post_interface";
import { getPosts, postSelector } from "../../reducers/postSlice";
import type { AppDispatch } from "../../store/store";
import Loading from "../Loading/Loading";
import Post from "./Post/Post";

type propsType = {
  setCurrentId: React.Dispatch<React.SetStateAction<string>>;
};

const Posts: React.FC<propsType> = ({ setCurrentId }) => {
  const dispatch: AppDispatch = useDispatch();
  const { posts, loading } = useSelector(postSelector);

  useLayoutEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      {loading === "loading" ? (
        <div className="grid place-items-center w-full">
          <Loading />
        </div>
      ) : (
        <div className="container px-1 mt-2">
          <div className="flex flex-wrap justify-evenly">
            {posts.map((post: PostStateInterface) => (
              <Post key={post?._id} post={post} setCurrentId={setCurrentId} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
