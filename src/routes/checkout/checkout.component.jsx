import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const dummyCart = [
  {
    id: "3",
    imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    name: "Brown Cowboy",
    price: 35,
    quantity: 1,
  }, {
    id: "3",
    imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    name: "Brown Cowboy",
    price: 35,
    quantity: 2,
  }, {
    id: "3",
    imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    name: "Brown Cowboy",
    price: 35,
    quantity: 3,
  },
];

  
const Checkout = () => {
  const { cartItems, removeItemFromCart} = useContext(CartContext);
  
  return (
    <>
      <table>
        <tr>
          <th>Product</th>
          <th>Description</th>
          <th>Quntity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.imageUrl} alt={item.name}></img>
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td > <button type="button" onClick={()=>{removeItemFromCart(item)}}>X</button></td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Checkout;
