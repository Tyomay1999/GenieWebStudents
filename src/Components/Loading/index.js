import style from "./styles/loading.module.scss"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";


const Loading = () => {
    const run = useSelector( state => state.loading.run )
    const student = useSelector( state => state.students.student )

    useEffect( () => {
        if ( run ) {
            document?.body?.classList?.add( "modalOpen" )
        } else {
            if ( student?.physicalCert ) {
                document?.body?.classList?.remove( "modalOpen" )
            }
        }
    }, [ run, student?.physicalCert ] )

    if ( !run ) {
        return <></>
    }

    return <div className={ style.main }>
        <Spin size="large"/>
    </div>
}

export default Loading