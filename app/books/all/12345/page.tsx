"use client";

import React, { useEffect, useState } from "react";

// 1. Définition des types et des données directement dans le fichier
export interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  pagesNbr: string;
  size: string;
  category: string;
  audioUrl?: string;
  hasAudio: boolean;
}

export const books: Book[] = [
  {
    id: 1,
    title: "POWER - Les 48 lois du pouvoir",
    author: "Robert Green",
    image: "/books/covers/power.png",
    pagesNbr: "463",
    size: "2MB",
    category: "Développement personnel",
    audioUrl: "/audio/book1.mp3",
    hasAudio: true,
  },
  {
    id: 2,
    title: "Confiance en soi",
    author: "M. Louis",
    image: "/books/book2.jpg",
    pagesNbr: "210",
    size: "1.4MB",
    category: "Développement personnel",
    audioUrl: "/audio/book2.mp3",
    hasAudio: true,
  },
  {
    id: 3,
    title: "Productivité Extrême",
    author: "A. Jean",
    image: "/books/book3.jpg",
    pagesNbr: "180",
    size: "1.2MB",
    category: "Productivité",
    audioUrl: "/audio/book3.mp3",
    hasAudio: true,
  },
  {
    id: 4,
    title: "Focus Profond",
    author: "K. Smith",
    image: "/books/book4.jpg",
    pagesNbr: "250",
    size: "1.8MB",
    category: "Productivité",
    audioUrl: "/audio/book4.mp3",
    hasAudio: true,
  },
  {
    id: 5,
    title: "Gestion du temps",
    author: "R. Charles",
    image: "/books/book5.jpg",
    pagesNbr: "195",
    size: "1.1MB",
    category: "Productivité",
    hasAudio: false,
  },
];

// Extraction automatique ou manuelle des catégories uniques
const categories = ["Développement personnel", "Productivité"];

export default function BooksLibraryPage() {
  const [globalDownloadsLeft, setGlobalDownloadsLeft] = useState<number | null>(
    null,
  );

  // Initialisation et lecture du localStorage au montage
  useEffect(() => {
    const storedLimit = localStorage.getItem("global_download_limit");
    if (storedLimit === null) {
      localStorage.setItem("global_download_limit", "30");
      setGlobalDownloadsLeft(30);
    } else {
      setGlobalDownloadsLeft(parseInt(storedLimit, 10));
    }
  }, []);

  // Gestion unique du téléchargement par livre
  const handleDownload = (bookTitle: string) => {
    if (globalDownloadsLeft !== null && globalDownloadsLeft <= 0) {
      alert(
        "Votre limite globale de téléchargement a été atteinte (30 téléchargements max).",
      );
      return;
    }

    // Processus de téléchargement standardisé sur le titre
    const link = document.createElement("a");
    const formattedName = `${bookTitle.toLowerCase().replace(/[^a-z0-9]/g, "-")}.pdf`;
    link.href = `/pdf/${formattedName}`;
    link.download = formattedName;
    link.click();

    // Décrémentation globale
    if (globalDownloadsLeft !== null) {
      const updatedLimit = globalDownloadsLeft - 1;
      localStorage.setItem("global_download_limit", updatedLimit.toString());
      setGlobalDownloadsLeft(updatedLimit);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* En-tête avec compteur global */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">
              Bibliothèque Numérique
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Accédez à vos résumés et téléchargez vos ebooks préférés.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-center sm:text-right">
            <span className="text-xs font-semibold text-blue-700 block uppercase tracking-wider">
              Téléchargements globaux restants
            </span>
            <span className="text-2xl font-black text-blue-900">
              {globalDownloadsLeft !== null
                ? `${globalDownloadsLeft} / 30`
                : "Chargement..."}
            </span>
          </div>
        </div>

        {/* Grille des catégories et livres */}
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat}>
              <div className="flex items-center justify-between mb-6 border-b pb-2">
                <h2 className="text-xl font-bold text-gray-800">{cat}</h2>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {books.filter((book) => book.category === cat).length} livres
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {books
                  .filter((b) => b.category === cat)
                  .map((book) => (
                    <div
                      key={book.id}
                      className="bg-white rounded-2xl border shadow-sm p-4 hover:shadow-md transition flex flex-col justify-between relative"
                    >
                      <div>
                        {/* AUDIO BADGE */}
                        {book.hasAudio && (
                          <div className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full z-10">
                            🔊 Audio dispo
                          </div>
                        )}

                        {/* IMAGE */}
                        <div className="bg-gray-100 rounded-xl p-3 flex justify-center">
                          <img
                            src={book.image}
                            className="h-64 w-auto object-contain rounded-lg shadow-sm"
                            alt={book.title}
                          />
                        </div>

                        {/* TITLE */}
                        <h3 className="mt-4 font-bold text-gray-900 text-lg leading-snug min-h-[3.5rem] line-clamp-2">
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

                        {/* AUDIO PLAYER */}
                        {book.hasAudio && book.audioUrl && (
                          <div className="mt-4">
                            <p className="text-xs font-semibold text-gray-600 mb-1">
                              🔊 Extrait Audio :
                            </p>
                            <audio
                              controls
                              className="w-full h-8 bg-gray-50 rounded-lg"
                            >
                              <source src={book.audioUrl} type="audio/mp3" />
                            </audio>
                          </div>
                        )}
                      </div>

                      {/* ACTIONS DE TÉLÉCHARGEMENT */}
                      <div className="mt-5 pt-3 border-t border-gray-50">
                        <button
                          onClick={() => handleDownload(book.title)}
                          disabled={
                            globalDownloadsLeft !== null &&
                            globalDownloadsLeft <= 0
                          }
                          className={`w-full text-center py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                            globalDownloadsLeft !== null &&
                            globalDownloadsLeft <= 0
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                              : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                          }`}
                        >
                          {globalDownloadsLeft !== null &&
                          globalDownloadsLeft <= 0
                            ? "Limite atteinte"
                            : "Télécharger le livre"}
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
