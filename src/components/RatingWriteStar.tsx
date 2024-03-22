import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import { StarHalf } from "@phosphor-icons/react/dist/ssr/StarHalf";

interface RatingWriteStarProps {
    ratingWorth: number,
    scoreValue: number,
    handleScoreChange: (score: number)=> void
}

export default function RatingWriteStar({ handleScoreChange, scoreValue, ratingWorth }: RatingWriteStarProps) {
  return (
    <div className='flex cursor-pointer relative w-10 h-10'
      onMouseLeave={() => {
        handleScoreChange(0)
      }}
    >
      <div className='w-1/2 h-full z-10'
        onMouseEnter={(_, reviewScore = ratingWorth - 0.5) => {
          handleScoreChange(reviewScore)
        }}
      ></div>
      <div className='w-1/2 h-full z-10'
        onMouseEnter={(_, reviewScore = ratingWorth) => {
          handleScoreChange(reviewScore)
        }}></div>
      <StarHalf
        weight={ scoreValue === ratingWorth - 0.5 ? "fill" : "regular" } height={40} className={`absolute text-purple-100 ${scoreValue === ratingWorth - 0.5 ? " " : "hidden" }`}/>
      <Star weight={ scoreValue >= ratingWorth ? "fill" : "regular" } className={`absolute text-purple-100 ${scoreValue >= ratingWorth ? " " : "hidden" }`}/>
      <Star weight='regular' height={40} className='absolute text-purple-100'/>
    </div>
  )
}