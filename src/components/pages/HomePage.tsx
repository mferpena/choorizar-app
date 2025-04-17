import CardRow from "../organisms/CardRowComponent";
import Carousel from "../organisms/CarouselComponent";
import CharactersComponent from "../organisms/CharactersComponent";
import CommunityComponent from "../organisms/CommunityComponent";
import FeaturedComponent from "../organisms/FeaturedComponent";
import ReelComponent from "../organisms/ReelComponent";

function HomePage() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <Carousel />
        <div className="w-full flex flex-col items-center justify-center gap-5 w-[90%] lg:w-[70%] px-[20px] lg:px-[0px]">
          <CardRow />
          <CommunityComponent />
          <CharactersComponent />
          <ReelComponent />
          <FeaturedComponent />
        </div>
      </div>
    </>
  );
}

export default HomePage;
