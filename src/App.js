import { useState, React } from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";

function App() {
  const [orders, setOrders] = useState([]);

  const items = [
    {
      "id": 1,
      "title": "Стул серый",
      "img": "chair-grey.jpeg",
      "desc": "Lorem ipsum dolor sit amet",
      "category": "chairs",
      "price": "49.99"
    },
    {
      "id": 2,
      "title": "Стол",
      "img": "table.webp",
      "desc": "Lorem ipsum dolor sit amet",
      "category": "tables",
      "price": "69.99"
    },
    {
      "id": 3,
      "title": "Диван",
      "img": "sofa.jpeg",
      "desc": "Lorem ipsum dolor sit amet",
      "category": "sofa",
      "price": "109.99"
    },
    {
      "id": 4,
      "title": "Стул белый",
      "img": "chair-white.jpeg",
      "desc": "Lorem ipsum dolor sit amet",
      "category": "chairs",
      "price": "109.99"
    },
    {
      "id": 5,
      "title": "Светильник настенный",
      "img": "wall-light.jpeg",
      "desc": "Lorem ipsum dolor sit amet",
      "category": "light",
      "price": "39.99"
    }
  ]

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach(elem => {
      if (elem.id === item.id) {
        isInArray = true;
      }
    })
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  }

  const deleteOrder = (id) => {
    setOrders(orders.filter(elem => elem.id !== id));
  }

  const [curentItems, setCurentItems] = useState(items);

  const chooseCategory = (category) => {
    if (category === 'all') {
      setCurentItems(items)
    }else{
      setCurentItems(items.filter(el => el.category === category))
    }
  }

  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setfullItem] = useState({});

  const onShowItem = (item) => {
    setfullItem(item)
    setShowFullItem(!showFullItem);
  }

  return (
    <div className='wrapper'>
      <Header orders={orders} onDelete={deleteOrder}/>
      <Categories chooseCategory={chooseCategory}/>
      <Items items={curentItems} onAdd={addToOrder} onShowItem={onShowItem}/>
      {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrder} onShowItem={onShowItem}/>}
      <Footer />
    </div>
  );
}

export default App;
