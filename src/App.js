import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/Meal";
import Container from "./Component/UI/Container";
import Cart from "./Component/Cart/Cart";
import { useState } from "react";
import ContextProvider from "./Component/store/CartProvider";

function App() {
  const[isShown,setIsShown]=useState(false);

  const modalShow=()=>{
    setIsShown(true);
  }
  const modalHide=()=>{
    setIsShown(false);
  }
    return (
      <ContextProvider>
        <Container>
          {isShown && <Cart onHide={modalHide}/>}
          <Header onShow={modalShow}/>
         <main>
            <Meal/>
         </main>
        </Container>
      </ContextProvider>
    );
}

export default App;