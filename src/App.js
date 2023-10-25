import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Container } from "react-bootstrap";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Home/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
