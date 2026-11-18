

export default function Disponible({locaux}){

    const disponible=locaux.filter((x) => x.disponible);

    return (
        <div>
            {disponible.map(x => <p>{x.nom}</p>)}
        </div>

        );
    }
