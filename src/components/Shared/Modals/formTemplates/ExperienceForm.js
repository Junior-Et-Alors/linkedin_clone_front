import { useEffect } from "react";

const ExperienceForm = ({ inputsDatas, setInputsDatas, modify, handleChange }) => {
  useEffect(() => {
    setInputsDatas({
      name: modify ? modify.name : "",
      type: modify ? modify.type : "",
      structure: modify ? modify.structure : "",
      city: modify ? modify.city : "",
      fromDate: modify ? modify.fromDate : "",
      toDate: modify ? modify.toDate : "",
      description: modify ? modify.description : "",
    });
  }, [modify]);

  return (
    <>
      <label htmlFor="name">Poste</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.name} name="name" type="text" placeholder="Carreleur pro..." />
      <label htmlFor="type">Type de poste</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.type} name="type" type="text" placeholder="CDD/CDI" />
      <label htmlFor="structure">Nom de la structure</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.structure} name="structure" type="text" placeholder="Carrefour" />
      <label htmlFor="city">Ville</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.city} name="city" type="text" placeholder="Aix-En-Pervanche" />
      <label htmlFor="fromDate">Début</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.fromDate} name="fromDate" type="date" />
      <label htmlFor="toDate">Fin</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.toDate} name="toDate" type="date" />
      <label htmlFor="description">Description</label>
      <textarea onChange={(e) => handleChange(e)} defaultValue={inputsDatas.description} name="description" placeholder="Racontez nous votre expérience" />
    </>
  );
};
export default ExperienceForm;
