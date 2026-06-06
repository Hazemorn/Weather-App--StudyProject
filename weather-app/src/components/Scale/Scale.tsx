import s from './Scale.module.scss';

const Scale = () => {
    return ( 
        <div className={s.scale}>
            <div className={s.scale__item}>
                <p>°C</p>
            </div>
            <div className={s.scale__item}>
                <p>°F</p>
                </div>
        </div>
     );
}
 
export default Scale;