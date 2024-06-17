// eslint-disable-next-line no-unused-vars
import "./index.css";
import Header from "./components/Header";
import Fruit from "./components/Fruit";

const fruits = [
  {
    id: 1,
    name: "Buah Alpukat",
    price: 15000,
    quantity: 10,
    category: "Tropis",
    description: "Buah alpukat segar dan matang.",
    photo: "/image/alpukat.jpg"
  },
  {
    id: 2,
    name: "Buah Manggis",
    price: 20000,
    quantity: 15,
    category: "Tropis",
    description: "Buah manggis manis dan segar.",
    photo: "/image/manggis.jpg"
  },
  {
    id: 3,
    name: "Buah Mangga",
    price: 12000,
    quantity: 25,
    category: "Tropis",
    description: "Buah mangga enak dan murah.",
    photo: "/image/mangga.jpg"
  },
  {
    id: 4,
    name: "Buah Pisang",
    price: 14000,
    quantity: 18,
    category: "Tropis",
    description: "Buah pisang murah dan meriah.",
    photo: "/image/pisang.jpg"
  }
];

function App() {
  return (
    <div>
      <Header />
      <Fruit fruits={fruits} />
    </div>
  );
}

export default App;
