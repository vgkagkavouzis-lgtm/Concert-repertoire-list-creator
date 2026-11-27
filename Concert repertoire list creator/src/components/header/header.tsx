import Styles from './header.module.css'
import Image from '/images/logo-03-bar-play.svg'

export function Header () {
    return(
        <div className={Styles.header}>
            <img src={Image}/>
                <h1>Build your playlist</h1>    

        </div>
    )
}