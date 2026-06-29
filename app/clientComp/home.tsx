"use client";

import Image from "next/image";
import React from "react";

export type Book = {
  id: number;
  title: string;
  author: string;
  image: string;
  pagesNbr: string;
  size: string;
  category: string;
  audioUrl?: string;
  audioUrlSummarize?: string;
  hasAudio: boolean;
};

export const books: Book[] = [
  {
    id: 1,
    title: "POWER - Les 48 lois du pouvoir",
    author: "Robert Greene",
    image: "/books/covers/power.png",
    pagesNbr: "463",
    size: "2MB",
    category: "Développement personnel",
    audioUrl: "/audio/book1.mp3",
    audioUrlSummarize: "/audios/resume/La_mécanique_des_48_lois_du_pouvoir.mp3",
    hasAudio: false,
  },
  {
    id: 2,
    title: "Atteindre l'excellence",
    author: "Robert Greene",
    image: "/books/covers/atteindre_lexcellence.png",
    pagesNbr: "488",
    size: "2.3MB",
    category: "Développement personnel",
    audioUrl: "/audio/book2.mp3",
    audioUrlSummarize:
      "/audios/resume/Le_génie_est_un_processus_biologique.mp3",
    hasAudio: false,
  },
  {
    id: 3,
    title: "Guide très pratique de la magie blanche",
    author: "A. Magalion",
    image: "/books/covers/guide_pratique_magie_blanche.png",
    pagesNbr: "48",
    size: "0.47MB",
    category: "Spiritualité",
    audioUrl: "/audio/book3.mp3",
    audioUrlSummarize:
      "/audios/resume/Les_rituels_de_Magalion_pour_réussir.mp3",
    hasAudio: false,
  },
  {
    id: 4,
    title: "Le pouvoir de la kabbale",
    author: "Rav Berg",
    image: "/books/covers/pouvoir_de_la_kabbale.png",
    pagesNbr: "267",
    size: "2.1MB",
    category: "Spiritualité",
    audioUrl: "/audio/book4.mp3",
    audioUrlSummarize: "/audios/resume/Dompter_son_ego_avec_la_Kabbale.mp3",
    hasAudio: false,
  },
  {
    id: 5,
    title: "Les 12 lois du karma",
    author: "Sandy Hinzelin  Anaka",
    image: "/books/covers/les_12_lois_du_karma.png",
    pagesNbr: "201",
    size: "2.3MB",
    category: "Spiritualité",
    audioUrl: "/audio/book4.mp3",
    audioUrlSummarize:
      "/audios/resume/Devenez_l_architecte_de_votre_réalité.mp3",

    hasAudio: false,
  },
  {
    id: 6,
    title: "Les vrai secrets de la magie noire",
    author: "Alexandre Legran",
    image: "/books/covers/vrai_secrets_de_la_magie_noire.png",
    pagesNbr: "201",
    size: "3.2MB",
    category: "Spiritualité",
    audioUrl: "/audio/book4.mp3",
    audioUrlSummarize:
      "/audios/resume/Pactes_démoniaques_et_sang_de_chauve-souris.mp3",

    hasAudio: false,
  },
  {
    id: 7,
    title:
      "Magie de protection pratique Maintenir et reconquérir votre pouvoir ",
    author: "Ellen Dugan",
    image: "/books/covers/magie_protection_pratique.png",
    pagesNbr: "172",
    size: "1.3MB",
    category: "Spiritualité",
    audioUrl: "/audio/book4.mp3",
    audioUrlSummarize: "/audio/book1.mp3",
    hasAudio: false,
  },
  {
    id: 8,
    title: "Père riche, père pauvre",
    author: "Robert Kiyosaki",
    image: "/books/covers/pere_riche_pere_pauvre.png",
    pagesNbr: "220",
    size: "2.1MB",
    category: "Finance",
    audioUrl: "/audio/book4.mp3",
    audioUrlSummarize: "/audio/book1.mp3",
    hasAudio: false,
  },
  {
    id: 9,
    title: "L'autoroute du Millionnaire",
    author: "MJ Demarco",
    image: "/books/covers/lautoroute_du_millionnaire.png",
    pagesNbr: "482",
    size: "3.6MB",
    category: "Finance",
    audioUrl: "/audio/book4.mp3",
    audioUrlSummarize: "/audio/book1.mp3",
    hasAudio: false,
  },
  {
    id: 10,
    title: "L'éffet cumulé - Décuplez votre réussite",
    author: "Darren Hardy",
    image: "/books/covers/leffet_cumule.png",
    pagesNbr: "225",
    size: "2.7MB",
    category: "Productivité",
    audioUrl: "/audio/book4.mp3",
    audioUrlSummarize: "/audio/book1.mp3",
    hasAudio: false,
  },
  {
    id: 11,
    title: "Influence et manipulation - La psychologie de la persuasion",
    author: "Robert CIALDINI",
    image: "/books/covers/influence_et_manipulation.png",
    pagesNbr: "662",
    size: "13.4MB",
    category: "Psychologie",
    audioUrl: "/audio/book4.mp3",
    audioUrlSummarize: "/audio/book1.mp3",
    hasAudio: false,
  },
  {
    id: 12,
    title: "Les lois de la nature humaine",
    author: "Robert Greene",
    image: "/books/covers/lois_de_la_nature_humaine.png",
    pagesNbr: "956",
    size: "4.3MB",
    category: "Psychologie",
    audioUrl: "/audio/book4.mp3",
    audioUrlSummarize: "/audio/book1.mp3",
    hasAudio: false,
  },
  {
    id: 13,
    title: "L'art de la séduction",
    author: "Robert Greene",
    image: "/books/covers/lart_de_laseduction.png",
    pagesNbr: "774",
    size: "7.6MB",
    category: "Psychologie",
    audioUrl: "/audio/book4.mp3",
    audioUrlSummarize: "/audio/book1.mp3",
    hasAudio: false,
  },
  {
    id: 14,
    title:
      "41 Fiches Pratiques pour Maîtriser les Fonctions Essentielles d'Excel",
    author: "Benjamin Rochereau",
    image: "/books/covers/maitriser_les_fonction_excel.png",
    pagesNbr: "143",
    size: "3.2MB",
    category: "Informatique Burautique",
    audioUrl: "/audio/book4.mp3",
    hasAudio: false,
  },
  {
    id: 15,
    title:
      "L'ART DE MAITRISER EXCEL Tout ce quil te faut pour être AUTONOME et PRODUCTIF avec Microsoft Excel",
    author: "Fabrice Boh",
    image: "/books/covers/lart_de_maitriser_excel.png",
    pagesNbr: "130",
    size: "3.2MB",
    category: "Informatique Burautique",
    audioUrl: "/audio/book4.mp3",
    hasAudio: false,
  },
  {
    id: 16,
    title:
      "Microsoft Office 365 [9 en 1] Le guide tout-en-un le plus actualisé, débutant à lexpert, pour maîtriser tout ce que vous…",
    author: "Joseph Barton",
    image: "/books/covers/office_360.png",
    pagesNbr: "117",
    size: "2.3MB",
    category: "Informatique Burautique",
    audioUrl: "/audio/book4.mp3",
    hasAudio: false,
  },
  {
    id: 17,
    title:
      "Maîtriser le ChatGPT 100 Conseils Puissants pour Exploiter Tout le Potentiel de l'IA",
    author: "Allan N. Daniels",
    image: "/books/covers/chatgpt.png",
    pagesNbr: "127",
    size: "0.5MB",
    category: "IA",
    audioUrl: "/audio/book4.mp3",
    hasAudio: false,
  },
  {
    id: 18,
    title:
      "L’IA et la génération de texte - Comprendre et maîtriser ChatGPT, Gemini, Perplexity, Mistral, Claude",
    author: "Mickaël Bertolla",
    image: "/books/covers/lia_et_la_gen_de_texte.png",
    pagesNbr: "223",
    size: "27.5MB",
    category: "IA",
    audioUrl: "/audio/book4.mp3",
    hasAudio: false,
  },
  {
    id: 19,
    title: "Maîtriser l’IA générative dans la communication et le marketing",
    author: "Eliott Maidenberg",
    image: "/books/covers/maitriser_lia_gen_en_communication.png",
    pagesNbr: "179",
    size: "2MB",
    category: "IA",
    audioUrl: "/audio/book4.mp3",
    hasAudio: false,
  },
  {
    id: 20,
    title:
      "Guide chimie industrielle Vol 2, 150 recettes chimiques avec des details en profondeur",
    author: "?",
    image: "/books/covers/150-recettes.png",
    pagesNbr: "117",
    size: "2MB",
    category: "Business",
    audioUrl: "/audio/book4.mp3",
    hasAudio: false,
  },
];

