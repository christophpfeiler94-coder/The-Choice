import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.webmanifest':'application/manifest+json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg'};
http.createServer((req,res)=>{let name;try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400).end();return}const relative=name==='/'?'index.html':name.replace(/^\/+/, '');const file=path.resolve(root,relative.startsWith('assets/')||relative==='manifest.webmanifest'?`public/${relative}`:relative);if(!file.startsWith(root+path.sep)||relative.startsWith('.')||!['index.html','app.js','style.css','sw.js','manifest.webmanifest'].includes(relative)&&!relative.startsWith('assets/')){res.writeHead(404).end();return}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404).end('Not found');return}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data)})}).listen(5173,'0.0.0.0',()=>console.log('The Choice → http://localhost:5173'));
