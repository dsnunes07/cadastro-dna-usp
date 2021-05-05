import "./App.css";
import BondForm from "./components/associatesForm/bondForm";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="sm" className="form-box">
      <BondForm />
    </Container>
  );
}

export default App;
