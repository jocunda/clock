import axios from 'axios';
import styles from './clock.module.scss'
import { MdOutlineRefresh } from 'react-icons/md'
import { useEffect, useReducer } from 'react';
import { initialState, reducer } from './reducer/reducer';
import { ActionType } from '../types/type';

export default function Quotes() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await axios.get("https://api.quotable.io/random")
            .then((response) => {
                dispatch({
                    type: ActionType.quoteSuccess,
                    payload: {
                        quote: response.data.content,
                        author: response.data.author
                    }
                })
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: ActionType.quoteFailed
                })
            })
    }

    return <>
        <div className={styles.quotesContainer}>
            <div>
                <p className={styles.quotes}>{state.quote}</p>
                <p className={styles.author}>{state.author}</p>
            </div>
            <div className={styles.refreshIcon} onClick={() => getData()}>
                <MdOutlineRefresh />
            </div>
        </div>
    </>
}