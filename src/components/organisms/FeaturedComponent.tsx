import { Link } from "react-router-dom";

export default function FeaturedComponent() {
  const featuredItems: any[] = [
    {
      id: "Superman",
      subtitle: "New Release",
      title: "Justice League United",
      image:
        "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
    },
    {
      id: "Superman",
      subtitle: "Editor's Pick",
      title: "Legends Reborn",
      image:
        "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
    },
    {
      id: "Superman",
      subtitle: "Fan Favorite",
      title: "Heroes of Tomorrow",
      image:
        "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
    },
  ];

  return (
    <section className="w-full mx-auto">
      <h2 className="text-2xl font-extrabold uppercase mb-6">
        Top Picks This Week
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {featuredItems.map((item) => (
          <Link to={item.id} key={item.title}>
            <div className="text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-square object-cover rounded-xl"
              />
              <p className="mt-3 text-xs text-gray-500 uppercase">
                {item.subtitle}
              </p>
              <p className="text-lg font-bold uppercase">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
