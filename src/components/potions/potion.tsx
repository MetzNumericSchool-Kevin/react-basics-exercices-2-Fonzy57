interface PotionProps {
  title: string;
}

const Potion = ({ title }: PotionProps) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="card col border text-bg-dark bg-dark">
        <div className="card-body">{title}</div>
        <div className="card-actions">
          <button>Ajouter à Inventoria</button>
        </div>
      </div>
    </div>
  );
};

export default Potion;
