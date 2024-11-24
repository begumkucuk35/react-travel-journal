import Header from "./components/Header";
import Cards from "./components/Cards";
import myData from "./data";
import "./App.css";

function App() {
  const journalData = myData.map((data) => {
    return (
      <Cards
      key={data.id}
        {...data}
      />
    );
  });

  return (
    <>
      <Header />
      <main className="container">{journalData}</main>
    </>
  );
}

export default App;
