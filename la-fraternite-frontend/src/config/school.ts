// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /** Nom du cycle. Doit correspondre aux cycles acceptés par le backend (utils/schemas.js). */
  name: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

export const school: SchoolProfile = {
  id: 'la-fraternite-kara',
  logo: '/logo-la-fraternite.png',
  settings: {
    name: 'LA FRATERNITÉ',
    shortName: 'LA FRATERNITÉ',
    slogan: 'ENSEMBLE VERS L’EXCELLENCE',
    address: 'Quartier Dongovo — Kara, Togo',
    email: 'contact@lafraternite-kara.tg',
    phone: '+228 92 27 32 51',
    phone2: '',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 95000,
    canteenFee: 500,
    badgeFee: 1000,
    uniformFee: 4000,
    apeFee: 2000,
  },
  footerText:
    'Un établissement à taille humaine, à Dongovo-Kara, où chaque élève grandit dans la solidarité, la discipline et le goût de l’effort.',
  hero: {
    eyebrow: 'FRATERNITÉ - TRAVAIL - RÉUSSITE',
    titleLines: ['Établissement', 'scolaire'],
    highlight: 'LA FRATERNITÉ',
    intro:
      'Bienvenue sur le site officiel de LA FRATERNITÉ, à Dongovo-Kara : un cadre d’apprentissage sérieux et chaleureux, dédié à l’éducation, à l’épanouissement et à la réussite de chaque élève.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'La direction de LA FRATERNITÉ',
    eyebrow: 'UN MOT DE LA DIRECTION',
    titleLines: ['Apprendre ensemble,', 'réussir ensemble.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'À LA FRATERNITÉ, notre nom est aussi notre engagement : faire de l’école un lieu où l’on apprend les uns avec les autres, dans le respect, l’entraide et la discipline.',
      'Notre équipe éducative accompagne chaque enfant avec exigence et bienveillance, en lien étroit avec les familles de Dongovo et de toute la ville de Kara, pour lui donner les moyens de construire un avenir dont il sera fier.',
    ],
    signature: 'KANAZA Justin — Adjoint Directeur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'LA FRATERNITÉ est implantée dans le quartier Dongovo, à Kara. Elle est née de la volonté de parents et d’éducateurs d’offrir aux enfants du quartier une école de proximité exigeante et accueillante.',
      'Conscients des attentes des familles dans leur recherche d’un établissement de qualité, nous avons bâti une école qui allie rigueur académique et épanouissement personnel, dans un cadre d’apprentissage stimulant, sécurisé et attentif aux besoins de chaque enfant.',
      'LA FRATERNITÉ accueille les élèves de la maternelle au collège. Fidèle à son nom, elle cultive l’esprit de solidarité entre élèves, enseignants et familles, afin de former des citoyens responsables, ouverts et engagés.',
    ],
    stats: [
      { value: 'Un suivi attentif', label: 'Chaque élève est suivi avec attention.' },
      { value: 'Un cadre sûr', label: 'Pour apprendre dans de bonnes conditions.' },
      { value: 'Pour bien réussir', label: 'Notre engagement pour chaque enfant.' },
    ],
  },
  values: [
    { icon: 'graduation', title: 'Excellence académique', text: 'Nous visons l’excellence dans tous les domaines d’apprentissage.' },
    { icon: 'heart', title: 'Fraternité', text: 'L’entraide et le respect mutuel au cœur de la vie de l’école.' },
    { icon: 'idea', title: 'Discipline et travail', text: 'Le goût de l’effort et la rigueur au quotidien.' },
    { icon: 'users', title: 'Communauté', text: 'Une communauté éducative unie avec les familles de Kara.' },
  ],
  faq: [
    {
      q: 'Pourquoi le nom « LA FRATERNITÉ » ?',
      a: 'Notre nom résume notre projet : une école où élèves, enseignants et parents avancent ensemble, dans l’entraide et le respect, de la maternelle au collège.',
    },
    {
      q: 'Avez-vous un bus scolaire ?',
      a: 'Contactez le secrétariat pour connaître les possibilités de transport et les quartiers de Kara desservis.',
    },
    {
      q: 'Les frais de scolarité à LA FRATERNITÉ s’élèvent à combien ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
    {
      q: 'Quelles sont les échéances de paiement ?',
      a: 'Le paiement de la scolarité peut être effectué en trois tranches. Le calendrier est communiqué lors de l’inscription.',
    },
    {
      q: 'Vous semblez avoir un programme bien défini que vous leur léguez ?',
      a: 'Nos programmes conjuguent apprentissages fondamentaux, développement personnel et ouverture sur le monde. Découvrez le détail dans la rubrique Nos cycles.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      slug: 'maternelle',
      age: '3 à 6 ans',
      text: 'La maternelle constitue la première étape du parcours scolaire. Elle favorise l’éveil, la socialisation, l’autonomie et les premiers apprentissages.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil et expression corporelle',
        'Développement du langage',
        'Découverte des nombres et des formes',
        'Apprentissage de la vie en groupe',
      ],
      programs: [
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'heart',
          title: 'Musique et expression',
          text: 'Comptines, chants, rythmes et jeux de mouvement.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Découvrir, expérimenter et apprendre en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux et développe la curiosité. Chaque élève progresse dans un cadre structuré et bienveillant.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Ouverture aux sciences et au monde',
        'Maîtrise du français et initiation à l’anglais',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et mathématiques au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Sciences et découverte',
          text: 'Observer, comprendre et développer sa curiosité.',
        },
        {
          icon: 'users',
          title: 'Sport et coopération',
          text: 'Apprendre le respect, l’esprit d’équipe et l’autonomie.',
        },
      ],
    },
    {
      name: 'Collège',
      slug: 'college',
      age: '12 à 16 ans',
      text: 'Le collège prépare les élèves à poursuivre leurs études avec confiance. Les enseignements approfondissent les connaissances, les méthodes de travail et l’esprit critique.',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Accompagnement et suivi des progrès',
        'Préparation aux examens et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Excellence académique',
          text: 'Des enseignements exigeants et un suivi régulier.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'S’exprimer et s’ouvrir à de nouveaux horizons.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et développer ses compétences.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Une (1) copie légalisée de l’acte de naissance ou un jugement supplétif légalisé (dossier scolaire pour tout le cycle)',
      'Un (1) certificat de scolarité',
      'Les bulletins de notes de l’année écoulée (sauf pour enfant entrant en Maternelle 1)',
      'Un carnet de correspondance (pour la réinscription)',
      'Une (1) chemise dossier à rabat',
      'Un (1) carnet de santé',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)
