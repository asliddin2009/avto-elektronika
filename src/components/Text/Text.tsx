import React, { ReactElement, useState } from "react"
import Container from "../Container/Container"
import Title from "../Title/Title"
import "./Text.scss"

const Text = () => {
  const text: ReactElement = <span>
  нашими друзьями. Всегда приятно работать с теми, кто никогда не
  подведет. <br /> Сегодня «АвтоЭлектрика» – крупнейший оптовый дилер
  автотракторных запчастей в России и странах СНГ. Мы занимаемся
  оптовыми продажами продукции всех профильных российских, белорусских
  и украинских заводов. Запущены производство и реализация запчастей
  под собственной торговой маркой «АвтоЭлектрика».</span>
  const [texts, setTexts] = useState(<span></span>)
  const [showTexts, setShowTexts] = useState(false)
  const [read, setRead] = useState("Читать далее")
  const [textbg, setTextBg] = useState("text__bg")
  const [textIcon, setTextIcon] = useState("")

  const showTextHandler = () => {
    setShowTexts((item) => !item)
    setTexts(<span></span>)
    setRead("Читать далее")
    setTextBg("text__bg")
    setTextIcon("")

    if (showTexts === false) {
      setTexts(text)
      setRead("Свернуть")
      setTextBg("")
      setTextIcon("text__icon")
    }
  }

  return (
    <div className="text mb-[60px]">
      <Container>
        <Title
          title="Оптовая продажа автотракторных запчастей"
          className="mb-[20px]"
        />
        <p>
          Гармоничное развитие всех подразделений компании в условиях
          современного рынка дает нам возможность вместе с нашими партнерами
          чувствовать уверенность в завтрашнем дне. <br /> <br /> Наша компания
          начала свой путь на рынке автозапчастей в 1993-м. <br />
          За 27 лет работы в условиях жесткой конкуренции мы приобрели
          колоссальный опыт, устойчивый, постоянно расширяемый рынок сбыта и
          огромное количество деловых партнеров, которые стали
          {texts}
        </p>
        <div className={textbg}></div>
        <div
          className="text__btn cursor-pointer w-[118px] h-[50px] flex mx-auto gap-2 items-center"
          onClick={showTextHandler}
        >
          <svg
            className={textIcon}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6L8 11L13 6"
              stroke="#6E7191"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span> {read} </span>
        </div>
      </Container>
    </div>
  )
}

export default Text
