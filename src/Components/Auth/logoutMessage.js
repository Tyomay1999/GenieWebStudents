import styles from "./styles/auth.module.scss"
import { Button, Card } from "antd";
import { useNavigate } from "react-router";
import dataControl from "../../Services/dataControl";




const Logout = ({cancel}) => {
    const navigate = useNavigate()

    return <div className={styles.logout_message_container}>
        <Card title="Do you want to go out" bordered={false} style={{ width: 300, textAlign: "center" }}>
            <div className={styles.button_container}>
                <Button type="primary" onClick={cancel}>Cancel</Button>
                <Button type="default"
                        onClick={() => {
                            dataControl.removeToken()
                            navigate( "/auth" )
                        }}
                >Logout</Button>
            </div>
        </Card>
    </div>
}


export default Logout;