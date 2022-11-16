import { useState } from 'react'
import styles from './clock.module.scss'

import cx from 'classnames'
import { WiSunrise } from 'react-icons/wi'
import { BsMoonFill, BsSun } from 'react-icons/bs'
import { MdArrowDropDownCircle } from 'react-icons/md'


export default function Clock() {
    const [daystatus, setDaystatus] = useState(1)

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
            <div className={styles.timeContainer}>
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
                    <button className={styles.moreButton}>MORE<MdArrowDropDownCircle className={styles.moreButtonIcon} /></button>
                </div>

            </div>

        </div>
    </>
}