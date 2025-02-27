// REACT
import { useState } from "react";

// DATA
import potion from "./data/potion";

// COMPONENTS
import Section from "./components/section/section";
import BienvenueAventurier from "./components/bienvenue/bienvenue-aventurier";
import Inventoria from "./components/inventoria/inventoria";
import PotionShop from "./components/potions/potion-shop";
import Potion from "./components/potions/potion";

// STYLE
import "./App.css";

function App() {
  const [isInventoryOpened, setIsInventoryOpened] = useState<boolean>(false);
  const [potionInEnventory, setPotionInEnventory] = useState<string[]>([]);

  const handleCLickInventoria = () => {
    setIsInventoryOpened(!isInventoryOpened);
  };

  const handleAddToInventoria = (potionName: string) => {
    setPotionInEnventory([...potionInEnventory, potionName]);
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
          <Inventoria
            isInventoryOpened={isInventoryOpened}
            potions={potionInEnventory}
          />
        </div>
      </Section>

      <Section id="exercice3">
        <PotionShop title="Boutique de potion">
          {potion.map((p, index) => {
            return (
              <Potion
                key={index}
                name={p}
                onAddToInventoria={handleAddToInventoria}
              />
            );
          })}
        </PotionShop>
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
