/* Page de profil */
/* Trouver un moyen de conditionner pour récupérer les infos correspondantes */

/* On va l'utiliser pour le profil utilisateur mais aussi pour les autres profils */

/* TODO :

Passer l'ID et les valeurs de l'objet correspondant en cas de modification.
Implémenter la communication avec le back
Récupérer l'user dans un contexte global 

*/
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import user from "../assets/placeholders/users/testUser";
import FormModal from "../components/Shared/Modals/FormModal";
import DescriptionForm from "../components/Shared/Modals/formTemplates/DescriptionForm";
import ExperienceForm from "../components/Shared/Modals/formTemplates/ExperienceForm";
import FormationForm from "../components/Shared/Modals/formTemplates/FormationForm";
import ProjectForm from "../components/Shared/Modals/formTemplates/ProjectForm";
import PictureForm from "../components/Shared/Modals/formTemplates/PictureForm";
import PostForm from "../components/Shared/Modals/formTemplates/PostForm";
import { ModalContext } from "../App";

const Profile = () => {
  const { setModalConfig, setShowModal } = useContext(ModalContext);

  const mountModal = (config) => {
    setModalConfig(config);
    setShowModal(true);
  };

  return (
    <>
      <section>
        <div className="banner-container">
          <img src={user.profileBanner} alt="Profile banner" />
          <button onClick={() => mountModal({ title: "Modifier la banière", template: PictureForm, action: "mod" })}>mod pbanner</button>

          <button onClick={() => mountModal({ title: "Modifier la photo de profil", template: PictureForm, action: "mod" })}>
            <img src={user.profilePicture} alt="Profile avatar" />
          </button>
        </div>

        <div className="user-info-container">
          <div className="left-container">
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>
              {user.actualJob} chez {user.actualStructure}
            </p>
            <p>NB de relations</p>
          </div>
          <div className="right-container">
            <p>Ancre vers l'expérience</p>
            <p>Ancre vers la formation</p>
          </div>
        </div>
      </section>
      <section>
        <header>
          <h3>Infos</h3>
          <button onClick={() => mountModal({ title: "Modifier la description", template: DescriptionForm, action: "mod" })}>mod desc</button>
        </header>
        <p>{user.description}</p>
      </section>

      <section>
        <header>
          <div>
            <h3>Activité</h3>
            <p>{user.followers.length} abonnés</p>
          </div>
          <div>
            <button onClick={() => mountModal({ title: "Créer un post", template: PostForm, action: "add" })}>post</button>
          </div>
        </header>
        <ul>
          {user.posts.map((post, i) => (
            <li key={i}>
              <p>{post.content}</p>
              <p>{post.postedAt}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <header>
          <div>
            <h3>Expérience</h3>
            <button onClick={() => mountModal({ title: "Ajouter une expérience", template: ExperienceForm, action: "add" })}>add xp</button>
          </div>
        </header>
        <ul>
          {user.experiences.map((xp, i) => (
            <li key={i}>
              <p>{xp.name}</p>
              <p>{xp.structure}</p>
              <button onClick={() => mountModal({ title: "Modifier l'expérience", template: ExperienceForm, action: "mod" })}>mod xp</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <header>
          <div>
            <h3>Formation</h3>
            <button onClick={() => mountModal({ title: "Ajouter une formation", template: FormationForm, action: "add" })}>add formation</button>
          </div>
        </header>
        <ul>
          {user.formations.map((formation, i) => (
            <li key={i}>
              <p>{formation.school}</p>
              <p>{formation.domain}</p>
              <button onClick={() => mountModal({ title: "Modifier une formation", template: FormationForm, action: "mod" })}>mod formation</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <header>
          <div>
            <h3>Projets</h3>
            <button onClick={() => mountModal({ title: "Ajouter un projet", template: ProjectForm, action: "add" })}>add project</button>
          </div>
        </header>
        <ul>
          {user.projects.map((project, i) => (
            <li key={i}>
              <p>{project.name}</p>
              <p>{project.description}</p>
              <button onClick={() => mountModal({ title: "Modifier le projet", template: ProjectForm, action: "mod" })}>mod project</button>
            </li>
          ))}
        </ul>
      </section>
      <FormModal />
    </>
  );
};

export default Profile;
