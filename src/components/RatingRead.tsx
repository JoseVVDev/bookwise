import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import { StarHalf } from "@phosphor-icons/react/dist/ssr/StarHalf";
import { v4 } from "uuid";

interface RatingProps {
  score: number;
}

export default function RatingRead({ score }: RatingProps) {
  function scoreCheck(score: number) {
    let hasDecimalScore = score % 1 != 0 ? true : false;
    let treatedScore = Math.trunc(score);
    let scoreArr = [];

    for (let i = 0; i < 5; i++) {
      if (treatedScore > 0) {
        scoreArr.push(1);
        treatedScore--;
      } else if (hasDecimalScore) {
        scoreArr.push(0.5);
        hasDecimalScore = false;
      } else {
        scoreArr.push(0);
      }
    }

    return scoreArr;
  }

  const scoreArray = scoreCheck(score);
  return (
    <>
      {scoreArray.map((score) => {
        if (score === 1) {
          return <Star key={v4()} weight='fill' height={20} width={20} />;
        } else if (score === 0.5) {
          return <StarHalf key={v4()} weight='fill' height={20} width={20} />;
        } else {
          return <Star key={v4()} weight='regular' height={20} width={20} />;
        }
      })}
    </>
  );
}
