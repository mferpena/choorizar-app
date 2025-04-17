import HeaderComponent from "./components/organisms/HeaderComponent";
import FooterComponent from "./components/organisms/FooterComponent";
import { BrowserRouter } from "react-router-dom";
import Router from "./core/config/router/Router";
import AdultWarning from "./components/molecules/AdultWarning";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col ">
          <AdultWarning />
          <HeaderComponent />
          <div className="flex-1">
            <Router />
          </div>
          <FooterComponent />
        </div>
      </BrowserRouter>
    </>
  );
}
