import { useState } from "react";
import { CarteLocalObjet } from "./CarteLocalObjet.jsx";
import {useLocaux} from "./useLocaux.js"

import {Link} from 'react-router-dom';

export default function Catalogue(){

       const [afficherLibres, setAfficherLibres] = useState(false);
       const [localChoisi, setLocalChoisi] = useState(null);
       const {locaux, chargement, erreur} = useLocaux("/locaux.json");
       const visibles = afficherLibres ? locaux.filter(l => l.disponible) : locaux;

    return (<section aria-label="Catalogue des locaux">
            <div className="barre-catalogue">
              <div>
                  <h2>Notre catalogue</h2>
                  <Link to="/reservations">Mes réservations</Link>
                {visibles.length===0 && (
                    <p>{chargement}</p>)}

                {visibles.length>0 && (<p>{visibles.length} locaux affichés</p>)}
              </div>
              <button type="button" onClick={() => setAfficherLibres(v => !v)}>
                {afficherLibres ? "Afficher tous les locaux" : "Afficher les disponibles"}
              </button>
            </div>
            <div className="catalogue">
              {visibles.map(local => (
                <CarteLocalObjet key={local.id} localObject={local}
                  onChoisirFunction={setLocalChoisi} estChoisi={localChoisi?.id === local.id} />
              ))}
            </div>
          </section>
          );

    }