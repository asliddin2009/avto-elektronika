import { ReactNode } from 'react'
import Container from '../Container/Container'
import PopCategoriesCard from './PopCategoriesCard/PopCategoriesCard'
import Title from '../Title/Title'
import './PopCategories.scss'

import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6 } from '../../images/icons'

const PopCategories = (props: { children?: ReactNode }) => {
  return (
    <div className="popcategories mb-[60px]">
      <Container>
          <Title title="Популярные категории" style={{marginBottom: "30px"}} />
          <div className='flex justify-between flex-wrap'>
            <PopCategoriesCard title='Стартеры и комплектующие' svg={<Svg1 />} />
            <PopCategoriesCard title='Термостаты' svg={<Svg2 />} />
            <PopCategoriesCard title='Датчики и комбинации приборов' svg={<Svg3 />} />
            <PopCategoriesCard title='Генераторы' svg={<Svg6 />} />
            <PopCategoriesCard title='Светотехника' svg={<Svg5 />} />
            <PopCategoriesCard title='Электродвигатели отопителя' svg={<Svg4 />} />
          </div>
      </Container>
    </div>
  )
}

export default PopCategories