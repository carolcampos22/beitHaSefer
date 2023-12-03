import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "../baseLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
