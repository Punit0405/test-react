import styles from "./AssetRegisteryChartComp.module.css";

interface Props { 
    percentage : string,
    categoryTitle : string
}

const AssetRegisteryChartComp = ({percentage,categoryTitle}:Props) => {
  return (
    <div className={styles.cellphone}>
    <div className={styles.labellegendlight}>
      <div className={styles.labellegendlightChild} />
      <div className={styles.cellPhone}>{categoryTitle}</div>
    </div>
    <div >{[percentage]}</div>
  </div>
  );
};

export default AssetRegisteryChartComp;