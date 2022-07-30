/* Page de profil */
/* Trouver un moyen de conditionner pour récupérer les infos correspondantes */

/* On va l'utiliser pour le profil utilisateur mais aussi pour les autres profils */
import { useEffect, useState } from "react";
import axios from "axios";
import user from "../assets/placeholders/users/testUser";
import FormModal from "../components/Shared/Modals/FormModal";
import DescriptionForm from "../components/Shared/Modals/formTemplates/DescriptionForm";
import ExperienceForm from "../components/Shared/Modals/formTemplates/ExperienceForm";
import FormationForm from "../components/Shared/Modals/formTemplates/FormationForm";
import ProjectForm from "../components/Shared/Modals/formTemplates/ProjectForm";
import PictureForm from "../components/Shared/Modals/formTemplates/PictureForm";
import PostForm from "../components/Shared/Modals/formTemplates/PostForm";
const Profile = () => {
  const [toggleModProfilePicture, setToggleModProfilePicture] = useState(false);
  const [toggleModBannerPicture, setToggleModBannerPicture] = useState(false);

  const [toggleModDescription, setToggleModDescription] = useState(false);
  const [toggleAddPost, setToggleAddPost] = useState(false);

  const [toggleAddXp, setToggleAddXp] = useState(false);
  const [toggleModXp, setToggleModXp] = useState(false);

  const [toggleAddFormation, setToggleAddFormation] = useState(false);
  const [toggleModFormation, setToggleModFormation] = useState(false);

  const [toggleAddProject, setToggleAddProject] = useState(false);
  const [toggleModProject, setToggleModProject] = useState(false);
  return (
    <>
      <section>
        <div className="banner-container">
          <img src={user.profileBanner} alt="Profile banner" />
          <button onClick={() => setToggleModBannerPicture(true)}>mod banner pic</button>
          <button onClick={() => setToggleModProfilePicture(true)}>
            <img src={user.profilePicture} alt="Profile" />
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
            <p>Ancre vers l'expérience{/* Correspondant au job actuel */}</p>
            <p>Ancre vers la formation</p>
          </div>
        </div>
      </section>
      <section>
        <header>
          <h3>Infos</h3>
          <button onClick={() => setToggleModDescription(true)}>mod description</button>
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
            <button onClick={() => setToggleAddPost(true)}>Post</button>
          </div>
        </header>
        <ul>
          {user.posts.map((post) => (
            <li>
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
            <button onClick={() => setToggleAddXp(true)}>add xp</button>
          </div>
        </header>
        <ul>
          {user.experiences.map((xp) => (
            <li>
              <p>{xp.name}</p>
              <p>{xp.structure}</p>
              <button onClick={() => setToggleModXp(true)}>modify xp</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <header>
          <div>
            <h3>Formation</h3>
            <button onClick={() => setToggleAddFormation(true)}>add formation</button>
          </div>
        </header>
        <ul>
          {user.formations.map((formation) => (
            <li>
              <p>{formation.school}</p>
              <p>{formation.domain}</p>
              <button onClick={() => setToggleModFormation(true)}>modify formation</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <header>
          <div>
            <h3>Projets</h3>
            <button onClick={() => setToggleAddProject(true)}>add project</button>
          </div>
        </header>
        <ul>
          {user.projects.map((project) => (
            <li>
              <p>{project.name}</p>
              <p>{project.description}</p>
              <button onClick={() => setToggleModProject(true)}>modify project</button>
            </li>
          ))}
        </ul>
      </section>

      <FormModal formTemplate={PictureForm} modalTitle={"Modifier la photo de profil"} userAction={"modify"} toggle={toggleModProfilePicture} setToggle={setToggleModProfilePicture} />
      <FormModal formTemplate={PictureForm} modalTitle={"Modifier la photo de couverture"} userAction={"modify"} toggle={toggleModBannerPicture} setToggle={setToggleModBannerPicture} />

      <FormModal formTemplate={DescriptionForm} modalTitle={"Votre description"} userAction={"modify"} toggle={toggleModDescription} setToggle={setToggleModDescription} />

      <FormModal formTemplate={PostForm} modalTitle={"Publier un post"} userAction={"add"} toggle={toggleAddPost} setToggle={setToggleAddPost} />

      <FormModal formTemplate={ExperienceForm} modalTitle={"Ajouter une expérience"} userAction={"add"} toggle={toggleAddXp} setToggle={setToggleAddXp} />
      <FormModal formTemplate={ExperienceForm} modalTitle={"Modifier l'expérience"} userAction={"modify"} toggle={toggleModXp} setToggle={setToggleModXp} />

      <FormModal formTemplate={FormationForm} modalTitle={"Ajouter une formation"} userAction={"add"} toggle={toggleAddFormation} setToggle={setToggleAddFormation} />
      <FormModal formTemplate={FormationForm} modalTitle={"Modifier la formation"} userAction={"modify"} toggle={toggleModFormation} setToggle={setToggleModFormation} />

      <FormModal formTemplate={ProjectForm} modalTitle={"Ajouter un projet"} userAction={"add"} toggle={toggleAddProject} setToggle={setToggleAddProject} />
      <FormModal formTemplate={ProjectForm} modalTitle={"Modifier le projet"} userAction={"modify"} toggle={toggleModProject} setToggle={setToggleModProject} />
    </>
  );
};

export default Profile;
