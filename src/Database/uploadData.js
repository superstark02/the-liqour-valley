import {db} from '../firebase'

export default function uploadData(data){
    var i = 0
    for(i = 0; i < data.length; i++){
        db.collection("Products").doc("P-"+i).set(data[i]).then(s=>{
            console.log("Done")
        })
    }
}
