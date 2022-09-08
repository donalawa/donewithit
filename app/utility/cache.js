import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = 'cache';
const expiryInMinures = 5;

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
}

const isExpired = (item) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    return now.diff(storedTime, 'minutes') > expiryInMinures;

}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key);
        let item = JSON.parse(value);
        
        if(!item) return null;ß

        if(isExpired(item)) {
            // Command Query Seperation
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }

        return item.value;
    } catch (error) {
        console.log(error);
    }
}


export default {
    store,
    get
}