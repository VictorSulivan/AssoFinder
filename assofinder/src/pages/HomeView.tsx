import { useState } from "react";
import Card from "@/components/Card";
import List from "@/components/List"; 
import { LayoutList, List as ListIcon, ListFilter} from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
interface Association {
    nom: string;
    description: string;
    adresse: string;
    activites: string[];
    isActive: boolean;
}

export default function HomeView() {
    const [isGrid, setIsGrid] = useState(true);
    const [isFilterOpen,setIsFilterOpen]=useState(false); 

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
        <>
            <div className="p-4 min-h-screen">
                <section className="flex justify-between items-center mb-6">
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-2xl font-semibold">Liste des Associations</h1>
                        <ListFilter onClick={()=>setIsFilterOpen(true)} size={20} className="hover:stroke-green-400 transition ease-in-out duration-75 transform-stroke hover:scale-115 cursor-pointer"/>
                    </div>
                    <div className="flex gap-4">
                        {/* Icône de vue Liste (LayoutList) -> isGrid = false */}
                        <ListIcon 
                            className={`stroke-zinc-700 hover:stroke-green-400 transition ease-in-out duration-75 transform-stroke hover:scale-115 cursor-pointer`} 
                            onClick={() => setIsGrid(false)}
                            size={24}
                        />
                        {/* Icône de vue Grille (LayoutList) -> isGrid = true */}
                        <LayoutList 
                            className={`stroke-zinc-700 hover:stroke-green-400 transition ease-in-out duration-75 transform-stroke hover:scale-115 cursor-pointer`} 
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
            {/** Modal Filtre */}

            <Dialog open={isFilterOpen}>
                <form>
                    <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Filtre de recherche</DialogTitle>
                        <DialogDescription>
                            Affinez votre recherche en appliquant des critères spécifiques (localisation, activités, statut, etc.)
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                        <Label htmlFor="name-1">Nom de l'association</Label>
                        <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                        {/* <Label htmlFor="username-1">Username</Label>
                        <Input id="username-1" name="username" defaultValue="@peduarte" /> */}
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                        <Button variant="outline" onClick={()=>setIsFilterOpen(false)}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Rechercher</Button>
                    </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </>
    );
}
