import { Col, Image, Ratio } from "react-bootstrap"
import styles from "./DashboardSpeciality.module.css";
import AddNewSpeciality from "../Modal/AddNewSpeciality";
import { useState } from "react";
import DeleteConfirmation from "../Modal/DeleteConfirmation";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import { useNavigate } from "react-router-dom"
import StudioClientSevice from "../../api/StudioClient/StudioClient"

const SpecialityImage: any = ({speciality}:any) => {

    const navigate = useNavigate();
    console.log(speciality,'-----speciality----');
    const [special, setSpecial]:any = useState(speciality)    
    const [modalDelete, setDeleteShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    async function updateData(updateData:any){
        setSpecial({...special,...updateData})
    }

    const deleteSpeciality = async () => {
        try {
          const clientRes=await StudioClientSevice.deleteSpeciality(special.id);
          if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
            setSpecial(null)
            setDeleteShow(false)
            NotificationWithIcon("success", "Speciality deleted successfully.")
          }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
                navigate('/');
            } else {
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }
      }

    return (
        <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
            <Ratio aspectRatio="1x1" className={styles.outerimg} >
                <div className={styles.imgdiv}>
                    <div className={styles.overlay}></div>
                    <Image className={styles.myimage} src={special.imageUrl} />
                    <div className={styles.button} >
                        <i onClick={() => setModalShow(true)} className={`fa-regular fa-pen specialediticonsingle ${styles.pensymbol}`}></i>
                        <span className={styles.name}>{special.name}</span>
                        <i onClick={() => setDeleteShow(true)} className={`fa-regular fa-trash specialediticonsingle ${styles.pensymbol}`}></i>
                    </div>
                </div>
            </Ratio>
            <AddNewSpeciality
                show={modalShow}
                onHide={() => setModalShow(false)}
                createnew="false"
                special={special}
                updatedata={updateData}
            />
            <DeleteConfirmation
                    show={modalDelete}
                    handledeletefiles={deleteSpeciality as any}
                    modaltext={"Are you sure you want to delete speciality ?"}
                    onHide={() => setDeleteShow(false)}
            />
        </Col>
    )
}

export default SpecialityImage