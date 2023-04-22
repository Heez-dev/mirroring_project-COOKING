import { Routes, Route } from "react-router-dom";

import "./css/reset.css";
import "./css/style.css";
import "./css/sign.css";
import "./css/recipe.css";

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
import Town from "./pages/Town";
import Class from "./pages/Class";
import User from "./pages/User";
import Mypage_MyRecipe from "./pages/Mypage_MyRecipe";
import Mypage_RecipeBook from "./pages/Mypage_RecipeBook";

import { DataProvider } from "./context/DataContext";
import { RecipeProvider } from "./context/RecipeContext";



function App() {
  return (
    <div className="App">
      <DataProvider>
        <RecipeProvider>
          <Routes>
            

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup/agreement" element={<SignUpAgreement />} />
            <Route path="/signup/form" element={<SignUpForm />} />


            <Route element={<Layout />}>
              <Route path="/" element={<Main />} />
              
              <Route path="/recipe" element={<Recipe/>}>
                <Route path="/recipe/all" element={<RecipeAll/>}/>
                <Route path="/recipe/main" element={<RecipeMain/>}/>
                <Route path="/recipe/side" element={<RecipeSide/>}/>
                <Route path="/recipe/soup" element={<RecipeSoup/>}/>
                <Route path="/recipe/dessert" element={<RecipeDessert/>}/>
              </Route>
              <Route path="/recipe/:recipeid/:category/:title" element={<RecipeView/>}/>

              <Route path="/town" element={<Town />} />
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
