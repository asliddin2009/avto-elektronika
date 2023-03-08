import "./Title.scss";

const Title = (props: { title: string, style?: {}, className?: string }) => {
  return (
    <h1 style={props.style} className={`title ${props.className}`}>{props.title}</h1>
  )
}

export default Title