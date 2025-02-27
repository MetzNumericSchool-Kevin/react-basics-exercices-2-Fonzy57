interface InventoriaProps {
  isInventoryOpened: boolean;
  potions: string[];
}

const Inventoria = ({ isInventoryOpened, potions }: InventoriaProps) => {
  return (
    <>
      {isInventoryOpened && (
        <ul className="list-group list-group-horizontal flex-wrap">
          {potions.length > 0 &&
            potions.map((potion, index) => {
              return (
                <li
                  key={index}
                  className="list-group-item list-group-item-info"
                >
                  {potion}
                </li>
              );
            })}
          {potions.length <= 0 && (
            <li className="list-group-item list-group-item-info">
              Inventoria est pour le moment vide ⛺
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default Inventoria;
