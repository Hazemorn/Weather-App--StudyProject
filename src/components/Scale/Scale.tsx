// import {useState} from 'react';
import { useContext } from 'react';
import s from './Scale.module.scss';
import { WeatherContext } from '../../context/weatherContext';

// interface ScaleProps {
//     currentUnit: string;
//     onUnitChange: (value: string) => void;
// }

//const Scale: React.FC<ScaleProps> = ( {currentUnit, onUnitChange }) => {

const Scale= () => {
    const {unit, setUnit} = useContext(WeatherContext);
    const handleUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {setUnit(e.target.value);};//onUnitChange

    return ( 
            <div className={s.scale}>
                <label className={s.scale__item}>
                    <input 
                        type="radio" 
                        name="weather-unit" 
                        value="metric" 
                        checked={unit === 'metric'} //currentUnit
                        onChange={handleUnitChange}
                        className={s.scale__radio}
                    />
                    <span className={s.scale__text}>°C</span>
                </label>
                <label className={s.scale__item}>
                    <input 
                        type="radio" 
                        name="weather-unit" 
                        value="imperial" 
                        checked={unit === 'imperial'}  //currentUnit
                        onChange={handleUnitChange}
                        className={s.scale__radio}
                    />
                    <span className={s.scale__text}>°F</span>
                </label>
        </div>
        
     );
}
 
export default Scale;