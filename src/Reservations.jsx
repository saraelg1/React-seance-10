import {useReservations} from "./useReservations";
import {Link} from 'react-router-dom';

export default function Reservations(){
    const {reservations : listeReservation,
        chargement : loading,
        erreur : error} = useReservations("/reservations.json");

    return (
        <section className="panneau" aria-label="Réservations">
                <h2>Réservations enregistrées</h2>
                {listeReservation.length === 0 && <p className="attente">Aucune réservation enregistrée.</p>}
                {listeReservation.map(res => (
                  <div key={res.id} className="reservation">
                    <p>{res.id} : {res.nom}</p>
                    <Link to={`/reservations/${res.id}`}>Voir détail</Link>
                  </div>
                ))}
              </section>
        );
}