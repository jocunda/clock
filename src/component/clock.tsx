import { useState } from 'react'
import styles from './clock.module.scss'

import cx from 'classnames'
import { WiSunrise } from 'react-icons/wi'
import { BsMoonFill, BsSun } from 'react-icons/bs'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'


export default function Clock() {
    const [daystatus, setDaystatus] = useState<number>(1)
    const [showMore, setShowMore] = useState<boolean>(false)

    const classselector = () => {
        if (daystatus === 1) {
            return cx(styles.clockContainer, styles.clockback1)
        } else if (daystatus === 2) {
            return cx(styles.clockContainer, styles.clockback2)
        } else {
            return styles.clockContainer
        }
    }

    return <>
        <div className={classselector()}>
            <div className={styles.quotesContainer}>
                <p className={styles.quotes}>"Aute consequat consequat dolor voluptate aliquip aliqua dolor sunt. Labore cupidatat velit quis eu aute dolore amet consectetur qui. Enim nostrud do fugiat pariatur amet sit consequat fugiat non eiusmod sit adipisicing. Irure laboris aliqua ullamco ad et eu minim exercitation."</p>
                <p className={styles.author}>Name Author</p>
            </div>
            <div className={showMore ? cx(styles.timeContainer, styles.timeContainerMoveUp) : styles.timeContainer}>
                <div className={styles.greetingContainer}>
                    <p className={styles.greetingsWord}><WiSunrise className={styles.greetingIcon} />Good morning</p>
                    <p>, It's currently</p>
                    {/* <BsSun />
                <BsMoonFill /> */}
                </div>
                <div className={styles.timeDetail}>
                    <h1>11:39</h1>
                    <p>BST</p>
                </div>
                <div className={styles.positionContainer}>
                    <p className={styles.locationDetail}>In London, UK</p>
                    <button className={styles.moreButton}
                        onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'LESS' : 'MORE'}
                        {showMore ? <IoIosArrowDropupCircle className={styles.moreButtonIcon} /> : <IoIosArrowDropdownCircle className={styles.moreButtonIcon} />}
                    </button>
                </div>
            </div>
            <div className={showMore ? styles.moreDayContainer : styles.moreDayHidden}>
                <div className={styles.column1Container}>
                    <h3>current timezone</h3>
                    <p>Europe/London</p>
                    <h3>day of the year</h3>
                    <p>295</p>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.column2Container}>
                    <h3>day of the week</h3>
                    <p>5</p>
                    <h3>week number</h3>
                    <p>42</p>
                </div>

            </div>

        </div>
    </>
}