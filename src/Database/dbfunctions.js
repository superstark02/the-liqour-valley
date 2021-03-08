import { db } from '../firebase'

export function clusterdata(){
    db.collection("Production").get().then(snap=>{
        var data = []
        snap.forEach(doc=>{
            data.push(doc.data())
        })

        for(var i = 0; i<data.length; i++){
            var products = []
            for(var j = 1; j<data.length; j++){
                if(data[i].Title === data[j].Title){
                    products.push({
                        rate: data[j].MRP_Btl,
                        packing: data[j].Packing
                    })
                    db.collection("Products").doc("P-"+j).delete(l=>{
                        console.log("Deleted"+j)
                    })
                }
            }
            db.collection("Products").doc("P-"+i).update({Packing: products})
        }
    })
}