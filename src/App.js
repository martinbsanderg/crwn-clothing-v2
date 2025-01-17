import { Routes, Route, } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";


const Store = () => {
  return <h1>Jeg liker fisk </h1>;
};


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index  element={<Home />} />
        <Route path="shop" element={<Store />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
