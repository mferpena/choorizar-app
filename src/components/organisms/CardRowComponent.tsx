import { useEffect, useState } from "react";
import { fetchProjects } from "../../core/services/ProjectService";
import CustomCardMedia from "../atoms/CustomCardMedia";

export interface CardData {
  id: string;
  imageUrl: string;
  title: string;
  hoverImageUrl: string;
}

const CardRow = () => {
  const [cardData, setCardData] = useState<CardData[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projects = await fetchProjects();
        const cards: CardData[] = projects.map((project) => ({
          id: project.id,
          title: project.title,
          imageUrl:
            project.resources.find((r) => r.type === "BANNER")?.url || "",
          hoverImageUrl:
            project.resources.find((r) => r.type === "HOVER")?.url || "",
        }));
        setCardData(cards);
      } catch (error) {
        console.error("Error al cargar los proyectos:", error);
      }
    };

    loadProjects();
  }, []);

  return (
    <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-5">
      {cardData.map((card) => (
        <CustomCardMedia
          key={card.id}
          url={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          hoverImageUrl={card.hoverImageUrl}
        />
      ))}
    </div>
  );
};

export default CardRow;
