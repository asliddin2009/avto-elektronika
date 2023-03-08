import Container from "../Container/Container"
import HitsCard from "./HitsCard/HitsCard"
import Title from "../Title/Title"
import "./Hits.scss"

const Hits = () => {
  return (
    <div className="hits mb-[60px]">
      <Container>
        <Title title="Хиты продаж" className="mb-[30px]" />
        <div className="hits__cards flex justify-between gap-5">
          <HitsCard seil="Акция" />
          <HitsCard />
          <HitsCard seil="Акция" />
          <HitsCard />
          <HitsCard />
          <HitsCard />
        </div>
      </Container>
    </div>
  )
}

export default Hits