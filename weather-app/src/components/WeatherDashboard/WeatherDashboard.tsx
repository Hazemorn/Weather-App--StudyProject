import PlaceSelector from "../PlaceSelector/PlaceSelector";
import s from './WeatherDashboard.module.scss'

const WeatherDashboard = () => {
    return ( 
        <section>
            <PlaceSelector/>
            <div className="container">
                <div className={s.dashboard}>
                    <div className={s.dashboard__gen_info}>
                        <div className={s.dashboard__location}>
                            <h1>New York</h1>
                            <p>United States</p>
                        </div>
                        <div className={s.dashboard__temperature}>
                            <h1>23°</h1>
                        </div>
                    </div>
                    <div className={s.dashboard__additional_info}>
                        <div className={s.dashboard__info__sky}>
                            <img src="/weatherIcons/crescent.svg" alt="weatherIcon"/>
                            <p>Clear Sky</p>
                        </div>
                        <div className={s.dashboard__info__items}>
                            <div className={s.dashboard__info__item}>
                                <img src="/dashboardIcons/maxTemp.svg" alt="arrow-up"/>
                                <p>27°</p>
                            </div>
                            <div className={s.dashboard__info__item}>
                                <img src="/dashboardIcons/minTemp.svg" alt="arrow-down"/>
                                <p>18°</p>
                            </div>
                            <div className={s.dashboard__info__item}>
                                <img src="/dashboardIcons/wind.svg" alt="wind"/>
                                <p>17km/h</p>
                            </div>
                            <div className={s.dashboard__info__item}>
                                <img src="/dashboardIcons/humidity.svg" alt="droplet"/>
                                <p>67°</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default WeatherDashboard;