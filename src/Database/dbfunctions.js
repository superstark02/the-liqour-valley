import { db } from '../firebase'

export function clusterdata(){
    db.collection("Production").get().then(snap=>{
        var data = []
        snap.forEach(doc=>{
            data.push(doc.data())
            
        })

        for(var i = 0; i<data.length; i++){
            for(var j = 1; j<data.length; j++){
                if(data[i].Title === data[j].Title){
                    db.collection("Products").doc("P-"+i).get().then(snap=>{
                        
                    })
                }
            }
        }
    })
}