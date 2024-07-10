import axios from 'axios'
const library_service="http://18.221.127.76:8080/library";

class LibraryService {
    getAllBooks(){
        return axios.get(`${library_service}/books`);
    }

    getAllMembers(){
        return axios.get(`${library_service}/members`);
    }

}
const libraryServiceInstance = new LibraryService();
export default libraryServiceInstance;
