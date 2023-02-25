import styles from "./CardComponent.module.css"

interface Props {
    topTitle:string,
    middleTitle:string,
    bottomTitle:string,
    backgroudBox:string,
    iconImage:string,
    classname:string
    

}

const CardComponent = ({ classname,topTitle ,middleTitle  ,bottomTitle , backgroudBox , iconImage}: Props) => {
    return (
        <div className={styles[`${classname}`]}>
        <div className={styles.rectangleParent}>
          <div className={styles.clientsGroup}>
            <h5>{topTitle}</h5>
            <h5>{middleTitle}</h5>
            <h5>{bottomTitle}</h5>
          </div>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.frameItem}
              alt=""
              src={backgroudBox}
            />
            <img
              className={styles.h38ch38bm0014iconset0111}
              alt=""
              src={iconImage}
            />
          </div>
        </div>
      </div>
    );
};

export default CardComponent;
