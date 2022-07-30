const ProjectForm = () => {
  return (
    <>
      <h6>Nom</h6>
      <input type="text" placeholder="Pinkedin" />
      <h6>Début</h6>
      <input type="date" />
      <h6>Fin</h6>
      <input type="date" />
      <h6>Url du projet</h6>
      <input type="text" placeholder="https://monsuperprojet.com" />
      <h6>Description</h6>
      <textarea placeholder="Racontez nous votre projet" />
    </>
  );
};
export default ProjectForm;
