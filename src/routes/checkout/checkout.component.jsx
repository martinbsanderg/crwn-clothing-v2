import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, removeItemFromCart, reduceItemInCart, addItemToCart } =
    useContext(CartContext);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quntity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.imageUrl} alt={item.name}></img>
              </td>
              <td>{item.name}</td>
              
              <td>
                <button type="button" onClick={() => reduceItemInCart(item)}>
                  &lt;
                </button>
                {item.quantity}
                <button type="button" onClick={() => addItemToCart(item)}>
                  &gt;
                </button>
              </td>
              <td>{item.price} </td>
              <td>
                {" "}
                <button
                  type="button"
                  onClick={() => {
                    removeItemFromCart(item);
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Checkout;
