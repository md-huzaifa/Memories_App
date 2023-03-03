import React, { useEffect, useState } from "react";
import ReactImageFileToBase64 from "react-file-image-to-base64";
import { useDispatch, useSelector } from "react-redux";
import { PostStateInterface } from "../../interfaces/post_interface";
import {
  postSelector,
  sendPostsThunk,
  updatePostThunk
} from "../../reducers/postSlice";
import type { AppDispatch, RootState } from "../../store/store";

type formType = {
  currentId: string;
  setCurrentId: React.Dispatch<React.SetStateAction<string>>;
};

const initialPostData = {
  creator: "",
  title: "",
  message: "",
  tags: "",
  selectedFile: "",
  likeCount: 0,
  createdAt: new Date(),
};

const Form: React.FC<formType> = ({ currentId, setCurrentId }) => {


  const dispatch: AppDispatch = useDispatch();
  
  const [uploadedImage, setUploadImage] = useState("Choosen Image...");
  const [postData, setPostData] = useState<PostStateInterface>(initialPostData);

  const allPosts = useSelector(postSelector);

  const editablePost: PostStateInterface | null = currentId
    ? allPosts.posts.find((post) => post._id === currentId)!
    : null;

  useEffect(() => {
    if (editablePost) setPostData(editablePost);
  }, [editablePost]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePostThunk({ currentId, postData }));

    } else {
      dispatch(sendPostsThunk(postData));
    }
    clear();
  };

  const handleImageFiles = (files: any) => {
    setPostData({ ...postData, selectedFile: files[0].base64_file });
    setUploadImage(files[0].file_name);
  };

  const clear = () => {
    setCurrentId('');
    setPostData(initialPostData)
  };

  const changeState = ({target: { name, value }}: React.ChangeEvent<HTMLInputElement>) => {
    // setPostData((prev) => {
    //   (prev as any)[name] = value;
    //   const newValue = { ...prev };
    //   return newValue;
    // });  
    setPostData((prev) => {
      const newValue:any = {...prev}
      newValue[name] = value
      return newValue
    })
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="font-bold text-blue-500 items-center mb-3">
          {currentId ? 'Editing' : 'Creating'}  a memory
        </div>
        <input
          type="text"
          name="creator"
          value={postData.creator}
          placeholder="Creator"
          className="block text-gray-700 text-sm border-2 mb-3 my-1"
          onChange={(e) => changeState(e)}
        ></input>
        <input
          type="text"
          name="title"
          value={postData.title}
          placeholder="Title"
          className="block text-gray-700 text-sm border-2 mb-3 my-1"
          onChange={(e) => changeState(e)}
        ></input>
        <input
          type="text"
          name="message"
          value={postData.message}
          placeholder="Message"
          className="block text-gray-700 text-sm border-2 mb-3 my-1"
          onChange={(e) => changeState(e)}
        ></input>
        <input
          type="text"
          name="tags"
          value={postData.tags}
          placeholder="Tags"
          className="block text-gray-700 text-sm border-2 mb-3 my-1"
          onChange={(e) => changeState(e)}
        ></input>
        <div className="my-5">
          <ReactImageFileToBase64
            multiple={false} // MULTIPLE IS SET TO FALSE BY DEFAULT, SO FEEL FREE TO REMOVE THIS  CHUNK IF YOU WANT
            onCompleted={handleImageFiles}
            preferredButtonText="Click Me !"
          />
          <div className="inline-block ml-2 max-w-xs">{uploadedImage}</div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-7 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-7 rounded focus:outline-none focus:shadow-outline"
          onClick={clear}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
