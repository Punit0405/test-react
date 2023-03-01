import { FunctionComponent, useState } from "react";
import { Table } from "react-bootstrap";
import AssetNavBar from "./AssetNavBar";
import styles from "./DeviceList.module.css";



const AssetDeviceList: FunctionComponent = () => {
  return (
    <section className={styles.rightcontainer}>
      <AssetNavBar navTitle="My Devices" />
  
     <div className={styles.deviceListComp}>
    <Table >
      <thead>
        <tr className={styles.tableHeading}>
          <td>File Name</td>
          <td>File Items</td>
          <td>Last Modified</td>
          <td>Device Status</td>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.tableData}>
          <td>CamCo</td>
          <td>camera</td>
          <td>20 mins ago</td>
          <td>Active</td>
        </tr>
      </tbody>
    </Table>
     </div>
      
      
    </section>
  );
};

export default AssetDeviceList;