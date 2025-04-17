import { Link } from "react-router-dom";

export default function CommunityComponent() {
  const workData: any = {
    id: "Superman",
    title: "Suicide Squad: Kill the Justice League",
    characters: [
      {
        id: "Superman",
        name: "Harley Quinn",
        image:
          "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
      },
      {
        id: "Superman",
        name: "Captain Boomerang",
        image:
          "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
      },
      {
        id: "Superman",
        name: "Deadshot",
        image:
          "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
      },
      {
        id: "Superman",
        name: "King Shark",
        image:
          "https://static.dc.com/dc/files/default_images/Char_Thumb_Batgirl_5c410fd9aa14d0.53215721.jpg?w=384",
      },
    ],
    communityPosts: [
      {
        id: "Superman",
        title: "Best Episode Tournament: Batman the Animated Series",
        desc: "The votes are in for your favorite BTAS eps!",
      },
      {
        id: "Superman",
        title:
          "May's DC Community Fanworks Theme: Celebrating AAPI Heritage Month!",
        desc: "Time to celebrate our favorite AAPI characters!",
      },
      {
        id: "Superman",
        title:
          "Superman with Long Hair Appreciation Thread (It's Not a Mullet)",
        desc: "Business up front... party in the back.",
      },
      {
        id: "Superman",
        title: "Dear DC Diary",
        desc: "Let’s spill some DC secrets...",
      },
    ],
  };

  return (
    <section className="w-full">
      <div className="w-full mx-auto flex flex-col justify-around md:flex-row lg:gap-10 gap-5">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-extrabold uppercase mb-4">
            {workData.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {workData.characters?.map((char: any) => (
              <Link to={char.id} key={char.id}>
                <div className="text-center">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <p className="mt-2 font-bold text-sm uppercase">
                    {char.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-extrabold uppercase mb-2">
            DC Community
          </h2>
          <p className="text-xs font-bold uppercase text-gray-600 mb-4">
            Hot Topics / General Discussion
          </p>
          <ul className="space-y-2 text-sm">
            {workData.communityPosts?.map((item: any, i: any) => (
              <Link to={item.id} key={i}>
                <li>
                  <p className="font-bold text-blue-600 cursor-pointer hover:underline">
                    {item.title}
                  </p>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </li>
              </Link>
            ))}
          </ul>
          <p className="mt-4 font-bold text-sm text-black cursor-pointer hover:underline">
            MORE COMMUNITY &gt;&gt;
          </p>
        </div>
      </div>
    </section>
  );
}
