import { Routes, Route } from "react-router-dom";

import "./css/reset.css";
import "./css/style.css";
import "./css/main.css"
import "./css/sign.css";
import "./css/recipe.css";
import "./css/town.css"
import "./css/class.css"

import SignIn from "./pages/SignIn";
import SignUpAgreement from "./pages/SignUpAgreement";
import SignUpForm from "./pages/SignUpForm";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Recipe from "./pages/Recipe";
import RecipeAll from "./pages/RecipeAll";
import RecipeMain from "./pages/RecipeMain";
import RecipeSide from "./pages/RecipeSide";
import RecipeSoup from "./pages/RecipeSoup";
import RecipeDessert from "./pages/RecipeDessert";
import RecipeView from "./pages/RecipeView";
import RecipeWriteForm from "./pages/RecipeWriteForm";
import RecipeEditForm from "./pages/RecipeEditForm";
import Town from "./pages/Town";
import TownMart from "./pages/TownMart";
import TownMarket from "./pages/TownMarket";
import TownShop from "./pages/TownShop";
import TownClass from "./pages/TownClass";
import Class from "./pages/Class";
import User from "./pages/User";
import Mypage_MyRecipe from "./pages/Mypage_MyRecipe";
import Mypage_RecipeBook from "./pages/Mypage_RecipeBook";

import { DataProvider } from "./context/DataContext";
import { RecipeProvider } from "./context/RecipeContext";
import FindAddrComp from "./components/FindAddrComp";



function App() {
  return (
    <div className="App">
      <DataProvider>
        <RecipeProvider>
          <Routes>
            <Route path="/findaddr" element={<FindAddrComp/>}/>

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup/agreement" element={<SignUpAgreement />} />
            <Route path="/signup/form" element={<SignUpForm />} />


            <Route element={<Layout />}>
              <Route path="/" element={<Main />} />
              <Route path="/recipe/write" element={<RecipeWriteForm/>}/>
              
              <Route path="/recipe" element={<Recipe/>}>
                <Route path="/recipe/all" element={<RecipeAll/>}/>
                <Route path="/recipe/main" element={<RecipeMain/>}/>
                <Route path="/recipe/side" element={<RecipeSide/>}/>
                <Route path="/recipe/soup" element={<RecipeSoup/>}/>
                <Route path="/recipe/dessert" element={<RecipeDessert/>}/>
              </Route>
              <Route path="/recipe/:recipeid/:category/:title" element={<RecipeView/>}/>
              <Route path="/recipe/:recipeid/:category/:title/edit" element={<RecipeEditForm/>}/>

              <Route path="/town" element={<Town />}>
                <Route path="/town/mart" element={<TownMart/>}/>
                <Route path="/town/market" element={<TownMarket/>}/>
                <Route path="/town/shop" element={<TownShop/>}/>
                <Route path="/town/class" element={<TownClass/>}/>
              </Route>
              <Route path="/class" element={<Class />} />
              <Route path="/mypage/:userID" element={<User/>}/>
              <Route path="/mypage/myrecipe/:userID" element={<Mypage_MyRecipe />} />
              <Route path="/mypage/recipebook/:userID" element={<Mypage_RecipeBook />} />
            </Route>
          </Routes>
        </RecipeProvider>
      </DataProvider>
    </div>
  );
}

export default App;
