import '../../scss/style.scss';
import logo35 from '../../image/35.svg';

const Header = () => {
    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <button className="header__city-button"> Укажите свой город </button>
                <div className="header__right-block">
                  <p className="header__delivery">Бесконтактная доставка</p>
                  <p className="header__pay">Платите чем хотите</p>
                  <div className="header__birthday">
                    <span>нам </span>
                    <img className="header__birthday-img" src={logo35} alt="35 лет" />
                    <span>лет!</span>
                  </div>
                </div>
          </div>
        </div>
      </header>
    )
};

export default Header;