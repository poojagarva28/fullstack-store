import React from "react";

const MenuItems = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-xl transition-all">
      <div className="flex justify-center">
        <img src="/pizza.png" alt="pizza" width={200} />
      </div>
      <h4 className="font-semibold my-2">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsumasldfkajsdlfkjasdfl askdlfj aksdjfaksdjfaksdjf
      </p>
      <button className="bg-primary text-white rounded-full px-6 py-2 mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItems;
