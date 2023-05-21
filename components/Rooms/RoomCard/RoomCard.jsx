import Image from 'next/image';
import styles from './RoomCard.module.scss';
import Link from 'next/link';
export default function RoomCard({title, rent, currency, deposit, security, postedTime, images, location}) {
  return (
    <div className={styles['room-card']}>
      <Image src={images} width={300} height={175} alt={title}/>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.info}>
        <div className={styles.price}><b>Rent:</b> ₹{rent}</div>
        <div className={styles.deposit}><b>Deposite:</b> ₹{deposit}</div>
        <div className={styles.security}><b>Security:</b> ₹{security}</div>
      </div>
      <div className={styles.location}>{location}</div>
      <Link href="/" className={styles['view-btn']}>View All</Link>
    </div>
  )
}
