import styles from './clock.module.scss'

export default function MoreInfo({ timeZone, dayOfWeek, dayOfYear, weekNum }: any) {
    return <>
        <div className={styles.column1Container}>
            <h3>current timezone</h3>
            <p>{timeZone}</p>
            <h3>day of the year</h3>
            <p>{dayOfYear}</p>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.column2Container}>
            <h3>day of the week</h3>
            <p>{dayOfWeek}</p>
            <h3>week number</h3>
            <p>{weekNum}</p>
        </div>
    </>
}
