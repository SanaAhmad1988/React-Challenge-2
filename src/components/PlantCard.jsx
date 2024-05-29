import { useState } from 'react';

const PlantCard = ({id, name, price, imageUrl }) => {

  

  let [isButtonPressed, setButtonName] = useState("Add to cart")

  function inCart(){
    setButtonName("In Cart")
  }

  function addtoCart(){
    setButtonName("Add to cart")
  }

  function change() {
    if (isButtonPressed === "Add to cart") isButtonPressed = inCart();
    else isButtonPressed = addtoCart();
}




  return (
    <div className="wrapper">
      <img src={imageUrl} width={200} height={250} alt={name} title={name} />
      <h3 className="name">{name}</h3>
      <p className="price">£{price}</p>
      <button 
      onClick={change}
      className="add-cart-button">
        {isButtonPressed}
      </button>
      
    </div>
  );
}
  export default PlantCard;
