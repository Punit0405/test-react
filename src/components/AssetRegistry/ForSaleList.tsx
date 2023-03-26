import { FunctionComponent, useState } from "react";
import { Table } from "react-bootstrap";
import AssetActiveComp from "./AssetActiveComp";
import AssetNavBar from "./AssetNavBar";
import AssetTableNameComp from "./AssetTableNameComp";
import styles from "./DeviceList.module.css";
import DeviceListRowComponent from "./DeviceListRowComponent";



const ForSaleList: FunctionComponent = () => {
  return (
    <section className={styles.rightcontainer}>
      <AssetNavBar navTitle="My Devices" />

      <div className={styles.deviceListComp}>
        <Table striped >
          <thead>
            <tr className={styles.tableHeading}>
              <td>File Name</td>
              <td>File Items</td>
              <td>Last Modified</td>
              <td>Device Status</td>
            </tr>
          </thead>
          <tbody>
            <DeviceListRowComponent deviceName="Canon 60D" deviceType="Camera" status="For Sale" lastModified="10 days ago" />
            <DeviceListRowComponent deviceName="iPhone 14 Pro Max" deviceType="Phone" status="For Sale" lastModified="10 days ago" />
            <DeviceListRowComponent deviceName="Samsung OLED" deviceType="Screen" status="For Sale" lastModified="10 days ago" />
            <DeviceListRowComponent deviceName="Canon 60D" deviceType="Camera" status="For Sale" lastModified="10 days ago" />
            <DeviceListRowComponent deviceName="iPhone 14 Pro Max" deviceType="Phone" status="For Sale" lastModified="10 days ago" />
            <DeviceListRowComponent deviceName="Canon 60D" deviceType="Camera" status="For Sale" lastModified="10 days ago" />
            <DeviceListRowComponent deviceName="iPhone 14 Pro Max" deviceType="Phone" status="For Sale" lastModified="10 days ago" />
            <DeviceListRowComponent deviceName="Samsung OLED" deviceType="Screen" status="For Sale" lastModified="10 days ago" />
            <DeviceListRowComponent deviceName="Canon 60D" deviceType="Camera" status="For Sale" lastModified="10 days ago" />
          </tbody>
        </Table>
      </div>


    </section>
  );
};

export default ForSaleList;