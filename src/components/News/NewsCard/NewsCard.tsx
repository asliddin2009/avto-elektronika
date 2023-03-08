import './NewsCard.scss'
import cardImg from '../../../images/news.png'

const NewsCard = () => {
  return (
    <div className="newsCard">
      <div className="newsCard__img">
        <span>Новость</span>
        <img src={cardImg} alt="cardImg" />
      </div>
      <a className='newsCard__title' href="#!">
        <h2 className="newsCard__title mt-[12px]">Заголовок в две строчки или в три строчки</h2>
      </a>
      <div className="newsCard__date flex items-center gap-2 mt-5">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9308 3H3.06917C1.9264 3 1 3.82829 1 4.85004V13.15C1 14.1717 1.9264 15 3.06917 15H12.9308C14.0736 15 15 14.1717 15 13.15V4.85004C15 3.82829 14.0736 3 12.9308 3Z" stroke="#A0A3BC" strokeWidth="2"/>
<path d="M4.5 3C4.5 3.27614 4.27614 3.5 4 3.5C3.72386 3.5 3.5 3.27614 3.5 3V1C3.5 0.723858 3.72386 0.5 4 0.5C4.27614 0.5 4.5 0.723858 4.5 1V3Z" stroke="#A0A3BC" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C12.5 3.27614 12.2761 3.5 12 3.5C11.7239 3.5 11.5 3.27614 11.5 3V1C11.5 0.723858 11.7239 0.5 12 0.5C12.2761 0.5 12.5 0.723858 12.5 1V3Z" stroke="#A0A3BC" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1 5.5C0.723858 5.5 0.5 5.72386 0.5 6C0.5 6.27614 0.723858 6.5 1 6.5H15C15.2761 6.5 15.5 6.27614 15.5 6C15.5 5.72386 15.2761 5.5 15 5.5H1Z" stroke="#A0A3BC" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.62317 8.60718C4.34703 8.60718 4.12317 8.83104 4.12317 9.10718C4.12317 9.38332 4.34703 9.60718 4.62317 9.60718H5.97081C6.24695 9.60718 6.47081 9.38332 6.47081 9.10718C6.47081 8.83104 6.24695 8.60718 5.97081 8.60718H4.62317Z" stroke="#A0A3BC" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.83997 8.60718C9.56382 8.60718 9.33997 8.83104 9.33997 9.10718C9.33997 9.38332 9.56382 9.60718 9.83997 9.60718H11.1876C11.4637 9.60718 11.6876 9.38332 11.6876 9.10718C11.6876 8.83104 11.4637 8.60718 11.1876 8.60718H9.83997Z" stroke="#A0A3BC" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.62317 11.5596C4.34703 11.5596 4.12317 11.7834 4.12317 12.0596C4.12317 12.3357 4.34703 12.5596 4.62317 12.5596H5.97081C6.24695 12.5596 6.47081 12.3357 6.47081 12.0596C6.47081 11.7834 6.24695 11.5596 5.97081 11.5596H4.62317Z" stroke="#A0A3BC" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.83997 11.5596C9.56382 11.5596 9.33997 11.7834 9.33997 12.0596C9.33997 12.3357 9.56382 12.5596 9.83997 12.5596H11.1876C11.4637 12.5596 11.6876 12.3357 11.6876 12.0596C11.6876 11.7834 11.4637 11.5596 11.1876 11.5596H9.83997Z" stroke="#A0A3BC" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p>28.09.2022</p>
      </div>
    </div>
  )
}

export default NewsCard