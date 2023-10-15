import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  return (
    <div>
      {
        /*render a MenuItem component to each element of the props array*/

        foodItems.map((element) => (
          <MenuItem
            itemName={element.itemName}
            description={element.description}
            foodImage={element.foodImage}
            price={element.price}
            isFavorite={element.isFavorite}
          />
        ))
      }
    </div>
  );
}

export default MenuList;
