import EventEmitter from "events";

const event=new EventEmitter();
event.on('Post',()=>{
    setTimeout(()=>{ 
        console.log("event triggered");
    },3000);
    
});
console.log("mfnmm");
event.emit('Post');
console.log("mfn");