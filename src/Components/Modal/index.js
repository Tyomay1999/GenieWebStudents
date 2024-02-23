import React, { useEffect, useState } from 'react';
import style from "./styles/modal.module.scss"
import { Button, Card, Form, Input, Modal } from 'antd';
import { useSelector } from "react-redux";

const UnPhysicalCert = () => {
    const student = useSelector( state => state.students.student )
    const { physicalCert, name, lastName } = student

    useEffect( () => {
        if ( !physicalCert ) {
            document?.body?.classList?.add( "modalOpen" )
        } else {
            document?.body?.classList?.remove( "modalOpen" )
        }
    }, [ physicalCert ] )


    if ( physicalCert ) {
        return <></>
    }


    return <div className={ style.main }>
        <Card title=""
              style={ {
                  padding: "20px 0",
                  minWidth: "300px",
                  maxWidth: "500px",
                  textAlign: "",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
              } }>
            <h2 style={ { fontSize: "15px", textAlign: "start", margin: "10px 0" } }>
                Dear { `${ name } ${ lastName }` } ,
            </h2>
            <p style={ { margin: "20px 0", textAlign: "justify" } }>
                To ensure secure access to GenieWeb's platform features, physical certification at our
                headquarters is now required. Unverified accounts may have limited functionality. Please visit us at
                your earliest convenience for certification, enabling full platform access and an optimal learning
                experience.
            </p>

            <p style={ { margin: "20px 0", textAlign: "justify" } }>
                Thank you for your cooperation.
            </p>

            <p style={ { margin: "20px 0", textAlign: "justify" } }>
                Best regards,
            </p>

            <h2 style={ { fontSize: "15px", textAlign: "start", margin: "10px 0" } }>
                Genie Web
            </h2>

        </Card>
    </div>;
};

export default UnPhysicalCert