import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs'
import { error } from 'node:console';


const sql = require('better-sqlite3');
const db = sql('meals.db');

export default async function fetchdata(){
   await new Promise((resolve)=>{setTimeout(resolve, 5000)})
    return db.prepare('SELECT * FROM meals').all()
    
}

export  const singlemeal= (slug)=> {
    return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);

}

export async function addmeal(meal){
   meal.slug=slugify(meal.title,{lower:true})
   meal.instructions=xss(meal.instructions)

   const fileextaention=meal.image.name.split('.').pop()
   const filename=`${meal.slug}.${fileextaention}`
   const filepath=`public/images/${filename}`
const stream= fs.createWriteStream(filepath)

const imagebuffer=await meal.image.arrayBuffer()
stream.write(Buffer.from(imagebuffer),(err)=>{
    if(err) throw new Error("error while writing ")
})
meal.image=`/images/${filename}`

db.prepare(`INSERT INTO meals 
    (title,summary,slug,image,instructions,creator,creator_email)
   VALUES(  
         @title,
         @summary,
         @slug,
         @image,
         @instructions,
         @creator,
         @creator_email) `).run(meal)
   
}