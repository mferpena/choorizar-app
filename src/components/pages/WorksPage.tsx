import { useEffect, useState } from "react";
import { fetchProjects } from "../../core/services/ProjectService";
import CustomCardMedia from "../atoms/CustomCardMedia";

export interface CardData {
  id: string;
  imageUrl: string;
  title: string;
  hoverImageUrl: string;
}

export default function WorksPage() {
  const [works, setWorks] = useState<CardData[]>([]);

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
        setWorks(cards);
      } catch (error) {
        console.error("Error cargando proyectos:", error);
      }
    };

    loadProjects();
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {works.map((card: CardData) => (
          <CustomCardMedia
            rounded={""}
            key={card.id}
            url={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            hoverImageUrl={card.hoverImageUrl}
          />
        ))}
      </div>
    </div>
  );
}
