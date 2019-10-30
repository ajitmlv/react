import axios from 'axios'

const PETS_API_URL = 'http://localhost:8080'
class PetsDataService {
    retrieveAllPets() {
        return axios.get(`${PETS_API_URL}`);
    }
}

export default new PetsDataService()