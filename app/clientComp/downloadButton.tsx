"use client";

import React, { useEffect, useState } from "react";

interface DownloadButtonProps {
  pdf: string;
}

export default function DownloadButton({ pdf }: DownloadButtonProps) {
  const [downloadsLeft, setDownloadsLeft] = useState<number | null>(null);

  useEffect(() => {
    // S'exécute uniquement après le premier rendu (côté client)
    const storedValue = localStorage.getItem("download_limit");

    if (storedValue === null) {
      // Si la valeur est null, on initialise à 3
      localStorage.setItem("download_limit", "20");
      setDownloadsLeft(20);
    } else {
      // Sinon on récupère la valeur actuelle (qu'elle soit < 3 ou égale)
      setDownloadsLeft(parseInt(storedValue, 10));
    }
  }, []);

  const handleDownload = () => {
    if (downloadsLeft !== null && downloadsLeft <= 0) {
      alert("Limite de téléchargement atteinte (0 restant).");
      return;
    }

    // Déclenchement du téléchargement simulé du PDF basé sur le titre
    const link = document.createElement("a");
    // Remplace par ta logique de nom de fichier si nécessaire
    link.href = `/books/${pdf}.pdf`;
    link.download = pdf;
    link.click();

    // Décrémentation du compteur dans le state et le localStorage
    if (downloadsLeft !== null) {
      const newValue = downloadsLeft - 1;
      localStorage.setItem("download_limit", newValue.toString());
      setDownloadsLeft(newValue);
    }
  };

  // Tant que le localStorage n'est pas lu, on affiche un état de chargement discret
  if (downloadsLeft === null) {
    return (
      <button
        className="px-4 py-2 bg-gray-300 text-white rounded cursor-not-allowed"
        disabled
      >
        Chargement...
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-2 items-start mt-4">
      <button
        onClick={handleDownload}
        disabled={downloadsLeft <= 0}
        className={`px-4 py-2 rounded font-medium text-white transition-colors ${
          downloadsLeft <= 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {downloadsLeft <= 0 ? "Téléchargement bloqué" : "Télécharger le PDF"}
      </button>
    </div>
  );
}
