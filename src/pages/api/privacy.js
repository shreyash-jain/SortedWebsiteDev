import fs from 'fs'

//

const fileName = './public/static/privacy.html'

//

export default async function api(req, res) {
    console.log('Serving static file');
    res.setHeader('Content-Type', 'text/html;charset-8');
    res.write(await fs.readFileSync(fileName, 'utf-8'));
    res.end;
}