import "./HitsCard.scss"
import hitsCard from "../../../images/hitImg.png"

const HitsCard = (props: { seil?: string }) => {
  return (
    <div className="hitsCard">
      { props.seil && <span className="hitsCard__seil">{ props.seil }</span>}
      <img
        className="hitsCard__img mb-[20px]"
        src={hitsCard}
        alt="hitsCardImg"
      />
      <div className="hitsCard__price mb-[8px]">
        <span>999999 ₽</span>
        <del>999999 ₽</del>
      </div>
      <div className="hitsCard__text mb-[8px]">
        Фара светодиодная дополнительная круглая, направленный свет, 14 диодов,
        42W, (115х42х142)
      </div>
      <p className="hitsCard__num mb-[20px]">
        Кат. номер: <br />
        <span>AE42R-14LED-42HC</span>
      </p>
      <a  href="#!" className="hitsCard__link">
        <svg
            className="w-[30px] h-[30px]"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.875 1.875H4.80041C5.35867 1.87501 5.90013 2.05828 6.33489 2.39439C6.76964 2.7305 7.07154 3.19923 7.19045 3.72274L7.98155 7.18309M7.98155 7.18309L9.33073 14.3458C9.63218 15.9718 10.5193 17.4445 11.8371 18.5065C13.1548 19.5686 14.8195 20.1525 16.5403 20.1563H19.8409C21.506 20.1529 23.1204 19.606 24.4188 18.6055C25.7173 17.6051 26.6226 16.2105 26.986 14.6509L28.2347 9.34624C28.2964 9.08804 28.2968 8.81983 28.2358 8.56148C28.1748 8.30313 28.0541 8.06125 27.8825 7.85374C27.711 7.64624 27.493 7.47843 27.2447 7.36274C26.9964 7.24704 26.7242 7.18643 26.4482 7.18538L7.98155 7.18309Z"
              stroke="#6E7191"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M11.0157 28.125C11.5767 28.125 12.0314 27.6703 12.0314 27.1094C12.0314 26.5485 11.5767 26.0938 11.0157 26.0938C10.4548 26.0938 10.0001 26.5485 10.0001 27.1094C10.0001 27.6703 10.4548 28.125 11.0157 28.125Z"
              stroke="#6E7191"
              strokeWidth="2"
            />
            <path
              d="M25.2343 28.125C25.7952 28.125 26.2499 27.6703 26.2499 27.1094C26.2499 26.5485 25.7952 26.0938 25.2343 26.0938C24.6733 26.0938 24.2186 26.5485 24.2186 27.1094C24.2186 27.6703 24.6733 28.125 25.2343 28.125Z"
              stroke="#6E7191"
              strokeWidth="2"
            />
        </svg>
        <span>В корзину</span>
      </a>
    </div>
  )
}

export default HitsCard
