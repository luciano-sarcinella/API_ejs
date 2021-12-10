module.exports = (app) => {
    let entries = [];
    app.locals.entries = entries;
 
    app.get('/',(req, res) => {
       res.render('index', {
          title: 'Listado de productos'
       });
    });
 
    app.get('/nueva-entrada',(req, res) => {
       res.render('nueva-entrada', {
          title: 'Nuevo Producto'
       });
    });
 
    app.post('/nueva-entrada', (req, res) => {
       if (!req.body.title || !req.body.body || !req.body.url) {
          res.send(400).send('El producto debe tener titulo, precio y url valida');
       }
 
       let newEntry = {
          title: req.body.title,
          content: req.body.body, 
          url: req.body.url,
          published: new Date().getDate()
 
       }
      
       entries.push(newEntry);
 
       res.redirect('/');
    });
}