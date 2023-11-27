import { FunctionComponent, useEffect, useState } from "react";
import { Button, Col, Form, Image, InputGroup, Ratio, Row } from "react-bootstrap";
import AddNewDeviceModal from "../Modal/AddNewDeviceModal";
import styles from "./Profile.module.css";
import BillingNav from "./BillingNav";
import DashboardService from "../../api/Dashboard/dashboard";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useFormik } from "formik";
import AuthService from "../../api/auth/auth";
import { MenuItem, Select } from "@mui/material";
import Constants from "../../Config/Constants";


const activeCard = {
    color: "white",
    backgroundColor: "#EC1A25",
};

const activeBtn = {
    color: "black",
    backgroundColor: "white",
};

const ProfileComponent: any = () => {
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [filteredOptions, setFilteredOptions] = useState<any>(options);
    const { values, errors, handleChange, handleBlur, submitForm, setValues } = useFormik({
        initialValues: {
            businessName: "",
            firstname: "",
            lastname: "",
            gender: "",
            email: "",
            phone: "",
            location: "",
            timezone: "",
            bio: "",
            profile:""

        },
        onSubmit: async (values) => {
            try {
                setLoader(true);
                await DashboardService.updateProfile(values);
                setLoader(false);
            } catch (error) {
                
            }

        }
    });

    const handleInputChange = (inputValue: any) => {
        const filtered = options.filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        if (inputValue && filtered.length === 0) {
            filtered.push(options[0]);
        }
        setFilteredOptions(filtered);
    };
    const getProfile = async () => {
        try {
            setLoader(true);
            const { result } = await DashboardService.getProfile();
            const profileDatatoset = {
                businessName: result.businessName,
                firstname: result.firstname,
                lastname: result.lastname,
                gender: result.gender,
                email: result.email,
                phone: result.phone,
                location: result.location,
                timezone: result.timezone,
                bio: result.bio,
                profile:result.profile
            }
            setValues(profileDatatoset);
            setLoader(false);
            console.log(result, "ProfileData")
        } catch (error) {
            setLoader(true);
        }
    }

    useEffect(() => {
        getProfile();
    }, [])


    return (
        <>
            {loader && <Loader />}

            <div className={styles.maindiv}>
                <div className={styles.navbarcover}>
                    <div className={styles.navtitle}>Settings</div>
                </div>
                <BillingNav />
                <div className={styles.mainProfileContainer}>
                    <div className={styles.profileDiv}>
                        <div className={styles.imgTitleDiv}>
                                <img className={styles.profileImg} src={`${Constants.adminbackendUrl}${values.profile}`} alt="" />
                            <div className={styles.profilePhotoTitle}>
                                <span className={styles.profilePhotoT}>Profile Photo</span>
                                <span className={styles.profilePhotoD}>This will be displayed on your profile</span>
                            </div>
                        </div>
                        <div className={styles.updateBtnDiv}>
                            <Button className={styles.updateProfileBtn} onClick={submitForm} variant="custom">
                                Update Profile
                            </Button>
                        </div>
                    </div>
                    <div className={styles.profileFormDiv}>
                        <div className={styles.upperDiv}>
                            <div className={styles.leftUpperDiv}>
                                <div className={styles.upperLeftDiv}>
                                    <div className={styles.formcomp}>
                                        <Form.Label className={styles.formlabel}>Business Name</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                name="businessName"
                                                value={values.businessName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </InputGroup>
                                    </div>
                                </div>
                                <div className={styles.lowerLeftDiv}>
                                    <div className={styles.formcomp}>
                                        <Form.Label className={styles.formlabel}>Name</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                name="firstname"
                                                value={values.firstname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </InputGroup>
                                    </div>
                                    <div className={styles.formcomp}>
                                        <Form.Label className={styles.formlabel}>Sur Name</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                name="lastname"
                                                value={values.lastname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rightUpperDiv}>
                                <div className={styles.formcomp}>
                                    <Form.Label className={styles.formlabel}>Bio</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            name="bio"
                                            value={values.bio}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </InputGroup>
                                </div>
                            </div>

                        </div>
                        <div className={styles.lowerDiv}>
                            <div className={styles.leftUpperDiv}>
                                <div className={styles.upperLeftDiv}>
                                    <div className={styles.formcomp}>
                                        <Form.Label className={styles.formlabel}>Gender</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                        name="gender"
                                        value={values.gender}
                                        onChange={handleChange}
                                        >
                                            <option value={1}>Male</option>
                                            <option value={2}>Female</option>
                                            <option value={3}>Others</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className={styles.lowerLeftDiv}>
                                    <div className={styles.formcomp}>
                                        <Form.Label className={styles.formlabel}>Email</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled
                                            />
                                        </InputGroup>
                                    </div>
                                    <div className={styles.formcomp}>
                                        <Form.Label className={styles.formlabel}>Phone</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                value={values.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled
                                            />
                                        </InputGroup>
                                    </div>
                                </div>
                                <div className={styles.lowerLeftDiv}>
                                    <div className={styles.formcomp}>
                                        <Form.Label className={styles.formlabel}>Location</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                name="location"
                                                value={values.location}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </InputGroup>
                                    </div>
                                    <div className={styles.formcomp}>
                                        <Form.Label className={styles.formlabel}>Time Zone</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                        name="timezone"
                                        value={values.timezone}
                                        onChange={handleChange}
                                        >
                                            <option value={"sast"}>SAST (+02:00)</option>
                                            <option value={"ist"}>IST (+05:30)</option>
                                            <option value={"utc"}>UTC (+00:00)</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileComponent;
