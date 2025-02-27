interface InventoriaProps {
  isInventoryOpened: boolean;
}

const Inventoria = ({ isInventoryOpened }: InventoriaProps) => {
  return (
    <>
      {isInventoryOpened && (
        <ul className="list-group list-group-horizontal flex-wrap">
          <li className="list-group-item list-group-item-info">
            Inventoria est pour le moment vide ⛺
          </li>
        </ul>
      )}
    </>
  );
};

export default Inventoria;
