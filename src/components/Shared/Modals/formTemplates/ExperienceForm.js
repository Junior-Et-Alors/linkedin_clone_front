const ExperienceForm = () => {
  return (
    <>
      <h6>Poste</h6>
      <input type="text" placeholder="Carreleur pro..." />
      <h6>Type de poste</h6>
      <input type="text" placeholder="CDD/CDI" />
      <h6>Nom de la structure</h6>
      <input type="text" placeholder="Carrefour" />
      <h6>Ville</h6>
      <input type="text" placeholder="Aix-En-Pervanche" />
      <h6>Début</h6>
      <input type="date" />
      <h6>Fin</h6>
      <input type="date" />
      <h6>Description</h6>
      <input type="text" placeholder="Racontez nous votre expérience" />
    </>
  );
};
export default ExperienceForm;
