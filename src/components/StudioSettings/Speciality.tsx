import { useState,useEffect } from "react";
import styles from './Speciality.module.css'
import { Col, Row } from "react-bootstrap";
import SpecialityImage from "./SpecialityImage";
import AddNewSpeciality from "../Modal/AddNewSpeciality";
import SpecialityLoader from "../Loader/SpecialityLoader"
import { useNavigate } from "react-router-dom";
import StudioClientSevice from "../../api/StudioClient/StudioClient"
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";

const Speciality: any = () => {

    useEffect(()=>{
        getSpecialityList()
    },[])

    const [modalShow, setModalShow] = useState(false);
    const [loader, setLoader] = useState(true);
    const [speciality, setSpeciality]:any = useState([]);
    const navigate = useNavigate();

    const getSpecialityList=async()=>{
        try {
            const clientRes=await StudioClientSevice.getSpeciality();
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                console.log(clientRes,'----clientRes---------');
                setLoader(false);
                setSpeciality(clientRes?.data?.specialityDetails)
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

    const setCreateSpeciality=async(newData:any)=>{
        try {
            setSpeciality([...speciality,newData])
        } catch (err:any) {
            NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
        }
    }

    return (
        <div className={styles.maindiv}>
            <div className={styles.assetnavbar}>
                <div className={styles.dashboard}>Speciality</div>
                <div className={styles.frameParent}>
                    <button className={styles.addNewDevice} onClick={() => setModalShow(true)}>
                        New Speciality
                    </button>
                </div>
            </div>
            <p className={styles.subtitle}>
                Specifying your speciality helps your customers see what kind of photography/videography you specialise in.
            </p>
            {
                loader ? <SpecialityLoader /> :
                speciality && speciality.length ?
                <>
                 <Row>
                <Col xl={8} lg={8} className={styles.specialmain}>
                    {
                        speciality &&  speciality.length && speciality.map((special:any,index:any)=>(
                            <SpecialityImage className={styles.specialsingle} 
                            key={index} 
                            speciality={special}/>
                        ))
                    }
                </Col>
                <Col xl={4} lg={4}></Col>
                </Row>
                </>:
                <div className={styles.noclient}>
                <div>
                <h6>No Specialities</h6>
                <p>When you add speciality, Your specialities will be listed here.</p>
                </div>
                </div>
               
            }
            <AddNewSpeciality
                show={modalShow}
                onHide={() => setModalShow(false)}
                createnew="true"
                setcreatespeciality={setCreateSpeciality}
            />
        </div>
    )

}

export default Speciality