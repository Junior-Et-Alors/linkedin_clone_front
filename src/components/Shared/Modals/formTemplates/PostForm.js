import { useEffect } from "react";

const PostForm = ({ inputsDatas, setInputsDatas, modify, handleChange }) => {
  useEffect(() => {
    setInputsDatas({
      content: modify ? modify.content : "",
    });
  }, [modify]);
  return (
    <>
      <textarea defaultValue={inputsDatas.content} placeholder="Qu'allez vous partager ?"></textarea>
    </>
  );
};

export default PostForm;
