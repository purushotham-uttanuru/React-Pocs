import decode from 'jwt-decode';


    export const  getToken = () =>{
        // Retrieves the user token from localStorage
        return localStorage.getItem('token')
    }

    export const loggedIn = () => {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    export const isTokenExpired = token => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            console.log(err)
            return false;
        }
    }