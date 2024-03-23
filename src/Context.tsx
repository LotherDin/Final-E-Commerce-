import { ReactNode, createContext, useEffect, useState } from "react";
import { Product, TContext, Table, User } from "./declaration";

export const AppContext = createContext<TContext>({
  products: [],
  users: {},
  cart: [],
  paid: false,
  login: () => {},
  logout: () => {},
  addToCart: () => {},
  removeFromToCart: () => {},
  addProduct: () => {},
  removeProduct: () => {},
  setAdmin: () => {},
  checkout: () => {},
  getTotalAvailableProduct: () => 0,
  onCheckoutSuccess: () => {},
  getTotalProductInCart: () => 0,
});

interface Props {
  children: ReactNode;
}

export function ContextProvider({ children }: Props) {
  const [products, setProducts] = useState<Array<Product>>([]);
  let [users, setUsers] = useState<Table<User>>({});
  const [cart, setCart] = useState<Array<Product>>([]);
  const [paid, setPaid] = useState<boolean>(false);
  const [username, setUsername] = useState(localStorage.email);

  if (!!localStorage.users) users = JSON.parse(localStorage.users);

  async function getProducts() {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
  }

  function login(
    email: User["email"],
    name: User["name"],
    password: User["password"],
    admin: User["admin"]
  ) {
    if (!users[email]) {
      const newUser = {
        email: email,
        name: name,
        password: password,
        admin: admin,
        first: true,
      };
      //setUsers(newUser[email]);
      users[email] = newUser;
    } else users[email].first = false;

    localStorage.users = JSON.stringify(users);

    setUsername(email);

    //setUsers([...users, newUser]);
    localStorage.setItem("email", users[email].email);
  }

  function logout() {
    setUsername("");
    localStorage.removeItem("email");
  }

  useEffect(() => {
    getProducts();
  }, []);
  function getTotalProductInCart(cart: Array<Product>, productId: number) {
    const idFind = cart.filter((productCart) => productCart.id === productId);
    const total = idFind.length;
    console.log(total);
    return total;
  }

  function addToCart(productId: number) {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      const updatedCart = [...cart, productToAdd];

      setCart(updatedCart);
      console.log(updatedCart);
      getTotalProductInCart(updatedCart, productId);
    }
  }

  return (
    <AppContext.Provider
      value={{
        products,
        users,
        cart,
        paid,
        login,
        logout,
        addToCart,
        removeFromToCart: () => {},
        addProduct: () => {},
        removeProduct: () => {},
        setAdmin: () => {},
        checkout: () => {},
        getTotalAvailableProduct: () => 0,
        onCheckoutSuccess: () => {},
        getTotalProductInCart: () => 0,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
