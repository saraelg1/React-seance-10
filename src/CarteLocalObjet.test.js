import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {CarteLocalObjet} from "./CarteLocalObjet.jsx";
import "@testing-library/jest-dom";


test("Ceci est un test d'interaction pour le bouton +",async ()=>{

const user = userEvent.setup();
const local={
                nom: "Bureau Atlas",
                capacite: 8,
                prix: 80,
                disponible: true
              }

render(<CarteLocalObjet localObject={local}/>);

expect(screen.getByText("Durée : 1 heure(s)")).toBeInTheDocument();

const boutonPlus = screen.getByRole("button",{name:"+"});

await user.click(boutonPlus);

expect(screen.getByText("Durée : 2 heure(s)")).toBeInTheDocument();
});

test("Ceci est un test d'interaction pour le bouton -",async ()=>{

const user = userEvent.setup();
const local={
                nom: "Bureau Atlas",
                capacite: 8,
                prix: 80,
                disponible: true
              }

render(<CarteLocalObjet localObject={local}/>);

expect(screen.getByText("Durée : 1 heure(s)")).toBeInTheDocument();

const boutonPlus = screen.getByRole("button",{name:"+"});
const boutonMoins= screen.getByRole("button",{name:"-"});

await user.click(boutonPlus);

expect(screen.getByText("Durée : 2 heure(s)")).toBeInTheDocument();

await user.click(boutonMoins);

expect(screen.getByText("Durée : 1 heure(s)")).toBeInTheDocument();

});