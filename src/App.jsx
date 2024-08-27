import { useEffect, useState } from 'react';
import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Sidebar from './components/Sidebar';
import { initialItems } from './lib/constants';

function App() {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem('items')) || initialItems;
  });

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleSetItemsToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header
          numberOfItemsPacked={items.filter((item) => item.packed).length}
          totalNumberOfItems={items.length}
        />

        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />

        <Sidebar
          handleRemoveAllItems={handleRemoveAllItems}
          handleAddItem={handleAddItem}
          handleSetItemsToInitial={handleSetItemsToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
