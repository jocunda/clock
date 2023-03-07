import { useEffect, useReducer, useState } from 'react'
import styles from './clock.module.scss'
import axios from 'axios';
import cx from 'classnames'
import { WiSunrise } from 'react-icons/wi'
import { BsMoonFill, BsSun } from 'react-icons/bs'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'
import Quotes from './quotes'
import MoreInfo from './moreinfo'
import { initialState, reducer } from './reducer/reducer';
import { ActionType } from '../types/type';
import moment from "moment-timezone";


export default function Clock() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [showMore, setShowMore] = useState<boolean>(false)

    const classSelector = () => {
        switch (state.greeting) {
            case "GOOD DAY": return cx(styles.clockContainer, styles.clockback1)
            case "GOOD EVENING": return cx(styles.clockContainer, styles.clockback2)
            case "GOOD MORNING": return styles.clockContainer
            default:
                return ""
        }
    }

    useEffect(() => {
        getTime();
    }, [])

    const getTime = async () => {
        await axios.get("https://worldtimeapi.org/api/ip/")
            .then((response) => {
                dispatch({
                    type: ActionType.timeSuccess,
                    payload: {
                        time: response.data.datetime,
                        abbreviation: response.data.abbreviation,
                        dayOfWeek: response.data.day_of_week,
                        dayOfYear: response.data.day_of_year,
                        weekNum: response.data.week_number,
                        timeZone: response.data.timezone,
                    }
                })
                axios.get("https://ipapi.co/json/")
                    .then((response) => {
                        dispatch({
                            type: ActionType.locationSuccess,
                            payload: {
                                city: response.data.city,
                                country: response.data.country,
                            }
                        })
                    })
                    .catch((error) => {
                        console.log("IP API error", error);
                    })
            })
            .catch((error) => {
                console.log("Time API error", error);
            })
    }


    return <>
        <div className={classSelector()}>
            {showMore ? "" : <Quotes />}
            {state.time ? (
                <div className={showMore ? cx(styles.timeContainer, styles.timeContainerMoveUp) : styles.timeContainer}>
                    <div className={styles.greetingContainer}>
                        <p className={styles.greetingsWord}>
                            {(() => {
                                switch (state.greeting) {
                                    case "GOOD MORNING": return <WiSunrise className={styles.greetingIcon} />
                                    case "GOOD DAY": return <BsSun className={styles.greetingIcon} />
                                    case "GOOD EVENING": return <BsMoonFill className={styles.greetingIcon} />
                                    default:
                                        return <></>
                                }
                            })()}
                            {state.greeting}
                        </p>
                        <p>, It's currently</p>
                    </div>

                    <div className={styles.timeDetail}>
                        <h1>{state.time?.substring(11, 16)}</h1>
                        <p>{moment.tz(state.timeZone).format('z')}</p>
                    </div>
                    <div className={styles.positionContainer}>
                        <p className={styles.locationDetail}>In {state.city}, {state.country}</p>
                        <button className={styles.moreButton}
                            onClick={() => setShowMore(!showMore)}>
                            {showMore ? 'LESS' : 'MORE'}
                            {showMore ? <IoIosArrowDropupCircle className={styles.moreButtonIcon} /> : <IoIosArrowDropdownCircle className={styles.moreButtonIcon} />}
                        </button>
                    </div>
                </div>) : ""}

            <div className={showMore ? styles.moreDayContainer : styles.moreDayHidden}>
                <MoreInfo
                    timeZone={state.timeZone}
                    dayOfWeek={state.dayOfWeek}
                    dayOfYear={state.dayOfYear}
                    weekNum={state.weekNum}
                />
            </div>

        </div>
    </>
}