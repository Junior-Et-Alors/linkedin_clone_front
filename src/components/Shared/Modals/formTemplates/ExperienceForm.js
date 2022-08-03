import { useEffect } from "react";

const ExperienceForm = ({ setInputsDatas, modify, handleChange, showModal }) => {
  // !modify && console.log("Ajoute d'une nouvelle entrée");
  // modify && console.log("Modifier cette entitée : ", modify);

  useEffect(() => {
    console.log("Modify !", modify);
    setInputsDatas({
      name: modify ? modify.name : "",
      type: modify ? modify.type : "",
      structure: modify ? modify.structure : "",
      city: modify ? modify.city : "",
      fromDate: modify ? modify.fromDate : "",
      toDate: modify ? modify.toDate : "",
      description: modify ? modify.description : "",
    });
    return () => {
      console.log("Ouais c'est moi");
      modify = false;
    };
  }, [showModal]);

  return (
    <>
      <h6>Poste</h6>
      <input onChange={(e) => handleChange(e)} defaultValue={modify ? modify.name : ""} name="name" type="text" placeholder="Carreleur pro..." />
      <h6>Type de poste</h6>
      <input onChange={(e) => handleChange(e)} defaultValue={modify ? modify.type : ""} name="type" type="text" placeholder="CDD/CDI" />
      <h6>Nom de la structure</h6>
      <input onChange={(e) => handleChange(e)} defaultValue={modify ? modify.structure : ""} name="structure" type="text" placeholder="Carrefour" />
      <h6>Ville</h6>
      <input onChange={(e) => handleChange(e)} defaultValue={modify ? modify.city : ""} name="city" type="text" placeholder="Aix-En-Pervanche" />
      <h6>Début</h6>
      <input onChange={(e) => handleChange(e)} defaultValue={modify ? modify.fromDate : ""} name="fromDate" type="date" />
      <h6>Fin</h6>
      <input onChange={(e) => handleChange(e)} defaultValue={modify ? modify.toDate : ""} name="toDate" type="date" />
      <h6>Description</h6>
      <input onChange={(e) => handleChange(e)} defaultValue={modify ? modify.description : ""} name="description" type="text" placeholder="Racontez nous votre expérience" />
    </>
  );
};
export default ExperienceForm;
