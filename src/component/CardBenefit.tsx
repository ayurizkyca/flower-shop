import React from 'react'
import styles from './CardCategory.module.css'

interface Props {
	title: String;
	desc: String
}

const CardBenefit: React.FC<Props> = ({ title, desc }) => {
	return (
		<div className={styles.cardBenefit}>
			<h2>{title}</h2>
			<p>{desc}</p>
		</div>
	)
}

export default CardBenefit