import { Image, Ratio, Table } from "react-bootstrap"
import styles from './ClientList.module.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Moment from "react-moment";
import { NavDropdown } from 'react-bootstrap';
import AddNewClientModal from "../Modal/AddNewClientModal";
import { useState,useEffect } from "react";

const ClientList: any = ({clientlist}:any) => {

    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const[client,setClient]=useState(clientlist)

    async function updateData(clientData:any){
        setClient({...client,...clientData})
    }    

    return (
            <tr className={styles.tableRow} 
            >
            <td className={styles.tableData} onClick={()=>{navigate("1")}} >
                <div className={styles.nameDiv}>
                    <Image
                        className={styles.imgStyle}
                        alt="customer img"
                        src={client.profileUrl}
                    />
                    {client.name}
                </div>
            </td>
            <td className={styles.tableData} onClick={()=>{navigate("1")}} >
                <div className={styles.tableDiv}> {client.email}</div>
            </td>
            <td className={styles.tableData} onClick={()=>{navigate("1")}} >
                <div className={styles.tableDiv}> {client.phone}</div>
            </td>
            <td className={styles.tableData} onClick={()=>{navigate("1")}} >
                <div className={styles.tableDiv}>
                <Moment format="MMMM  Do, YYYY">{client.createdAt}</Moment>
                </div>
            </td>
            <td>
                 <div className={styles.tableDiv}>
                   <NavDropdown
                     align="end"
                     title={<i className="fa-regular fa-ellipsis setcolorgallery galleryicon"></i>}
                     className={styles.navdropdown} id="collasible-nav-dropdown gallerydropdown">
                     <NavDropdown.Item onClick={()=>setModalShow(true)}>
                       <div className={styles.navicons}>
                         <i className="fa-sharp fa-regular assetediticons fa-pencil"></i>
                         <div className={styles.navtags}>Edit Client</div>
                       </div>
                     </NavDropdown.Item>
                     <NavDropdown.Item >
                       <div className={styles.navicons}>
                         <i className="fa-solid assetediticons fa-trash"></i>
                         <div className={styles.navtags}>Delete Client</div>
                       </div>
                     </NavDropdown.Item>
                   </NavDropdown>
                 </div>
                </td>
                <AddNewClientModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    createnew="false"
                    client={client}
                    updatedata={updateData}
                />
        </tr>
    )

}

export default ClientList