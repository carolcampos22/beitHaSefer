import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "../baseLayout";
import Home from "../components/pages/home/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
