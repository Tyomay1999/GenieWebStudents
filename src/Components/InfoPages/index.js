import style from "./styles/infoPages.module.scss"
import { useNavigate, useParams } from "react-router";
import { Button, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useEffect } from "react";

const pagesType = {
    "error": ( text, navigate ) => {
        return <Result
            status="500"
            title="500"
            subTitle={ text || "Sorry, something went wrong." }
            extra={ <Button onClick={ () => navigate( '/home' ) } type="primary">Back Home</Button> }
        />
    },
    "unrecognized": ( text, navigate ) => {
        return <Result
            status="404"
            title="404"
            subTitle={ text || "Sorry, the page you visited does not exist." }
            extra={ <Button onClick={ () => navigate( '/home' ) } type="primary">Back Home</Button> }
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
                <Button onClick={ () => navigate( '/home' ) } type="primary" key="console">
                    Go Home
                </Button>
            }
        />
    },
    "success": ( text, navigate ) => {
        return <Result
            icon={ <SmileOutlined/> }
            title={ text || "Great, we have done all the operations!" }
            extra={ <Button onClick={ () => navigate( '/home' ) } type="primary">Home</Button> }
        />
    }
}


const InfoPages = () => {
    const params = useParams()
    const navigate = useNavigate()

    return <div className={ style.main }>
        { pagesType[ typeof pagesType[ params.type ] === "function" ? params.type : "unrecognized" ]( "", navigate ) }
    </div>
}


export default InfoPages