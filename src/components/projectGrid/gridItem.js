import styles from './gridItem.module.scss';

const GridItem = ({ shadow, title, href }) => (
  <li className={styles.gridItem}>
    <figure className={styles.gridItemFigure}>
      <Img fluid="" className={classNames(styles.gridItemImage, { [styles.isShadow]: shadow })} />
    </figure>
    <div className={styles.gridItemDetails}>
      <h3 className={styles.gridItemTitle}>
        <a href={href}>{ title }</a>
      </h3>
    </div>
  </li>
)

export default GridItem
