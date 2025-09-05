import { ProfileCard } from "../components/profileCard";
import lisaImg from "../assets/images/lisa.jpg";
import roseImg from "../assets/images/rose.jpg";
import jisooImg from "../assets/images/jisoo.jpg";
import jennieImg from "../assets/images/jennie.jpg";

export function ProfileCardPage() {
  return (
    <div className="profileCardContainer">
      <ProfileCard
        image={lisaImg}
        firstName="lalisa"
        lastName="manobal"
        role="rapper, singer, dancer, and actress"
        bio="Lisa is a Thai rapper, singer, dancer, and actress. She is a member of the South Korean girl group Blackpink."
      />
      <ProfileCard
        image={roseImg}
        firstName="Roseanne"
        lastName="Park"
        role="singer and songwriter"
        bio="Roseanne Park, known mononymously as Rosé, is a New Zealand and South Korean singer"
      />
      <ProfileCard
        image={jisooImg}
        firstName="jisoo"
        lastName="kim"
        role="singer and actress"
        bio="Kim Ji-soo, known mononymously as Jisoo, is a South Korean singer and actress. She is a member of the South Korean girl group Blackpink."
      />
      <ProfileCard
        image={jennieImg}
        firstName="jennie"
        lastName="kim"
        role="Korean singer, rapper, songwriter, and actress"
        bio="Jennie Kim, known mononymously as Jennie, is a South Korean singer, rapper, songwriter, and actress."
      />
    </div>
  );
}
