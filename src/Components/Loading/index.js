import style from "./styles/loading.module.scss"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";



const Loading = () => {
    const run = useSelector(state => state.loading.run)

    useEffect( () => {
        if ( !run ) {
            document?.body?.classList?.add( "modalOpen" )
        } else {
            document?.body?.classList?.remove( "modalOpen" )
        }
    }, [ run ] )

    if(!run){
        return <></>
    }

    return <div className={style.main}>
        <Spin size="large" />
    </div>
}

export default Loading