import PlaceSelector from "../PlaceSelector/PlaceSelector";
import s from './WeatherDashboard.module.scss'

const WeatherDashboard = () => {
    return ( 
        <section>
            <PlaceSelector/>
            <div className="container">
                <div className={s.dashboard}>
                    <div className={s.dashboard_gen_info}>
                        <div className={s.dashboard__location}>
                            <h1>New York</h1>
                            <h3>United States</h3>
                        </div>
                        <div className={s.dashboard__temperature}>
                            <h1>23°</h1>
                        </div>
                    </div>
                    <div className={s.dashboard__additional_info}>
                        <div className={s.info__sky}>
                            <img src="../../assets/img/weatherIcons/crescent.svg" alt="weatherIcon"/>
                            <p>Clear Sky</p>
                        </div>
                        <div className={s.info__max}>
                            <img src="../../assets/img/dashboardIcons/maxTemp.svg" alt="arrow-up"/>
                            <p>27°</p>
                        </div>
                        <div className={s.info__mim}>
                            <img src="../../assets/img/dashboardIcons/minTemp.svg" alt="arrow-down"/>
                            <p>18°</p>
                        </div>
                        <div className={s.info__wind}>
                            <img src="../../assets/img/dashboardIcons/wind.svg" alt="wind"/>
                            <p>17km/h</p>
                        </div>
                        <div className={s.info__wind}>
                            <img src="../../assets/img/dashboardIcons/humidity.svg" alt="droplet"/>
                            <p>67°</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default WeatherDashboard;