/**
 * Created by ehigginsiii on 12/16/16.
 */
export class DataService {
    getDetails() {
        const resultPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data');
            }, 1500);
        });
        return resultPromise;
    }
}
