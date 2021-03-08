import { db } from '../firebase'

export function clusterdata(){
    return new Promise((resolve, reject) => {
        db.collection("Products").get().then(snap=>{
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
                db.collection("Products").doc("P-"+i).update({Packing: products}).then(r=>{
                    console.log("Updated-"+i)
                })
            }

            resolve("Done")
        })
    });
}

export function editDoc(){

    return new Promise((resolve, reject) => {
        db.collection("Products").get().then(snap=>{
            snap.forEach(doc=>{
                if(doc.data().Title==="Jazz Blue Curacao Vodka"){
                    
                    
                }
            })
        })
    })
    
}