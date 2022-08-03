import { useEffect } from "react";

const DescriptionForm = ({ inputsDatas, setInputsDatas, modify, handleChange }) => {
  useEffect(() => {
    setInputsDatas({
      description: modify,
    });
  }, [modify]);

  return (
    <>
      <textarea onChange={(e) => handleChange(e)} defaultValue={inputsDatas.description} placeholder="Parlez nous de vous" />
    </>
  );
};
export default DescriptionForm;
