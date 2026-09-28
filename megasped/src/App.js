import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Cards";

function App() {
  return (
    <>
      <Hero />

      <main className="container">
        <Card title="O nama">
          Mi smo špedicijska firma specijalizirana za međunarodni transport i
          logistiku.
        </Card>

        <Card title="Usluge">
          <ul>
            <li>Transport robe (EU i regija)</li>
            <li>Carinsko posredovanje</li>
            <li>Logistička rješenja</li>
            <li>Praćenje pošiljki</li>
          </ul>
        </Card>

        <Card title="Kontakt">
          <div>
            <p>📞 Telefon/Fax: + 387 36 806 625</p>
            <p>✉ Email adresa: megasped@gmail.com</p>
            <p>📍 Lokacija: Trg B.J. Jelačića bb, Čapljina</p>
          </div>
        </Card>
      </main>
    </>
  );
}

export default App;
