import "./AboutCard.scss"

const AboutCard = (props: { icon: string }) => {
  return (
    <div className="aboutCard">
      <img src={props.icon} alt="ICON" />
      <div className="aboutCard__wrapper">
        <h2 className="aboutCard__title">Динамично</h2>
        <p className="aboutCard__text">Мы предлагаем более 15000 наименований запчастей на все виды автотранспортных средств, тракторную и сельхозтехнику, спецтехнику.</p>
      </div>
    </div>
  )
}

export default AboutCard