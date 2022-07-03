import './App.css';
import NavBar from './components/navBar/NavBar';
import Carcomp from './components/CartWidget/carcomp';
import Itemlistcontainer from './components/ItemListContainer/itemlistcontainer'
import ItemList from './components/ItemListContainer/ItemList';



function App() {
  return (
    <>
    <NavBar />
    <Carcomp />
    <Itemlistcontainer />
    <ItemList />
    </>
  );
}



export default App;
