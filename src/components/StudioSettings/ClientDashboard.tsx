import { useState,useEffect } from "react";
import styles from './ClientDashboard.module.css'
import ClientList from "./ClientList";
import AddNewClientModal from "../Modal/AddNewClientModal";
import { Button } from "react-bootstrap";
import StudioClientSevice from "../../api/StudioClient/StudioClient"
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import { useNavigate } from "react-router-dom";
import StudioClientLoader from "../Loader/StudioClientLoader"

const ClientDashboard: any = () => {

    useEffect(()=>{
        getClientList()
    },[])

    const [modalShow, setModalShow] = useState(false);
    const [search, setSearch] = useState("");
    const [client, setClient]:any = useState([]);
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();

    const getClientList=async(search?:any)=>{
        try {
            const clientRes=await StudioClientSevice.getCientList(search);
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setLoader(false);
                setClient(clientRes?.result)
            }            
        } catch (err:any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                setLoader(false);
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
                navigate('/');
            } else {
                setLoader(false);
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }
    }

    const handleSearchValue=(event:any)=>{
        try {
            setSearch(event.target.value)
            getClientList(`?search=${event.target.value}`)            
        } catch (err:any) {
            NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
        }
    }

    
    const setCreateClient=async(newData:any)=>{
        try {
            setClient([...client,newData])
        } catch (err:any) {
            NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
        }
    }
 
    return (
        <div className={styles.maindiv}>
            <div className={styles.assetnavbar}>
                <div className={styles.dashboard}>Clients</div>
                <div className={styles.frameParent}>
                    <input
                        className={styles.frameChild}
                        type="text"
                        placeholder="Search Client or Email"
                        value={search}
                        onChange={handleSearchValue}
                    />
                    <Button className={styles.addNewDevice} onClick={() => setModalShow(true)}>
                        New Client
                    </Button>
                </div>
            </div>
            {
                loader===true?
                <StudioClientLoader />
                :
                client && client.length ?
                <ClientList clientList={client}/>:
                <div className={styles.noclient}>
                    <div>
                    <h6>No Clients</h6>
                    <p>When you add client, Your clients will be listed here.</p>
                    </div>
                </div>
            }
            <AddNewClientModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setcreateclient={setCreateClient}
            />
        </div>
    )

}

export default ClientDashboard