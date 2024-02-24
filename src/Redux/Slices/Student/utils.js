import frontEnd_PNG from "../../../Assets/Student/front-end.png";
import student_PNG from "../../../Assets/Student/student.png";


export const handlerPayloadData = ( payload ) => {
    if ( payload ) {
        const handlerData = {}
        const packageInfo = payload?.group?.package
        const teacher = packageInfo?.teacher
        if ( packageInfo ) {
            handlerData.lessons = packageInfo?.lessons
            handlerData.position = packageInfo?.name
        }
        if ( teacher ) {
            handlerData.teacher = {
                name: teacher?.name,
                lastName: teacher?.lastName,
                phone: teacher?.phone,
                email: teacher?.email,
                position: teacher?.position,
            }
        }
        for ( let prop in payload ) {
            if ( payload[ prop ] ) {
                handlerData[ prop ] = payload[ prop ]
            }
        }
        if ( !payload[ "positionIcon" ] ) {
            handlerData[ "positionIcon" ] = frontEnd_PNG
        }
        if ( !payload[ "image" ] ) {
            handlerData[ "image" ] = student_PNG
        }
        return handlerData
    }
}