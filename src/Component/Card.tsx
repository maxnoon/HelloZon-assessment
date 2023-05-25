import styles from './Card.module.css';

interface CardProps {
  content: string;
}

const Card = ({ content }: CardProps) => {
  return (
    <div className={styles.card}>
      {content}
    </div>
  );
}

export default Card;