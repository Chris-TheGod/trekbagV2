import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleSetItemsToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <div className='sidebar'>
      <AddItemForm onAddItem={handleAddItem} />

      <ButtonGroup
        handleSetItemsToInitial={handleSetItemsToInitial}
        handleRemoveAllItems={handleRemoveAllItems}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
      />
    </div>
  );
}
