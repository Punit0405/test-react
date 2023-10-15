import React from 'react'
import styles from './TemplateLoader.module.css'
import { Spinner } from 'react-bootstrap'

function TemplateLoader() {
    return (
        <div className={styles.maincomp}>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column justify-content-center">
                    <Spinner animation="border" style={{ color: "#EC1A25" }}/>
                </div>
            </div>
        </div>
    )
}

export default TemplateLoader