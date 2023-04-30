import styles from "../../styles/Cardn.module.css"
function Card(){
   return(
    <div className={styles.main}>
       <div className={styles.items}>
	<li>
		<div className={styles.bgimg} ></div>
		<a href="#">
			<div className={styles.content}>
				<h2>Orange is the new black</h2>
			</div>
		</a>
	</li>
    <li>
		<div className={styles.bgimg} ></div>
		<a href="#">
			<div className={styles.content}>
				<h2>Orange is the new black</h2>
			</div>
		</a>
	</li>
    <li>
		<div className={styles.bgimg} ></div>
		<a href="#">
			<div className={styles.content}>
				<h2>Orange is the new black</h2>
			</div>
		</a>
	</li>
    </div>
    </div>
   )
}


export default Card;