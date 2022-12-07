import styles from './shared-react-test-ui.module.scss';

/* eslint-disable-next-line */
export interface TextProps {
  text?: string
}

export function Text(props: TextProps) {
  return (
    <span className={styles['container']}>
      Welcome, {props.text || 'World'}
    </span>
  );
}

export default Text;
