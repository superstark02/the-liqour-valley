import { db } from '../firebase'

export default function callData(lastone) {
    return new Promise((resolve, reject) => {

        var data = [];

        if(lastone){
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

export function getByQuery(lastone,keyword) {
    return new Promise((resolve, reject) => {

        var data = [];

        if(lastone){
            db.collection("Products").orderBy("SNo").startAfter(lastone)
            .get()
            .then(snapshot => {

                snapshot.forEach(doc => {
                    if(doc.data().Title.includes(keyword) && data.length < 20){
                        data.push(doc.data())
                    }
                });

                resolve(data);
            })
            .catch(reason => {
                reject(reason);
            });
        }
        else{
            db.collection("Products")  
            .get()
            .then(snapshot => {

                snapshot.forEach(doc => {
                    if(doc.data().Title.includes(keyword) && data.length < 20){
                        data.push(doc.data())
                    }
                });

                resolve(data);
            })
            .catch(reason => {
                reject(reason);
            });
        }

        
    });
}