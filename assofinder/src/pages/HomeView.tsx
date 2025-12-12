import { useState } from "react";
import Card from "@/components/Card";
import List from "@/components/List"; 
import { LayoutList, List as ListIcon } from "lucide-react";

// 1. Définition de l'interface pour le typage (Recommandé en TSX)
interface Association {
    nom: string;
    description: string;
    adresse: string;
    activites: string[];
    isActive: boolean;
}

export default function HomeView() {
    const [isGrid, setIsGrid] = useState(true); 

    const cardItems: Association[] = [ 
        {
            nom: "Les Jardins du Quartier",
            description: "Association dédiée à la promotion de l'agriculture urbaine et à la création d'espaces verts communautaires.",
            adresse: "14 Rue des Lilas, 75010 Paris, France",
            activites: ["Ateliers de jardinage (semis, compostage)", "Ventes de récoltes locales"],
            isActive: true
        },
        {
            nom: "CodeSolidaire",
            description: "Plateforme d'entraide numérique pour former les personnes éloignées de l'emploi aux bases du développement web et de la programmation.",
            adresse: "220 Boulevard Voltaire, 69003 Lyon, France",
            activites: ["Bootcamps de codage gratuits", "Mentorat professionnel individuel"],
            isActive: false
        },
        {
            nom: "Les Mots Voyageurs",
            description: "Organisation promouvant la lecture et l'alphabétisation auprès des jeunes enfants et des seniors.",
            adresse: "7 Place Saint-Pierre, 33000 Bordeaux, France",
            activites: ["Lecture de contes", "Collectes de livres"],
            isActive: true
        },
        {
            nom: "Art et Culture Ouverte",
            description: "Soutien aux artistes émergents locaux et organisation d'expositions gratuites.",
            adresse: "54 Avenue Jean Jaurès, 13005 Marseille, France",
            activites: ["Expositions temporaires", "Soirées slam et poésie"],
            isActive: true
        }
    ];

    return (
        <div className="bg-white p-4">
            <section className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Liste des Associations</h1>
                <div className="flex gap-4">
                    {/* Icône de vue Liste (LayoutList) -> isGrid = false */}
                    <ListIcon 
                        className={`stroke-zinc-700 cursor-pointer ${!isGrid ? 'text-blue-500' : ''}`} 
                        onClick={() => setIsGrid(false)}
                        size={24}
                    />
                    {/* Icône de vue Grille (LayoutList) -> isGrid = true */}
                    <LayoutList 
                        className={`stroke-zinc-700 cursor-pointer ${isGrid ? 'text-blue-500' : ''}`} 
                        onClick={() => setIsGrid(true)}
                        size={24}
                    />
                </div>
            </section>

            {/*  `isGrid` */}
            {isGrid ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cardItems.map((item, index) => (
                        <Card 
                            key={item.nom || index} 
                            title={item.nom}
                            description={item.description}
                            adresse={item.adresse}
                            isActive={item.isActive}
                        />
                    ))}
                </div>
            ) : (
                //List
                <div className="flex flex-col gap-3">
                    {cardItems.map((item, index) => (
                        <List
                            key={item.nom || index}
                            title={item.nom}
                            description={item.description}
                            adresse={item.adresse}
                            isActive={item.isActive}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}