import s from './PlaceSelector.module.scss'

const PlaceSelector = () => {
    return ( 
        <header >
            <div className='container'>
                <div className={s.dashboard_header}>
                    <div className={s.dashboard_header__info}>
                        <h1 className={s.dashboard_header__logo}>Weather Forecast</h1>
                        <h3>Saturday  27, September 2024 </h3>
                    </div>
                    <div className={s.dashboard_header__search}>
                        <input type='text' placeholder='Search city'/>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default PlaceSelector;