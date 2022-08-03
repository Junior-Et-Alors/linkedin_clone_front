import { useEffect } from "react";

const FormationForm = ({ inputsDatas, setInputsDatas, modify, handleChange }) => {
  useEffect(() => {
    setInputsDatas({
      school: modify ? modify.school : "",
      degree: modify ? modify.degree : "",
      domain: modify ? modify.domain : "",
      results: modify ? modify.results : "",
      city: modify ? modify.city : "",
      fromDate: modify ? modify.fromDate : "",
      toDate: modify ? modify.toDate : "",
      description: modify ? modify.description : "",
    });
  }, [modify]);
  return (
    <>
      <label htmlFor="school">Ecole</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.school} name="school" type="text" placeholder="Lycée Sainte Croix" />
      <label htmlFor="degree">Diplome</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.degree} name="degree" type="text" placeholder="Baccalauréat" />
      <label htmlFor="domain">Domaine</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.domain} name="domain" type="text" placeholder="Vente" />
      <label htmlFor="results">Résultat obtenu</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.results} name="results" type="text" placeholder="Obtenu avec mention" />
      <label htmlFor="city">Ville</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.city} name="city" type="text" placeholder="Aix-En-Pervanche" />
      <label htmlFor="fromDate">Début</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.fromDate} name="fromDate" type="date" />
      <label htmlFor="toDate">Fin</label>
      <input onChange={(e) => handleChange(e)} defaultValue={inputsDatas.toDate} name="toDate" type="date" />
      <label htmlFor="description">Description</label>
      <textarea onChange={(e) => handleChange(e)} defaultValue={inputsDatas.description} name="description" placeholder="Racontez nous votre formation" />
    </>
  );
};
export default FormationForm;
