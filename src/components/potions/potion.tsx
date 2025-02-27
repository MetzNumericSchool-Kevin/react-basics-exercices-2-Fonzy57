interface PotionProps {
  name: string;
  onAddToInventoria: (name: string) => void;
}

const Potion = ({ name, onAddToInventoria }: PotionProps) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="card col border text-bg-dark bg-dark">
        <div className="card-body">{name}</div>
        <div className="card-actions">
          <button onClick={() => onAddToInventoria(name)}>
            Ajouter à Inventoria
          </button>
        </div>
      </div>
    </div>
  );
};

export default Potion;
