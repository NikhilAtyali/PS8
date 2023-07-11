import Products from "./Practice-Set-5/Products";
import UserProfile from "./Practice-Set-5/UserProfile";
import { UserFeed } from "./Practice-Set-5/UserFeed";
import Chats from "./Practice-Set-5/Chats";
import Comments from "./Practice-Set-5/Comments";
import RenderButtons from "./Practice-set-6/RenderButtons";
import Todos from "./Practice-set-6/Todos";
import HabitTracker from "./Practice-set-6/HabitTracker";
import PlayList from "./Practice-set-6/PlayList";
import Archives from "./Practice-set-6/Archives";
import Projects from "./Practice-set-6/Projects";
import UserProfile6 from "./Practice-set-6/userProfile";
import Video from "./Practice-set-6/Video";
import Follow from "./Practice-set-6/Follow";
import Weather from "./Practice-Set-7/Weather";
import Movies from "./Practice-Set-7/Movies";
import Company from "./Practice-Set-7/Company";
import RandomQuotes from "./Practice-Set-7/RandomQuotes";
import Products7 from "./Practice-Set-7/Products";
import { StrictMode, createContext } from "react";
import Sorting from "./Practice-Set-7/Sorting";
import { NavLink, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Practice-Set-8/cartContext";
import {WishListProvider} from "./Practice-Set-8/WishListContext"
import Home from "./Practice-Set-8/Pages/Home"
import ProductListingPage from "./Practice-Set-8/Pages/ProductListingPage";
import Cart from "./Practice-Set-8/Pages/Cart"
import SingleProductPage from "./Practice-Set-8/Pages/SingleProductPage";
import WishList from "./Practice-Set-8/Pages/wishList";
import ErrorPage from "./Practice-Set-8/Pages/ErrorPage";

Comments;
const App = () => {
  const PracticeSet5 = () => {
    return (
      <>
        <Products />
        <UserProfile
          heading={"User Profile"}
          height={"200px"}
          width={"300px"}
        />
        <UserFeed />
        <Chats />
        <Comments />
      </>
    );
  };

  const PracticeSet6 = () => {
    return (
      <>
        {/* <RenderButtons /> */}
        {/* <Todos /> */}
        {/* <HabitTracker /> */}
        {/* <PlayList /> */}
        {/* <Archives /> */}
        {/* <Projects /> */}
        {/* <UserProfile6 /> */}
        {/* <Video /> */}
        {/* <Follow /> */}
      </>
    );
  };

  const PracticeSet7 = () => {
    return (
      <>
        {/* <Weather /> */}
        {/* <Movies /> */}
        {/* <Company /> */}
        {/* <RandomQuotes /> */}
        {/* <Products7   /> */}
        <Sorting />
      </>
    );
  };

  const PracticeSet8 = () => {
    return (
      <>
    <CartProvider>
      <WishListProvider>
      <StrictMode>
      <nav>
        <NavLink to="/">Home || </NavLink>
        <NavLink to="/product-listing">Product Listing || </NavLink>
        <NavLink to="/cart">Cart || </NavLink>
        <NavLink to="/wishlist">WishListttttt</NavLink>
      </nav>

      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/product-listing" element={<ProductListingPage/>} />
        <Route  path="/cart" element={<Cart/>} />
        <Route  path="/wishlist" element={<WishList/>} />
        <Route  path="/singleproductpage/:id" element={<SingleProductPage/>} />
      </Routes>
      </StrictMode>
      </WishListProvider>
      </CartProvider>
      </>
    );
  };
  return (
    <>
      
      {/* <PracticeSet5 /> */}
      {/* <PracticeSet6 /> */}
        {/* <PracticeSet7 /> */}
        <PracticeSet8 />
      
    </>
  );
};

export default App;
