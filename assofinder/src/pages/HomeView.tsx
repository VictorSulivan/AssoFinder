import { useState } from "react";
import Card from "@/components/Card";
import List from "@/components/List";
import { LayoutList, List as ListIcon, ListFilter } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import InputVoice from "@/components/InputVoice";

interface Association {
    nom: string;
    description: string;
    adresse: string;
    activites: string[];
    zipCode: string;
    isActive: boolean;
    url: string;
    categorie: string;
    imageUrl: string;
}

export default function HomeView() {

    const [isGrid, setIsGrid] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    /**
     * Variables pour les filtres de recherche
     */
    const [assName, setAssName] = useState("");
    const [location, setLocation] = useState("");
    const [postalCode, setPostalCode] = useState("");

    console.log(`Fiter => valeur de saisie : ${assName} / ${location} / ${postalCode}`);

    /**
     * Données fictives des cartes d'associations
     */
    const cardItems: Association[] = [
        {
            nom: "Veni Verdi",
            description: "Association qui crée des fermes urbaines en milieu scolaire et social pour reconnecter les citadins à la terre.",
            adresse: "14 Rue des Lilas, 75019 Paris, France",
            activites: ["Agriculture urbaine", "Ateliers pédagogiques", "Compostage"],
            zipCode: "75019",
            isActive: true,
            url: "https://veniverdi.fr/",
            categorie: "Environnement",
            imageUrl: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "Simplon.co",
            description: "Réseau de fabriques numériques inclusives qui forme les personnes éloignées de l'emploi aux métiers du développement.",
            adresse: "55 Rue de Vincennes, 93100 Montreuil, France",
            activites: ["Bootcamps de code", "Formation cybersécurité", "Insertion pro"],
            zipCode: "93100",

            isActive: true,
            url: "https://simplon.co/",
            categorie: "Numérique & Insertion",
            imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "Lire et faire lire",
            description: "Programme national d'ouverture à la lecture et de solidarité intergénérationnelle porté par des bénévoles de plus de 50 ans.",
            adresse: "3 Rue Récamier, 75007 Paris, France",
            activites: ["Séances de lecture", "Rencontres intergénérationnelles"],
            zipCode: "75007",
            isActive: true,
            url: "https://www.lireetfairelire.org/",
            categorie: "Éducation",
            imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "Mains d'Œuvres",
            description: "Lieu de création et de diffusion, de recherche et d'expérience destiné à accueillir des artistes de toutes disciplines.",
            adresse: "1 Rue Charles Garnier, 93400 Saint-Ouen-sur-Seine, France",
            activites: ["Résidences d'artistes", "Concerts", "Expositions"],
            zipCode: "75007",
            isActive: true,
            url: "https://www.mainsdoeuvres.org/",
            categorie: "Art & Culture",
            imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "Secours Populaire Français",
            description: "Association à but non lucratif qui lutte contre la pauvreté et l'exclusion en France et dans le monde.",
            adresse: "9-11 Rue Froissart, 75003 Paris, France",
            activites: ["Aide alimentaire", "Accès à la culture", "Accompagnement scolaire"],
            zipCode: "75003",
            isActive: true,
            url: "https://www.secourspopulaire.fr/",
            categorie: "Solidarité",
            imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "Emmaüs France",
            description: "Mouvement de lutte contre la pauvreté et l'exclusion par l'accueil de compagnes et compagnons et la vente solidaire.",
            adresse: "47 Avenue de la Résistance, 93100 Montreuil, France",
            activites: ["Collecte d'objets", "Réemploi et recyclage", "Accueil inconditionnel"],
            zipCode: "93100",
            isActive: true,
            url: "https://emmaus-france.org/",
            categorie: "Solidarité & Logement",
            imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "Les Restaurants du Cœur",
            description: "Assistance bénévole aux personnes démunies, notamment par l'aide alimentaire et l'accompagnement à l'insertion.",
            adresse: "42 Rue de Clichy, 75009 Paris, France",
            activites: ["Distribution de repas", "Aide aux bébés", "Soutien à la recherche d'emploi"],
            zipCode: "75009",
            isActive: true,
            url: "https://www.restosducoeur.org/",
            categorie: "Solidarité & Alimentaire",
            imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "Zero Waste France",
            description: "Association citoyenne qui informe sur la problématique des déchets et milite pour leur réduction à la source.",
            adresse: "2 Passage de la Bonne Graine, 75011 Paris, France",
            activites: ["Ateliers zéro déchet", "Plaidoyer politique", "Conférences"],
            zipCode: "75011",
            isActive: true,
            url: "https://www.zerowastefrance.org/",
            categorie: "Environnement",
            imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "Article 1",
            description: "Accompagnement des jeunes issus de milieux populaires vers la réussite scolaire et professionnelle.",
            adresse: "29 Boulevard Bourdon, 75004 Paris, France",
            activites: ["Mentorat", "Ateliers soft skills", "Plateforme de mise en relation"],
            zipCode: "75004",
            isActive: true,
            url: "https://article-1.eu/",
            categorie: "Éducation & Égalité",
            imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "Emmaüs Connect",
            description: "Lutte contre la fracture numérique en proposant du matériel, des connexions et des formations à prix solidaire.",
            adresse: "71 Rue Archereau, 75019 Paris, France",
            activites: ["Vente de matériel reconditionné", "Ateliers d'initiation numérique", "Permanences connectées"],
            zipCode: "75019",
            isActive: true,
            url: "https://emmaus-connect.org/",
            categorie: "Numérique & Inclusion",
            imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "La Croix-Rouge française",
            description: "Mouvement humanitaire protégeant la vie et la santé et assurant le respect de l'être humain.",
            adresse: "98 Rue Didot, 75014 Paris, France",
            activites: ["Secourisme", "Action sociale", "Aide internationale"],
            zipCode: "75014",
            isActive: true,
            url: "https://www.croix-rouge.fr/",
            categorie: "Santé & Urgence",
            imageUrl: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "Singa France",
            description: "Organisation créant des liens entre les personnes nouvellement arrivées (réfugiés) et les membres de la société d'accueil.",
            adresse: "127 Rue d'Aubervilliers, 75019 Paris, France",
            activites: ["Programmes d'incubation", "Activités sportives et culturelles", "Colocation solidaire"],
            zipCode: "75019",
            isActive: true,
            url: "https://www.singafrance.com/",
            categorie: "Inclusion & Migration",
            imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "Fondation Pour le logement",
            description: "Agit pour que les personnes les plus démunies puissent accéder à un logement décent et une vie digne.",
            adresse: "3 Rue de Romainville, 75019 Paris, France",
            activites: ["Construction de logements très sociaux", "Lutte contre l'habitat indigne", "Accueil de jour"],
            zipCode: "75019",
            isActive: true,
            url: "https://www.fondation-abbe-pierre.fr/",
            categorie: "Logement",
            imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop"
        },
        {
            nom: "Surfrider Foundation Europe",
            description: "Dédiée à la protection et à la mise en valeur de l'océan, des vagues et du littoral.",
            adresse: "33 Allée du Moura, 64200 Biarritz, France",
            activites: ["Nettoyages de plages", "Campagnes de sensibilisation", "Surveillance qualité de l'eau"],
            zipCode: "64200",
            isActive: true,
            url: "https://surfrider.eu/",
            categorie: "Environnement & Océan",
            imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const filteredItems = cardItems.filter((item) => {
        const matchName = item.nom.toLowerCase().includes(assName.toLowerCase());
        const matchLocation = item.adresse.toLowerCase().includes(location.toLowerCase());
        const matchZip = item.zipCode.includes(postalCode);

        return matchName && matchLocation && matchZip;
    });

    /**
     * Gestion de la soumission du formulaire
     */
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setIsFilterOpen(false); // On ferme la modal une fois la recherche "validée"
    };

    return (
        <>
            <div className="p-4 min-h-screen">
                <section className="flex justify-between items-center mb-6">
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-2xl font-semibold">Liste des Associations</h1>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" onClick={() => setIsFilterOpen(true)} className="w-10" aria-label="filtre de recherche">
                                <ListFilter size={20} />
                            </Button>
                            {/* Petit badge pour indiquer si des filtres sont actifs */}
                            {(assName || location || postalCode) && (
                                <span className="text-sm text-muted-foreground">
                                    {filteredItems.length} résultat(s) trouvé(s)
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Button variant={!isGrid ? "default" : "outline"} onClick={() => setIsGrid(false)} aria-label="vue en liste">
                            <ListIcon size={24} />
                        </Button>
                        <Button variant={isGrid ? "default" : "outline"} onClick={() => setIsGrid(true)} aria-label="vue en grille">
                            <LayoutList size={24} />
                        </Button>
                    </div>
                </section>

                {/* Affichage des résultats ou message "vide" */}
                {filteredItems.length > 0 ? (
                    isGrid ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredItems.map((item, index) => (
                                <Card key={index} {...item} title={item.nom} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3">
                            {filteredItems.map((item, index) => (
                                <List key={index} {...item} title={item.nom} />
                            ))}
                        </div>
                    )
                ) : (
                    <div className="text-center py-20 text-muted-foreground">
                        Aucune association ne correspond à vos critères.
                    </div>
                )}
            </div>

            {/** Modal Filtre */}
            <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <DialogContent className="sm:max-w-md">
                    <form onSubmit={handleSearch}>
                        <DialogHeader>
                            <DialogTitle>Filtre de recherche</DialogTitle>
                            <DialogDescription>
                                Affinez votre recherche en appliquant des critères spécifiques.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nom de l'association</Label>
                                <InputVoice
                                    onVoiceInput={setAssName}
                                    name="name"
                                    placeholder="Ex: Emmaüs..."
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="adresse">Ville / Adresse</Label>
                                    <InputVoice
                                        onVoiceInput={setLocation}
                                        name="adresse"
                                        placeholder="Paris, Lyon..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="code">Code postal</Label>
                                    <InputVoice
                                        onVoiceInput={setPostalCode}
                                        name="code"
                                        placeholder="75000"
                                    />
                                </div>
                            </div>
                        </div>

                        <DialogFooter className="gap-2">
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() => { setAssName(""); setLocation(""); setPostalCode(""); }}
                            >
                                Réinitialiser
                            </Button>
                            <Button type="submit">Appliquer</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
