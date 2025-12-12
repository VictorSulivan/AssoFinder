
import { MoveRight } from "lucide-react";
import { NavLink } from "react-router";

function Card(props:any){
    return (
        <>
        <div className="relative flex flex-col md:flex-row w-full py-0.5 my-2 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                {/**Image */}
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                    alt={props.imgValue??"association-image"}
                    className="h-full w-full rounded-md md:rounded-lg object-cover"
                />
            </div>
            
            <div className="flex flex-row">
                <div className="p-6">
                    <span className={`mb-4 rounded-full  px-2.5 border border-transparent text-xs text-zinc-100 transition-all shadow-sm w-20 text-center ${props.isActive ? 'bg-green-600':'bg-red-600'}`}>{props.isActive ? "Ouvert":"Fermé"}</span>
                    {/**Title */}
                    <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                        {props.title ??"Lyft launching cross-platform service this week"}
                    </h4>
                    <section className="space-y-1">
                        {/**Description */}
                        <p className="text-slate-600 leading-normal font-light">
                            {props.description?? "Like so many organizations these days, Autodesk is a company transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story"}
                        </p>
                        <p>
                            {props.adresse?? "Adresse"}
                        </p>
                    </section>
                    <br />

                    <NavLink to="#" className="hover:underline flex items-center gap-2">
                        Découvrir l'association
                        <MoveRight/>
                    </NavLink>
                </div>

                
            </div>
        </div> 
        
        </>
    )
}

export default Card; 

