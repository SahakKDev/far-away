import Actions from "./components/Actions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemForm from "./components/ItemForm";
import Items from "./components/Items";

function App() {
  return (
    <div className="app">
      <Header />
      <ItemForm />
      <main>
        <Items />

        <Actions />
      
      </main>

      <Footer>Start adding some items to your packing list 🚀</Footer>
    </div>
  );
}

export default App;
