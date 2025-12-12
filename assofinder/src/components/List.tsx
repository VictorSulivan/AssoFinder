
import { MoveRight } from "lucide-react";
import { NavLink } from "react-router";

function List(props:any){
    return (
        <>
            <div className="flex flex-col rounded-md p-3 bg-white shadow w-ful mb-2 transition ease-in-out duration-75">
                <div className="space-y-3 w-full">
                    <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                    {props.title ??"Lyft launching cross-platform service this week"}
                    </h4>
                    <p className="text-slate-600 leading-normal font-light">
                        {props.description?? "Like so many organizations these days, Autodesk is a company transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story"}
                    </p>
                    <NavLink to="#" className="hover:underline flex items-center gap-2">
                        Découvrir l'association
                        <MoveRight/>
                    </NavLink>
                </div>
                
            </div>
        </>
    )
}

export default List; 

