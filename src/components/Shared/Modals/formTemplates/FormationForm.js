const FormationForm = () => {
  return (
    <>
      <h6>Ecole</h6>
      <input type="text" placeholder="Lycée Sainte Croix" />
      <h6>Diplome</h6>
      <input type="text" placeholder="Baccalauréat" />
      <h6>Domaine</h6>
      <input type="text" placeholder="Vente" />
      <h6>Résultat obtenu</h6>
      <input type="text" placeholder="Obtenu avec mention" />
      <h6>Ville</h6>
      <input type="text" placeholder="Aix-En-Pervanche" />
      <h6>Début</h6>
      <input type="date" />
      <h6>Fin</h6>
      <input type="date" />
      <h6>Description</h6>
      <textarea placeholder="Racontez nous votre formation" />
    </>
  );
};
export default FormationForm;
