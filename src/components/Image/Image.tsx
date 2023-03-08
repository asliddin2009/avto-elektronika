import imgBG from '../../images/imgbc.png'
import Container from '../Container/Container'

const Image = (props: { className?: string }) => {
  return (
    <Container>
      <img className={props.className} src={imgBG} alt="" />
    </Container>
  )
}

export default Image