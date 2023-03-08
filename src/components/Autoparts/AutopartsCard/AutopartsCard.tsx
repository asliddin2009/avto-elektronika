import "./AutopartsCard.scss"

const AutopartsCard = (props: { img: string; text: string }) => {
  return (
    <a href="#!">
      <div className="autopartsCard">
        <img src={props.img} alt="" />
        <h2 className="autopartsCard__title">{props.text}</h2>
      </div>
    </a>
  )
}

export default AutopartsCard
