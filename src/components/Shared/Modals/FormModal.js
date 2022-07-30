/* Type = add or modify */

// Résumé : Prénom, nom, surnom, poste -> uniquement en modification

// Expérience : Poste, type (CDD CDI Intérim stage bénévolat), nom de la structure, lieu, date début/fin, description
// Formation : Ecole, diplome, domaine, date début/fin, résultat obtenu, description
// projet : Nom, début/fin, URL, description
// post : Contenu du post

import { useEffect, useState } from "react";
import "../../../assets/styles/formModal.scss";
const FormModal = ({ formTemplate, modalTitle, toggle, setToggle }) => {
  const Template = formTemplate;
  const [inputDatas, setInputDatas] = useState({});
  const handleClick = (e) => {
    /* When i click, it check the target. If it's this modal's overlay, it close this modal */
    e.target.className.indexOf("modal-overlay") === 0 && setToggle(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputDatas);
  };
  return (
    <aside onClick={(e) => handleClick(e)} className={`modal-overlay ${toggle ? "toggled" : "untoggled"}`}>
      <form className="modal-content" onSubmit={(e) => handleSubmit(e)}>
        <h6>{modalTitle}</h6>
        <Template inputDatas={inputDatas} setInputDatas={setInputDatas} />
        <button type="submit">Enregistrer</button>
      </form>
    </aside>
  );
};
export default FormModal;
