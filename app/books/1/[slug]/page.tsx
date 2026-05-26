import DownloadButton from "@/app/clientComp/downloadButton";
import { getBookAudioById } from "@/app/functions/functions";
import React from "react";

// Désactive le cache Next.js pour garantir la réactualisation sans cache
export const dynamic = "force-dynamic";

export default async function DownloadOneBook({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1. Récupération asynchrone du slug
  const { slug } = await params;
  const bookId = parseInt(slug, 10);

  // 2. Récupération de toutes les données du livre via le switch
  // Si le slug n'est pas un nombre valide, on prend l'ID 3 par défaut
  const book = getBookAudioById(isNaN(bookId) ? 3 : bookId);

  // Gestion du cas où le livre n'existe pas dans le switch
  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center p-6 bg-white rounded-2xl border shadow-sm">
          <p className="text-red-500 font-semibold">Livre introuvable</p>
          <p className="text-sm text-gray-500 mt-1">
            L'ID "{slug}" n'existe pas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* TEXTES DE REMERCIEMENTS EN HAUT */}
        <div className="text-center mb-8">
          <span className="text-3xl">🎉</span>
          <h1 className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            Merci pour votre confiance !
          </h1>
          <h3 className="mt-2 text-sm text-gray-600">
            Votre contenu est prêt. Vous pouvez{" "}
            {book.hasAudio && <span>écouter/télécharger l'audio ou </span>}
            télécharger votre fichier PDF ci-dessous.
          </h3>
        </div>

        {/* AFFICHAGE D'UNE SEULE CARD (Ton design adapté) */}
        <div className="bg-white rounded-2xl border shadow-sm p-4 hover:shadow-md transition relative">
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
          <p className="text-sm text-gray-500 mt-1">✍️ {book.author}</p>

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
          {book.hasAudio && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">
                🔊 Livre audio complet
              </p>
              <audio controls className="w-full">
                <source src={book.audioUrl} type="audio/mp3" />
                Votre navigateur ne supporte pas l'élément audio.
              </audio>
            </div>
          )}

          {/* SÉPARATEUR VISUEL AVANT LE BOUTON */}
          <hr className="my-4 border-gray-100" />

          {/* BOUTON DE TÉLÉCHARGEMENT AVEC LIMITATION LOCALSTORAGE */}
          <div className="w-full">
            <DownloadButton pdf={book.pdf} />
          </div>
        </div>
      </div>
    </div>
  );
}
