import '../../scss/style.scss';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container footer__columns">
            <div className="footer__column">
                <h3 className="footer__column-title">Помощь</h3>
                <ul className="footer__column-list">
                    <li className="footer__column-item"><a className="footer__link">Статус заказа по номеру</a></li>
                    <li className="footer__column-item"><a className="footer__link">Центр поддержки Lamoda</a></li>
                    <li className="footer__column-item"><a className="footer__link">Как оформить заказ</a></li>
                    <li className="footer__column-item"><a className="footer__link">Как выбрать размер</a></li>
                    <li className="footer__column-item"><a className="footer__link">Условия доставки</a></li>
                </ul>
            </div>

            <div className="footer__column">
                <h3 className="footer__column-title">О нас</h3>
                <ul className="footer__column-list">
                    <li className="footer__column-item">
                        <ul class="footer__column-icons">
                            <li><a target="_blank" className="footer__social-item footer__social-item_fb"></a></li>
                            <li><a target="_blank" className="footer__social-item footer__social-item_vk"></a></li>
                            <li><a target="_blank" className="footer__social-item footer__social-item_yt"></a></li>
                            <li><a target="_blank" className="footer__social-item footer__social-item_ig"></a></li>
                        </ul>
                    </li>
                    <li className="footer__column-item"><a className="link footer__link">Fashion-блог Lamoda</a></li>
                    <li className="footer__column-item"><a className="link footer__link">Подарочные сертификаты Lamoda</a></li>
                    <li className="footer__column-item"><a className="link footer__link" target="_blank">Вакансии</a></li>
                </ul>
            </div>

            <div className="footer__column">
                <h3 className="footer__column-title">Способы оплаты</h3>
                <ul className="footer__column-icons">
                    <li className="footer__column-icon footer__icon-mastercard"></li>
                    <li className="footer__column-icon footer__icon-visa"></li>
                    <li className="footer__column-icon footer__icon-mir"></li>
                </ul>
                <p className="footer__text" >
                    Вы можете оплатить покупки<br />наличными при получении, либо<br />выбрать другой способ оплаты.
                </p>
            </div>

            <div className="footer__column">
                <h3 className="footer__column-title">Для мобильных устройств</h3>
                <ul className="footer__column-icons footer__column-icons__app">
                    <li><a target="_blank" className="footer__block-icon footer__icon-appstore"></a></li>
                    <li><a target="_blank" className="footer__block-icon footer__icon-googleplay" ></a></li>
                    <li><a target="_blank" className="footer__block-icon footer__icon-huaweistore"></a></li>
                </ul>
            </div>
        </div>
    </footer>
    )
};

export default Footer;