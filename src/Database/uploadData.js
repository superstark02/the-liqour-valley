import { db } from '../firebase'

export default function uploadData(data) {
    var i = 0
    var j = 1
    var done = []
    for (i = 0; i < data.length; i++) {
        var packing = []

        if(notin(i,done)){
            for (j = i; j < data.length; j++) {
                if (data[i].Title === data[j].Title){
                    packing.push({
                        rate:data[j].MRP_Btl,
                        packing: data[j].Packing
                    })
                    done.push(j)
                }
            }
    
            db.collection("Products").doc("P-" + i).set({
                Title: data[i].Title,
                MRP_Btl: data[i].MRP_Btl,
                SNo: data[i].SNo,
                Image: data[i].Image,
                Packing: packing
            }).then(s => {
                console.log("Done")
            })
        }  
    }
}

function notin(i, done){
    for(var j = 0; j < done.length; j++){
        if(i === done[j]){
            return false 
        }
    }
    return true
}