const testimonials = [
  { id: 1, image: "/comments/image.png" },
  { id: 2, image: "/comments/image.png" },
  { id: 3, image: "/comments/image.png" },
  { id: 4, image: "/comments/image.png" },
  { id: 5, image: "/comments/image.png" },
  { id: 6, image: "/comments/image.png" },
];

/*
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <div key={t.id} className="rounded-xl overflow-hidden shadow-md">
            <img
              src={t.image}
              alt={`testimonial-${t.id}`}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>

*/
const categories = [
  {
    name: "Développement personnel",
    desc: "Si w vle konprann tèt ou epi avanse pi byen nan lavi.",
  },
  {
    name: "Productivité",
    desc: "Aprann kijan pou fè plis nan mwens tan san estrès.",
  },
  {
    name: "Spiritualité",
    desc: "Eksplore sans lavi ak koneksyon espirityèl ou.",
  },
  {
    name: "Finance",
    desc: "Jere lajan ou pi byen epi bati richès piti piti.",
  },
  {
    name: "Psychologie",
    desc: "Konprann fason moun panse ak konpòtman yo.",
  },
  {
    name: "Informatique Burautique",
    desc: "Metrize zouti òdinatè pou travay ak etid.",
  },
  {
    name: "IA",
    desc: "Dekouvri kijan entèlijans atifisyèl ap chanje mond lan,epi konn kijan pou esplwate potensyèl yo pou vin pi pwodiktif",
  },
  {
    name: "Business",
    desc: "Kreye epi devlope ide pou fè lajan ak biznis.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b p-4 z-10">
        <div className="flex items-center justify-center gap-2 text-md text-gray-500 mt-2">
          <img
            src="/logo.png"
            alt="payment"
            className="h-10 w-10 rounded-full object-contain"
          />
          <span className="font-bold">Connaissance+</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="pt-24 px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
          Envesti nan tèt ou depi jodi a
        </h2>

        <p className="mt-3 text-gray-600 text-base">
          Se garanti pwogrè w demen. 🚀
        </p>
        <div className="relative mt-5 bg-gradient-to-br from-white to-orange-50 p-6 rounded-3xl shadow-md border border-orange-100 overflow-hidden z-0">
          {/* Glow décoratif */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

          {/* Badge rabais */}
          <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow z-10">
            -70%
          </div>

          <div className="relative z-10">
            <p className="text-2xl font-extrabold text-gray-900">
              🎁 Package 20 Liv Elektwonik (PDF)
            </p>

            <div className="flex items-center gap-3 mt-4 flex-wrap">
              <span className="text-4xl font-black text-orange-600">3000G</span>

              <span className="text-lg text-gray-400 line-through">10000G</span>
            </div>

            <div className="mt-3 inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
              💸 Ou ekonomize 7000G
            </div>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Achte chak liv se <span className="font-semibold">500G</span>, men
              package espesyal sa ba ou
              <span className="font-bold text-orange-600"> 20 liv </span>
              pou sèlman <span className="font-bold">3000G</span>.
            </p>

            <p className="text-sm text-gray-500 mt-3">
              Lè lespri w grandi, opòtinite yo kòmanse suiv ou
            </p>
          </div>
        </div>
      </div>

      <div className="h-[2px] w-full bg-black my-4 md:my-8" />
      {/* CONTENT */}
      <div className="px-4 space-y-10 mt-16 md:mt-24">
        {categories.map((cat) => (
          <div key={cat.name}>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-xl font-bold text-gray-800">{cat.name}</h2>

              <span className="text-sm text-gray-500">
                {books.filter((book) => book.category === cat.name).length}{" "}
                livres
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-4">{cat.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {books
                .filter((b) => b.category === cat.name)
                .map((book) => (
                  <div
                    key={book.id}
                    className="bg-white rounded-2xl border shadow-sm p-4 hover:shadow-md transition relative"
                  >
                    {/* AUDIO BADGE */}
                    {book.hasAudio && (
                      <div className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                        🔊 Audio dispo
                      </div>
                    )}

                    {/* IMAGE */}
                    <div className="bg-gray-100 rounded-xl p-3 flex justify-center">
                      <img
                        src={book.image}
                        className="h-72 w-auto object-contain rounded-lg shadow-sm"
                        alt={book.title}
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-4 font-bold text-gray-900 text-lg leading-snug">
                      {book.title}
                    </h3>

                    {/* AUTHOR */}
                    <p className="text-sm text-gray-500 mt-1">
                      ✍️ {book.author}
                    </p>

                    {/* INFOS */}
                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">
                        📄 {book.pagesNbr} pages
                      </span>

                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">
                        💾 {book.size}
                      </span>
                    </div>

                    {/* AUDIO */}
                    {book.audioUrlSummarize && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          🔊 Résumé audio
                        </p>

                        <audio controls className="w-full">
                          <source
                            src={book.audioUrlSummarize}
                            type="audio/mp3"
                          />
                        </audio>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* MONCASH BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-50">
        <a
          href="https://wa.me/50940652035?text=Bonjou%20mwen%20enterese%20nan%20pak%2020%20liv%20elektwonik%20la%20a%20.%20Mwen%20ta%20renmen%20achte%20li."
          target="_blank"
          className="block text-center bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-2xl font-bold text-lg shadow-lg"
        >
          Mwen enterese !
        </a>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-2">
          {" "}
          <span>Moyen de Paiement</span>{" "}
          <img
            src="/icons/moncash-natcash.jpg"
            alt="payment"
            className="h-6 w-6 object-contain"
          />{" "}
        </div>
      </div>
    </div>
  );
}
