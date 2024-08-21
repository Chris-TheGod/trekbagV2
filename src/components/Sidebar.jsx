import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleSetItemsToInitial,
}) {
  return (
    <div className='sidebar'>
      <AddItemForm onAddItem={handleAddItem} />

      <ButtonGroup
        handleSetItemsToInitial={handleSetItemsToInitial}
        handleRemoveAllItems={handleRemoveAllItems}
      />
    </div>
  );
}
