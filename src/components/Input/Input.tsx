import Container from "../Container/Container"
import "./Input.scss"

const Input = () => {
  return (
    <Container>
      <div className="input mb-[30px]">
        <h1 className="input__title">Выберите категорию рассылки</h1>
        <form className="input__wrapper mb-[30px] flex justify-between">
          <div className="flex">
            <div className="input__radio">
              <input type="radio" name="radio" />
              <label>Электронная версия каталога продукции</label>
            </div>
            <div className="input__radio">
              <input type="radio" name="radio" />
              <label>Прайс-лист с актуальными ценами</label>
            </div>
            <div className="input__radio">
              <input type="radio" name="radio" />
              <label>Информация о новинках и акциях</label>
            </div>
          </div>
          <div className="flex gap-[15px] w-[100%] max-w-[600px]">
            <input type="text" placeholder="Введите Ваш e-mail" />
            <button>Подписаться</button>
          </div>
        </form>
        <p>
          Нажимая «Подписаться», вы соглашаетесь с
          <a style={{textDecoration: "underline"}} href="#!"> политикой конфиденциальности</a>
        </p>
      </div>
    </Container>
  )
}

export default Input
