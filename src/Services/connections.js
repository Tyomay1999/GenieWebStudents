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

    Scan( token = "" ) {
        return `${ this.server_url }/qrs/scan/${ token }`
    }


    GetStudentInfo(){
        return `${this.server_url}/student/info`
    }
}


export default new Service();