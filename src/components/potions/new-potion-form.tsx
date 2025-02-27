import { useState } from "react";

interface NewPotionFormProps {
  onAddPotionInShop: (potionName: string) => void;
}

const NewPotionForm = ({ onAddPotionInShop }: NewPotionFormProps) => {
  const [potionName, setPotionName] = useState<string>("");
  const [errorName, setErrorName] = useState(false);

  const handleChangePotionName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.value;
    setErrorName(false);
    setPotionName(name);
  };

  const handleSubmitPotionName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (potionName.trim() === "") {
      setErrorName(true);
      return;
    }

    setPotionName("");
    onAddPotionInShop(potionName);
  };

  return (
    <form onSubmit={handleSubmitPotionName}>
      <div className="row">
        <div className="col">
          <label htmlFor="name" className="form-label">
            Nom de la potion
          </label>
          <input
            type="text"
            className={`form-control ${errorName ? "is-invalid" : ""}`}
            id="name"
            onChange={handleChangePotionName}
            value={potionName}
          />
          {errorName && (
            <div className="invalid-feedback">
              Le nom de la potion est requis.
            </div>
          )}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-primary" type="submit">
            Ajouter à la boutique
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewPotionForm;
