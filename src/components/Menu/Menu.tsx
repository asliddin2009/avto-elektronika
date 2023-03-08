const Menu = () => {
  return (
    <nav className="menu flex justify-between items-center mb-10">
      <p className="menu__item">Динамично. Надежно. Доступно.</p>
      <div className="lang flex gap-[4px] items-center">
        <svg
          className="langIcon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4043_1161)">
            <mask
              id="mask0_4043_1161"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <circle cx="10" cy="10" r="10" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_4043_1161)">
              <path d="M21.2987 0H-1.42859V9.99091H21.2987V0Z" fill="white" />
              <path
                d="M21.2987 9.99097H-1.42859V20.0001H21.2987V9.99097Z"
                fill="#D52B1E"
              />
              <path
                d="M21.2987 6.65454H-1.42859V13.3091H21.2987V6.65454Z"
                fill="#0039A6"
              />
            </g>
          </g>
          <circle cx="10" cy="10" r="9.5" stroke="#6E7191" />
          <defs>
            <clipPath id="clip0_4043_1161">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <select aria-checked name="langSelect" id="langSelect">
          <option value="ru">RU</option>
          <option value="ru">EN</option>
        </select>
        <svg
          className="dropDown"
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="#A0A3BC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <ul className="menu__list flex justify-between gap-6">
        <li className="list-item">
          <a href="#!">О компании</a>
        </li>
        <li className="list-item">
          <a href="#!">Клиентам</a>
        </li>
        <li className="list-item">
          <a href="#!">Сотрудничество</a>
        </li>
        <li className="list-item">
          <a href="#!">Контакты</a>
        </li>
      </ul>
      <div className="social flex gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.37097 0 0 5.37097 0 12C0 18.629 5.37097 24 12 24C18.629 24 24 18.629 24 12C24 5.37097 18.629 0 12 0ZM17.8548 8.22581L15.9194 17.5161C15.7742 18.1935 15.3871 18.3387 14.8065 18.0484L11.8065 15.8226L10.3548 17.2258C10.2097 17.371 10.0645 17.5161 9.77419 17.5161L9.96774 14.4677L15.5323 9.43548C15.7742 9.24194 15.4839 9.09677 15.1452 9.29032L8.27419 13.6452L5.32258 12.7258C4.69355 12.5323 4.69355 12.0484 5.46774 11.7581L17.0323 7.30645C17.5645 7.1129 18.0484 7.45161 17.8548 8.22581Z"
            fill="#6E7191"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.687 1.687C0 3.374 0 6.08952 0 11.52V12.48C0 17.9105 0 20.626 1.687 22.313C3.374 24 6.08952 24 11.52 24H12.48C17.9105 24 20.626 24 22.313 22.313C24 20.626 24 17.9105 24 12.48V11.52C24 6.08952 24 3.374 22.313 1.687C20.626 0 17.9105 0 12.48 0H11.52C6.08952 0 3.374 0 1.687 1.687ZM4.05 7.30002H6.79002C6.88002 11.88 8.89998 13.82 10.5 14.22V7.30002H13.08V11.25C14.66 11.08 16.32 9.28002 16.88 7.30002H19.46C19.2489 8.32687 18.8282 9.29909 18.2243 10.156C17.6203 11.0129 16.8461 11.7359 15.95 12.28C16.9505 12.7767 17.8343 13.4802 18.5428 14.3438C19.2513 15.2075 19.7684 16.2117 20.06 17.29H17.22C16.9583 16.3533 16.4257 15.5148 15.6892 14.8797C14.9527 14.2446 14.045 13.8411 13.08 13.72V17.29H12.77C7.30002 17.29 4.18 13.54 4.05 7.30002Z"
            fill="#6E7191"
          />
        </svg>
      </div>
      <div className="tels">
        <a href="tel:977663532">8 (800) 455-45-11</a>
      </div>
      <div>
        <a
          href="tel:977663532"
          className="tel call flex items-center gap-[5px]"
        >
          <svg
            className="svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.15312 0.769455C4.9125 0.188205 4.27812 -0.12117 3.67188 0.0444546L0.921875 0.794455C0.378125 0.944455 0 1.4382 0 2.0007C0 9.73195 6.26875 16.0007 14 16.0007C14.5625 16.0007 15.0563 15.6226 15.2063 15.0788L15.9563 12.3288C16.1219 11.7226 15.8125 11.0882 15.2312 10.8476L12.2312 9.59758C11.7219 9.38508 11.1313 9.53195 10.7844 9.96008L9.52188 11.5007C7.32188 10.4601 5.54063 8.67883 4.5 6.47883L6.04063 5.21945C6.46875 4.86945 6.61562 4.28195 6.40312 3.77258L5.15312 0.77258V0.769455Z"
              fill="currentcolor"
            />
          </svg>
          <span>Заказть звонок</span>
        </a>
      </div>
    </nav>
  )
}

export default Menu
