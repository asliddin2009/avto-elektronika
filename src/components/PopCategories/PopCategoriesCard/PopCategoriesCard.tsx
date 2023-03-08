import { ReactNode } from "react"
import "./PopCategoriesCard.scss"

const PopCategoriesCard = (props: { title: string; svg: ReactNode }) => {
  return (
    <a href="#!">
      <div className="PopCategoriesCard">
        <div className="PopCategoriesCard__icon">{props.svg}</div>
        <div className="PopCategoriesCard__title-wrapper">
          <h2 className="PopCategoriesCard__title">{props.title}</h2>
        </div>
      </div>
    </a>
  )
}

export default PopCategoriesCard
