// import {useState} from 'react';
import s from './Scale.module.scss';

interface ScaleProps {
    currentUnit: string;
    onUnitChange: (value: string) => void;
}

const Scale: React.FC<ScaleProps> = ( {currentUnit, onUnitChange }) => {

    const handleUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {onUnitChange(e.target.value);};

    return ( 
            <div className={s.scale}>
                <label className={s.scale__item}>
                    <input 
                        type="radio" 
                        name="weather-unit" 
                        value="metric" 
                        checked={currentUnit === 'metric'} 
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
                        checked={currentUnit === 'imperial'} 
                        onChange={handleUnitChange}
                        className={s.scale__radio}
                    />
                    <span className={s.scale__text}>°F</span>
                </label>
        </div>
        
     );
}
 
export default Scale;