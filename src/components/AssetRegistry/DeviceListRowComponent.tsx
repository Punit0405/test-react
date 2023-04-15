import Moment from 'react-moment';
import AssetActiveComp from './AssetActiveComp'
import AssetTableNameComp from './AssetTableNameComp';
import styles from "./DeviceListRowComponent.module.css"
interface Props {
  lastModified: string
  deviceType: string
  status: "Active" | "For Sale" | "Lost"
  deviceName: string
}

const DeviceListRowComponent = ({ lastModified, deviceName, deviceType, status }: Props) => {
  return (

    <tr className={styles.tableData}>
      <td><AssetTableNameComp name={deviceName} /></td>
      <td><div className={styles.tableDiv}>{deviceType}</div></td>
      <td><div className={styles.tableDiv}><Moment format="MMMM  Do, YYYY">{lastModified}</Moment></div></td>
      <td><AssetActiveComp active={status} /></td>
    </tr>
  )
}

export default DeviceListRowComponent