class Service {

    saveToken( token ) {
        localStorage.setItem( "token", JSON.stringify( token ) )
    }

    getToken() {
        return JSON.parse( String( localStorage.getItem( "token" ) ) )
    }

    removeToken() {
        localStorage.removeItem( "token" )
    }


}


export default new Service()