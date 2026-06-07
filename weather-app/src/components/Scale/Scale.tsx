import {useState} from 'react';
import s from './Scale.module.scss';

const Scale = () => {
    const [unit, setUnit] = useState<string>('C');

    const handleUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {setUnit(e.target.value);};
   
    return ( 
        <div className='container'>
            <div className={s.scale}>
                <label className={s.scale__item}>
                    <input 
                        type="radio" 
                        name="weather-unit" 
                        value="C" 
                        checked={unit === 'C'} 
                        onChange={handleUnitChange}
                        className={s.scale__radio}
                    />
                    <span className={s.scale__text}>°C</span>
                </label>
                <label className={s.scale__item}>
                    <input 
                        type="radio" 
                        name="weather-unit" 
                        value="F" 
                        checked={unit === 'F'} 
                        onChange={handleUnitChange}
                        className={s.scale__radio}
                    />
                    <span className={s.scale__text}>°F</span>
                </label>

            {/* <div className={s.scale__item}>
                <p>°C</p>
            </div> */}
            {/* <div className={s.scale__item}>
                <p>°F</p>
                </div> */}
        </div>
        </div>
        
     );
}
 
export default Scale;