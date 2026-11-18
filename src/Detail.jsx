import {useParams} from 'react-router-dom';


export default function Detail({reservations}){

    const {id} = useParams();
    const res = reservations.find(x => String(x.id)===id);

    return (
        <p>{res.nom} : {res.duree} => {res.total}</p>
        );

    }