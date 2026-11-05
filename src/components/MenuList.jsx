import MenuItemCard from './MenuItemCard.jsx'

function MenuList({ items }) {
  if (!items || items.length === 0) {
    return <p className="muted">No items on this menu yet.</p>
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default MenuList











/* nota exam
const drinks = [
  { id: 101, name: "Teh Tarik", price: 3 },
  { id: 102, name: "Milo Ais", price: 4 }
];

{drinks.map((drink) =>(
  <FoodItem key={drink.id} name={drink.name} price={drink.price} />
))}

// Pattern:
array.map((item) => (
  // return JSX here
))



function FoodItem(items){
  const [items, setItems] = useState([
    { id: 1, name: "Nasi Lemak", price: 5 },
    { id: 2, name: "Mee Goreng", price: 4 },
    { id: 3, name: "Teh O Ais", price: 2 }
  ])

  const total = items.length

  return(
    <div>
      <h2>Total item: {total}</h2>

      {items.map((food) => (
        <FoodItem key={food.id} name={food.name} price={food.price}/>
      ))}
    </div>
  )
}

const [price, setPrice] = useState("")

<input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

function handleSubmit(e) {
  e.preventDefault(); // 🛑 Stop the page from reloading!

  // Now create the new object
  const newItem = {
    id: Date.now(), // 🔑 Easy way to get a unique number
    name: itemName,
    price: Number(price)
  };

  // ...pass it up or save it
}

//And connect it to the <form> tag:
<form onSubmit={handleSubmit}>
  {/* inputs go here }
  <button type="submit">Add Food</button>
</form>

*/