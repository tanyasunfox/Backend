import { obj as result } from "./second.mjs";

import * as ff from "./second.mjs"; 
import os from "os";

import fs from 'fs';

console.log("Hello World",ff);
console.log(os.hostname);


fs.readFile('texut.txt','utf-8',(error,data)=>{
    console.log(error,data)
});

const a=fs.readFileSync('tenxt.txt','utf-8')
console.log(a);
console.log("all read");