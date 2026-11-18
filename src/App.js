import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Catalogue from './Catalogue';
import Reservations from './Reservations';
import Disponibles from './Disponibles';
import Detail from './Detail';
import {useLocaux} from "./useLocaux.js"
import {useReservations} from "./useReservations";

export default function App() {

const {locaux, chargement, erreur} = useLocaux("/locaux.json");

const {reservations : listeReservation,
        chargement : loading,
        erreur : error} = useReservations("/reservations.json");

  return (
    <main>
      <header className="entete">
        <h1>Location de locaux</h1>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Catalogue />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/disponibles" element={<Disponibles locaux={locaux}/>} />
            <Route path="/reservations/:id" element={<Detail reservations={listeReservation}/>} />
            <Route path="*" element={<p>Page introuvable</p>} />
          </Routes>
        </BrowserRouter>

      </header>
    </main>
  );
}
