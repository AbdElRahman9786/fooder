import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs'
import { S3 } from '@aws-sdk/client-s3';




const sql = require('better-sqlite3');
const db = sql('meals.db');
const s3 = new S3({
  region: 'eu-north-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },

});

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

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
 
  const bufferedImage = await meal.image.arrayBuffer();
 
  s3.putObject({
    Bucket: 'images-nextjs',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
    
  });
 
 
  meal.image = fileName;

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