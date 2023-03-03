import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Head from './project/Head';
import Shop from './project/About';
import { Provider } from "react-redux";
import store from './redux/store';
import HomePage from './project/HomePage';
import Cart from './project/Cart';
import ShowMaps from './project/ShowMaps'
import ShowAccessories from './project/ShowAccessories'
import ShowNapking from './project/ShowNapking'
import Payment from './project/Payment';
import WishList from './project/WishList';

function App() {
  document.documentElement.dir = "rtl";
  document.title = "פורשים עיצוב";
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Head></Head>
          <Routes>
            <Route exact path="/" element={<HomePage></HomePage>} />
            <Route exact path="/HomePage" element={<HomePage></HomePage>} />
            <Route exact path="/Shop" element={<Shop></Shop>} />
            <Route exact path="/Cart" element={<Cart></Cart>} />
            <Route exact path="/ShowMaps" element={<ShowMaps></ShowMaps>} />
            <Route exact path="/ShowNapking" element={<ShowNapking></ShowNapking>} />
            <Route exact path="/ShowAccessories" element={<ShowAccessories></ShowAccessories>} />
            <Route exact path="/PayMent/:sum" element={<Payment></Payment>} />
            <Route exact path="/WishList" element={<WishList></WishList>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div >
  );
}

export default App;

// https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
