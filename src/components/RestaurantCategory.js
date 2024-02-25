import { useState } from 'react';
import ItemList from '../components/itemList';

const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
  index,
  dummy,
}) => {
  /* const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  }; */

  const handleClick = () => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      {/* Header */}
      <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
