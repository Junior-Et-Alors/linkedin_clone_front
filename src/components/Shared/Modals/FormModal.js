/* Type = add or modify */

// Résumé : Prénom, nom, surnom, poste -> uniquement en modification

// Expérience : Poste, type (CDD CDI Intérim stage bénévolat), nom de la structure, lieu, date début/fin, description
// Formation : Ecole, diplome, domaine, date début/fin, résultat obtenu, description
// projet : Nom, début/fin, URL, description
// post : Contenu du post

import { useContext } from "react";
import { ModalContext } from "../../../App";
import "../../../assets/styles/formModal.scss";

const FormModal = () => {
  const { modalConfig, showModal, setShowModal } = useContext(ModalContext);
  const Template = modalConfig.template;
  console.log(Template);
  const handleClick = (e) => {
    /* When i click, it check the target. If it's this modal's overlay, it close this modal */
    e.target.className.indexOf("modal-overlay") === 0 && setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Coucou");
  };

  return (
    <aside onClick={(e) => handleClick(e)} className={`modal-overlay ${showModal ? "toggled" : "untoggled"}`}>
      <form className="modal-content" onSubmit={(e) => handleSubmit(e)}>
        <Template />
        <button type="submit">Enregistrer</button>
      </form>
    </aside>
  );
};
export default FormModal;
