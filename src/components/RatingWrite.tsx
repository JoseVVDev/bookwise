"use client"

import { useEffect, useState } from "react";
import { Star, StarHalf } from "@phosphor-icons/react";

const maxRating = [ 1, 2, 3, 4, 5 ]
export default function RatingWrite() {
  const [ score, setScore ] = useState(0)
  const [ chosenScore, setChosenScore ] = useState(0)

  function handleScoreChange(number: number, set: boolean) {
    if (set) {
      setChosenScore(number)
    }
    setScore(number)
  }

  return (
    <div className='flex'>
      {
        maxRating.map((ratingWorth) => {
          return (
            <div key={ratingWorth}>
              <div className='flex cursor-pointer relative w-8 h-8'
                onMouseLeave={() => {
                  handleScoreChange(0, false)
                }}
              >
                <div className='w-1/2 h-full z-10'
                  onMouseEnter={(_, reviewScore = ratingWorth - 0.5) => {
                    handleScoreChange(reviewScore, false)
                  }}
                  onClick={(_, reviewScore = ratingWorth - 0.5) => {
                    handleScoreChange(reviewScore, true)
                  }}>
                </div>
                <div className='w-1/2 h-full z-10'
                  onMouseEnter={(_, reviewScore = ratingWorth) => {
                    handleScoreChange(reviewScore, false)
                  }}
                  onClick={(_, reviewScore = ratingWorth) => {
                    handleScoreChange(reviewScore, true)
                  }}>
                </div>
                <StarHalf
                  weight={ score === ratingWorth - 0.5 || chosenScore === ratingWorth - 0.5 ? "fill" : "regular" }
                  className={`absolute w-8 h-8 text-purple-100 
                  ${score === ratingWorth - 0.5 || chosenScore === ratingWorth - 0.5 ? " " : "hidden" }`}
                />
                <Star
                  weight={ score >= ratingWorth || chosenScore >= ratingWorth ? "fill" : "regular" }
                  className={`absolute w-8 h-8 text-purple-100 
                  ${score >= ratingWorth || chosenScore >= ratingWorth ? " " : "hidden" }`}
                />
                <Star
                  weight='regular'
                  className='absolute w-8 h-8 text-purple-100'/>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

// nota por padrão renderiza todas as estrelas vazias VV
// nota renderiza meia estrela quando usuário passa o mouse pela primeira metade da estrela vv
// nota renderiza a estrela inteira quando usuário passa o mouse pela segunda metade da estrela vv
// nota renderiza as estrelas anteriores como inteiras vv
// estado da nota padrão muda quando o usuário clica para dar uma nota

// função recebe a nota e muda o estado