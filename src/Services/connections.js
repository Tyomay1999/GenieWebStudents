import dataControl from "./dataControl";

class Service {

    constructor() {
        this.proces_mode = process.env.REACT_APP_MODE;
        this.server_url = this.proces_mode === "DEV" ? process.env.REACT_APP_LOCAL_SERVER_URL : process.env.REACT_APP_SERVER_URL;
        // this.local_server_url = process.env.REACT_APP_LOCAL_SERVER_URL;
    }

    SignUp() {
        return `${ this.server_url }/student/login`
    }

    CheckAccount() {
        return `${ this.server_url }/student/check`
    }

    GET_QR( id = '' ) {
        return `${ this.server_url }/qrs/${ id }`
    }

    RegisterStudent() {
        return `${ this.server_url }/qrs/student`
    }

    ResetLinkToEmail() {
        return `${ this.server_url }/student/reset/link`
    }

    ResetPassword() {
        return `${ this.server_url }/student/reset/pass`
    }

    StopResettingPassword(token){
        return `${ this.server_url }/student/stop/reset/${token}`
    }

    CheckResetToken(token) {
        return `${ this.server_url }/student/check/reset/${token}`
    }

    Scan( token = "" ) {
        return `${ this.server_url }/qrs/scan/${ token }`
    }

    GetStudentInfo() {
        return `${ this.server_url }/student/info`
    }

    GetExams() {
        return `${ this.server_url }/student/exams`
    }

    GetExamInfo( id = "" ) {
        return `${ this.server_url }/student/exams/${ id }`
    }

    SendExamSelectedAnswers( id = "" ) {
        return `${ this.server_url }/student/exams/answers/${ id }`
    }

    FinishLogicTest( token ) {
        return `${ this.server_url }/student/exams/logic/${ token }`
    }

    connectionIssue( status, navigate ) {
        if ( status === 500 ) {
            return navigate( "/info/error" )
        }
        if ( status === 404 ) {
            return navigate( "/info/unrecognized" )
        }
        if ( status === 403 ) {
            dataControl.removeToken()
            return navigate( "/info/unauthorized" )
        }

        if ( status === 409 ) {
            return navigate( "/info/existed-student" )
        }
        return navigate( "/info/problems" )
    }

}


export default new Service();