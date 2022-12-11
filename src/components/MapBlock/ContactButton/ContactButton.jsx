import React from 'react'
import { Button } from '../../Button/Button'
import styles from './ContactButton.module.css'

export const ContactButton = ({onClick}) => {
	return <Button onClick={onClick} className={styles.root}>Связаться с нами</Button>
}
