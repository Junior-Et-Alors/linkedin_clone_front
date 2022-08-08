/* Type = add or modify */

// Résumé : Prénom, nom, surnom, poste -> uniquement en modification

// Expérience : Poste, type (CDD CDI Intérim stage bénévolat), nom de la structure, lieu, date début/fin, description
// Formation : Ecole, diplome, domaine, date début/fin, résultat obtenu, description
// projet : Nom, début/fin, URL, description
// post : Contenu du post

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../App";
import "../../../assets/styles/formModal.scss";

const FormModal = () => {
  const { modalConfig, showModal, setShowModal } = useContext(ModalContext);
  const [inputsDatas, setInputsDatas] = useState({});
  const FormTemplate = modalConfig.template;
  const handleClick = (e) => {
    /* When i click, it check the target. If it's this modal's overlay, it close this modal */
    e.target.className.indexOf("modal-overlay") === 0 && setShowModal(false);
  };

  const handleChange = (e) => {
    const newInputsDatas = { ...inputsDatas };
    for (let i = 0; i < Object.keys(inputsDatas).length; i++) {
      if (e.target.name === Object.keys(inputsDatas)[i]) {
        Object.defineProperty(newInputsDatas, e.target.name, { value: e.target.value, writable: true });
        setInputsDatas(newInputsDatas);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // On peut boucler sur le tableau retourné par Object.keys()
    Object.keys(inputsDatas).forEach((key) => {
      console.log(key);
      // formData.append()
    });

    // console.log(formData);
    setShowModal(false);
    // if (modalConfig.modify) {
    //   updateData();
    // } else {
    //   addData();
    // }
  };

  // useEffect(() => {
  //   return () => {
  //     setInputsDatas({});
  //   };
  // }, [showModal]);

  return (
    <aside onClick={(e) => handleClick(e)} className={`modal-overlay ${showModal ? "toggled" : "untoggled"}`}>
      <form className="modal-content" onSubmit={(e) => handleSubmit(e)}>
        <h6>{modalConfig.title}</h6>
        <FormTemplate inputsDatas={inputsDatas} setInputsDatas={setInputsDatas} modify={modalConfig.modify} handleChange={handleChange} />
        <button type="submit">Enregistrer</button>
      </form>
    </aside>
  );
};
export default FormModal;

// Functions used by handleSubmit
// const addData = async () => {
//   try {
//     const res = await axios.post("BACKEND URL", { inputsDatas });
//     console.log(res);
//   } catch (error) {
//     console.log("Error updating data (FormModal.js) : ", error);
//   }
// };
// const updateData = async () => {
//   try {
//     const res = await axios.post("BACKEND URL", { inputsDatas });
//     console.log(res);
//   } catch (error) {
//     console.log("Error updating data (FormModal.js) : ", error);
//   }
// };
