import '../../scss/style.scss';
import beach from '../../image/beach.jpg';
import sport from '../../image/sport.jpg';
import umbrella from '../../image/umbrella.jpg';
import premium from '../../image/premium.jpg';
import sneakers from '../../image/sneakers.jpg';
import child from '../../image/child.jpg';

const Main = () => {
    return (
        <div>
           <section className="promo">
            <div className="container">
                <ul className="promo__grid">
                    <li className="promo__grid-item promo__grid-item__big"><img className="promo__grid-image" src={beach} alt="Девушка на пляже" /></li>
                    <li className="promo__grid-item promo__grid-item__small"><img className="promo__grid-image" src={sport} alt="Девушка на спорте" /></li>
                    <li className="promo__grid-item promo__grid-item__small"><img className="promo__grid-image" src={umbrella} alt="Девушка с зонтом" /></li>
                </ul>

                <ul className="promo__grid promo__grid-reverse">
                    <li className="promo__grid-reverse-item promo__grid-reverse-item__big"><img className="promo__grid-image" src={premium} alt="Девушка в деловом стиле" /></li>
                    <li className="promo__grid-reverse-item promo__grid-reverse-item__small"><img className="promo__grid-image" src={sneakers} alt="Кроссовки" /></li>
                    <li className="promo__grid-reverse-item promo__grid-reverse-item__small"><img className="promo__grid-image" src={child} alt="Два ребенка" /></li>
                </ul>
            </div>
        </section>

        <div className='main'>
            <h1>
                MAIN
            </h1>
            <p className='text'>
                Одной из причин быстрого роста популярности flexbox среди веб-разработчиков было то, 
                что впервые были предоставлены адекватные возможности выравнивания. Он предоставил 
                адекватное вертикальное выравнивание, и стало возможным, наконец, легко поместить 
                элемент в центр по вертикали. В этом руководстве детально рассматривается, как 
                выравнивание и распределение работают во Flexbox.
            </p>
        </div> 
        </div>
        
    )
};

export default Main;