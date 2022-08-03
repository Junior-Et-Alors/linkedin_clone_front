import { useEffect } from "react";

const ProjectForm = ({ inputsDatas, setInputsDatas, modify, handleChange }) => {
  useEffect(() => {
    setInputsDatas({
      name: modify ? modify.name : "",
      fromDate: modify ? modify.fromDate : "",
      toDate: modify ? modify.toDate : "",
      projectURL: modify ? modify.projectURL : "",
      description: modify ? modify.description : "",
    });
  }, [modify]);
  return (
    <>
      <label htmlFor="name">Nom du projet</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.name} name="name" type="text" placeholder="Pinkedin" />
      <label htmlFor="fromDate">Début</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.fromDate} name="fromDate" type="date" />
      <label htmlFor="toDate">Fin</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.toDate} name="toDate" type="date" />
      <label htmlFor="projectURL">URL du projet</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.projectURL} name="projectURL" type="text" placeholder="monprojet.com" />
      <label htmlFor="description">Description</label>
      <textarea onChange={(e) => handleChange(e)} defaultValue={inputsDatas.description} name="description" placeholder="Racontez nous votre projet" />
    </>
  );
};
export default ProjectForm;
