import AutopartsCard from "./AutopartsCard/AutopartsCard"
import Container from "../Container/Container"
import Title from "../Title/Title"
import "./Autoparts.scss"
import { img1, img2, img3, img4, img5, img6, img7} from "../../images/autoparts/autopartsImages"

const Autoparts = () => {
  return (
    <div className="autoparts mb-[60px]">
      <Container>
        <Title title="Автозапчасти к технике" className="mb-[30px]" />
        <div className="autopartsCards flex justify-between">
          <AutopartsCard img={img1} text="Грузовые" />
          <AutopartsCard img={img2} text="Трактора" />
          <AutopartsCard img={img3} text="Легковые" />
          <AutopartsCard img={img4} text="Сельхозтехника" />
          <AutopartsCard img={img5} text="Автобусы" />
          <AutopartsCard img={img6} text="Спецтехника" />
          <AutopartsCard img={img7} text="Другое" />
        </div>
      </Container>
    </div>
  )
}

export default Autoparts
