
type text = string;

interface Props {
  greeting: text;
}

const ItemListContainer: React.FC<Props> = ({greeting}) => {
  return (
    <div className="text-center bg-warning fs-1">
        {greeting}
    </div>
  )
};

export default ItemListContainer;
