import { db } from '../firebase'

export default function getCollection(lastone) {

    return new Promise((resolve, reject) => {

        var data = [];

        if(lastone > 0){
            db.collection("Products").orderBy("SNo","asc").limit(20).startAfter(lastone)
            .get()
            .then(snapshot => {

                snapshot.forEach(doc => {
                    data.push(doc.data())
                });

                resolve(data);
            })
            .catch(reason => {
                reject(reason);
            });
        }
        else{
            db.collection("Products").orderBy("SNo","asc").limit(20)   
            .get()
            .then(snapshot => {

                snapshot.forEach(doc => {
                    data.push(doc.data())
                });

                resolve(data);
            })
            .catch(reason => {
                reject(reason);
            });
        }

        
    });
}