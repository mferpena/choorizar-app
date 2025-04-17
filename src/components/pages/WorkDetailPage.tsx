import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CharactersComponent from "../organisms/CharactersComponent";
import CarouselComponent from "../organisms/CarouselComponent";
import { Project } from "../../core/models/Project";
import { fetchProjectById } from "../../core/services/ProjectService";

export default function WorkDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadProject = async () => {
      try {
        const data = await fetchProjectById(id);
        setProject(data);
      } catch (error) {
        navigate("/not-found");
      }
    };

    loadProject();
  }, [id, navigate]);

  if (!project) return null;

  return (
    <section className="w-[90%] lg:w-[70%] mx-auto py-10 flex flex-col gap-[50px]">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={project.resources.find((r) => r.type === "BANNER")?.url || ""}
            alt={project.title}
            className="w-full h-auto rounded-xl object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start gap-4">
          <span className="text-xs font-bold uppercase text-gray-500">
            {project.subtitle}
          </span>
          <h1 className="text-3xl font-extrabold">{project.title}</h1>
          <p className="text-gray-700 text-base">{project.description}</p>
          <button className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
            Comprar
          </button>
        </div>
      </div>
      <CarouselComponent />
      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-4">Capítulos</h2>
        <div className="flex gap-6 flex-col lg:flex-row">
          {project.chapters.map((chapter) => (
            <div key={chapter.id} className="min-w-[250px] bg-white rounded-xl">
              <p className="text-xs text-gray-500 mt-2">{chapter.subtitle}</p>
              <h3 className="text-lg font-bold">{chapter.title}</h3>
              <p className="text-sm text-gray-700">{chapter.description}</p>
              <p className="text-xs text-gray-400 mt-2">{chapter.category}</p>
            </div>
          ))}
        </div>
      </div>
      <CharactersComponent />
    </section>
  );
}
