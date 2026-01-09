
import { MoveRight } from "lucide-react";
import { NavLink } from "react-router";

function Card(props: any) {
    return (
        <>
            <div className="relative flex flex-col md:flex-row w-full py-0.5 my-2 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                    {/**Image */}
                    <img
                        src={props.imageUrl}
                        alt={props.imgValue ?? "association-image"}
                        className="h-full w-full rounded-md md:rounded-lg object-cover aspect-square"
                    />
                </div>

                <div className="flex flex-row">
                    <div className="p-6">
                        <span className={`mb-4 rounded-full  px-2.5 border border-transparent text-xs text-zinc-100 transition-all shadow-sm w-20 text-center ${props.isActive ? 'bg-green-600' : 'bg-red-600'}`}>{props.isActive ? "Ouvert" : "Fermé"}</span>
                        {/**Title */}
                        <h2 className="mb-2 text-slate-800 text-xl font-semibold">
                            {props.title ?? "Lyft launching cross-platform service this week"}
                        </h2>
                        <section className="space-y-1">
                            {/**Description */}
                            <p className="text-slate-600 leading-normal font-light">
                                {props.description ?? "Like so many organizations these days, Autodesk is a company transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story"}
                            </p>
                            <p>
                                {props.adresse ?? "Adresse"}
                            </p>
                        </section>
                        <br />

                        <NavLink to={props.url} className="hover:underline flex items-center gap-2">
                            Découvrir l'association
                            <MoveRight />
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;

