import style from "./styles/infoPages.module.scss"
import { useNavigate, useParams } from "react-router";
import { Button, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import dataControl from "../../Services/dataControl";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoadingState } from "../../Redux/Slices/loading";

const pagesType = {
    "error": ( text, navigate ) => {
        return <Result
            status="500"
            title="500"
            subTitle={ text || "Sorry, something went wrong." }
            extra={ <Button onClick={ () => navigate( dataControl.getToken() ? '/home' : "/" ) } type="primary">Back
                Home</Button> }
        />
    },
    "unrecognized": ( text, navigate ) => {
        return <Result
            status="404"
            title="404"
            subTitle={ text || "Sorry, the page you visited does not exist." }
            extra={ <Button onClick={ () => navigate( dataControl.getToken() ? '/home' : "/" ) } type="primary">Back
                Home</Button> }
        />
    },
    "unauthorized": ( text, navigate ) => {
        return <Result
            status="403"
            title="403"
            subTitle={ text || "Sorry, you are not authorized to access this page." }
            extra={ <Button onClick={ () => navigate( '/auth' ) } type="primary">Back Home</Button> }
        />
    },
    "problems": ( text, navigate ) => {
        return <Result
            status="warning"
            title={ text || "There are some problems with your operation." }
            extra={
                <Button onClick={ () => navigate( dataControl.getToken() ? '/home' : "/" ) } type="primary"
                        key="console">
                    Go Home
                </Button>
            }
        />
    },
    "existed-student": ( text, navigate ) => {
        return <Result
            icon={ <SmileOutlined/> }
            title={ text || "You are already registered, give this QR to someone else )" }
            extra={ <Button onClick={ () => navigate( '/auth' ) } type="primary">Login</Button> }
        />
    },
    "reset-stopped": ( text, navigate ) => {
        return <Result
            icon={ <SmileOutlined/> }
            title={ text || "Reset password process stopped successfully )" }
            extra={ <Button onClick={ () => navigate( '/auth' ) } type="primary">Login</Button> }
        />
    }
}


const InfoPages = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect( () => {
        dispatch( setLoadingState() )
    }, [ dispatch ] )

    return <div className={ style.main }>
        { pagesType[ typeof pagesType[ params.type ] === "function" ? params.type : "unrecognized" ]( "", navigate ) }
    </div>
}


export default InfoPages