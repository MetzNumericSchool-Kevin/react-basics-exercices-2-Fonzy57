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
import NewPotionForm from "./components/potions/new-potion-form";

// STYLE
import "./App.css";

function App() {
  const [isInventoryOpened, setIsInventoryOpened] = useState<boolean>(false);
  const [potionInInventory, setPotionInInventory] = useState<string[]>([]);
  const [potionInShop, setPotionInShop] = useState<string[]>(potion);

  const handleCLickInventoria = () => {
    setIsInventoryOpened(!isInventoryOpened);
  };

  const handleAddToInventoria = (potionName: string) => {
    setPotionInInventory([...potionInInventory, potionName]);
  };

  const handleAddToShop = (potionName: string) => {
    setPotionInShop([...potionInShop, potionName]);
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
            potions={potionInInventory}
          />
        </div>
      </Section>

      <Section id="exercice3">
        <PotionShop title="Boutique de potion">
          {potionInShop.map((p, index) => {
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
        <NewPotionForm onAddPotionInShop={handleAddToShop} />
      </Section>
    </div>
  );
}

export default App;
