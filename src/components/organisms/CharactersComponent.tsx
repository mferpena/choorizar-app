import { Link } from "react-router-dom";

export default function CharactersComponent() {
  const work: any = {
    id: "Superman",
    title: "asdfasdf",
    characters: [
      {
        id: "Superman",
        name: "Superman",
        image:
          "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
      },
      {
        id: "Batman",
        name: "Batman",
        image:
          "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
      },
      {
        id: "WonderWoman",
        name: "Wonder Woman",
        image:
          "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
      },
      {
        id: "Flash",
        name: "The Flash",
        image:
          "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
      },
      {
        id: "GreenLantern",
        name: "Green Lantern",
        image:
          "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
      },
      {
        id: "Aquaman",
        name: "Aquaman",
        image:
          "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
      },
      {
        id: "Cyborg",
        name: "Cyborg",
        image:
          "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
      },
    ],
  };
  return (
    <section className="w-full">
      <h2 className="text-2xl font-extrabold uppercase mb-6">{work.title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {work.characters?.map((char: any) => (
          <Link to={char.id} key={char.name}>
            <div className="text-center">
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <p className="mt-2 font-bold text-sm uppercase">{char.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
