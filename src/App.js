import "./styles/global.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Sidebar />
      <MainContent />
    </div>
    <Footer />
  </div>
);

export default App;
