export interface Book {
  id: number;
  title: string;
  author: string;
  pdf: string;
  image: string;
  pagesNbr: string;
  size: string;
  category: string;
  audioUrl?: string; // Optionnel car l'id 5 n'en a pas
  hasAudio: boolean;
}

/**
 * Récupère l'objet complet d'un livre par son ID via un switch
 */
export function getBookAudioById(bookId: number): Book | undefined {
  switch (bookId) {
    case 1:
      return {
        id: 1,
        title: "POWER - Les 48 lois du pouvoir",
        pdf: "POWER - Les 48 lois de pouvoir - Robert Greene",
        author: "Robert Green",
        image: "/books/covers/power.png",
        pagesNbr: "463",
        size: "2MB",
        category: "Développement personnel",
        audioUrl: "/audio/book1.mp3",
        hasAudio: true,
      };
    case 2:
      return {
        id: 2,
        title: "Confiance en soi",
        pdf: "",
        author: "M. Louis",
        image: "/books/book2.jpg",
        pagesNbr: "210",
        size: "1.4MB",
        category: "Développement personnel",
        audioUrl: "/audio/book2.mp3",
        hasAudio: true,
      };
    case 3:
      return {
        id: 3,
        title: "Productivité Extrême",
        pdf: "",
        author: "A. Jean",
        image: "/books/book3.jpg",
        pagesNbr: "180",
        size: "1.2MB",
        category: "Productivité",
        audioUrl: "/audio/book3.mp3",
        hasAudio: true,
      };
    case 4:
      return {
        id: 4,
        title: "Focus Profond",
        pdf: "",
        author: "K. Smith",
        image: "/books/book4.jpg",
        pagesNbr: "250",
        size: "1.8MB",
        category: "Productivité",
        audioUrl: "/audio/book4.mp3",
        hasAudio: true,
      };
    case 5:
      return {
        id: 5,
        title: "Gestion du temps",
        pdf: "",
        author: "R. Charles",
        image: "/books/book5.jpg",
        pagesNbr: "195",
        size: "1.1MB",
        category: "Productivité",
        hasAudio: false,
      };
    default:
      // Si l'ID demandé n'est pas entre 1 et 5
      return undefined;
  }
}
