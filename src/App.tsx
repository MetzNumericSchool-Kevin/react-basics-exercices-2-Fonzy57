import "./App.css";

// COMPONENTS
import Section from "./components/section/section";
import BienvenueAventurier from "./components/bienvenue/bienvenue-aventurier";
import { useState } from "react";
import Inventoria from "./components/inventoria/inventoria";

function App() {
  const [isInventoryOpened, setIsInventoryOpened] = useState<boolean>(false);

  const handleCLickInventoria = () => {
    setIsInventoryOpened(!isInventoryOpened);
  };

  return (
    <div className="container p-5 mb-4 bg-body-tertiary rounded-3">
      <Section id="exercice1">
        <BienvenueAventurier title="Boutique d'Archibald le Sorcier (bis repetita) 🧙‍♂️">
          <p>
            Bienvenue <b>Aventurier</b>, ici vous pouvez acheter diverses
            <u>potions magiques</u> pour vos aventures !
          </p>
        </BienvenueAventurier>
      </Section>

      <Section id="exercice2">
        <h2>Inventoria</h2>

        <button className="btn btn-primary" onClick={handleCLickInventoria}>
          {isInventoryOpened ? "Fermer" : "Ouvrir"} Inventoria
        </button>

        <div className="row mt-5">
          <Inventoria isInventoryOpened={isInventoryOpened} />
        </div>
      </Section>

      <Section id="exercice3">
        <h2 className="mb-5">Boutique de potion</h2>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="card col border text-bg-dark bg-dark">
            <div className="card-body">Blabla</div>
            <div className="card-actions">
              <button>Ajouter à Inventoria</button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="exercice4">
        <h2 className="mb-5">Ajout de potions</h2>

        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="name">Nom de la potion</label>
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary" type="submit">
                Ajouter à la boutique
              </button>
            </div>
          </div>
        </form>
      </Section>
    </div>
  );
}

export default App;
