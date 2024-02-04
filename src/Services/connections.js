class Service {

    constructor() {
        this.proces_mode = process.env.REACT_APP_MODE;
        this.server_url = this.proces_mode === "DEV" ? process.env.REACT_APP_LOCAL_SERVER_URL : process.env.REACT_APP_SERVER_URL;
        // this.local_server_url = process.env.REACT_APP_LOCAL_SERVER_URL;
    }


    StudentsAll(  ) {
        return `${ this.server_url }/admin/students`
    }

    sendEmail() {
        return `${ this.server_url }/admin/students/send_email`
    }


}


export default new Service();