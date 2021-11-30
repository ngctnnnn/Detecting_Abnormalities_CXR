
function route(app){ 
    app.get('/', (req, res) => {
        const path_img = fs.existsSync(path.join(__dirname, '../public/img/image.png'));
        const path_mdl = fs.existsSync(path.join(__dirname, '../public/model/model.pt'));
        if (path_img && path_mdl)
            return res.render('home_img_model');
        if (path_mdl) 
            return res.render('home_not_img');
        if (path_img) 
            return res.render('home_not_model'); 
        return res.render('home');
    });
    
    const multer  = require('multer') 
    const path = require('path')
    const fs = require("fs");

    const storage_image = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../public/img/')); 
        },
        filename: (req, file, cb) => {  
            cb(null, file.originalname);  
        }
    })

    const storage_model = multer.diskStorage({ 
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../public/model/'));
        }, 
        filename: (req, file, cb) => {  
            cb(null, file.originalname)
        }
    })

    const upload_image = multer({ storage: storage_image })  
    const upload_model = multer({ storage: storage_model })

    app.get('/upload_image', (req, res) => { 
        return res.render('upload_image');
    });

    app.post('/upload_image', upload_image.single('data_image'), (req, res) => { 
        if (path.extname(req.file.originalname).toLowerCase() === ".png") {
            fs.rename(
                path.join(__dirname, '../public/img/', req.file.originalname), 
                path.join(__dirname, '../public/img/', 'image.png'), 
                (err) => {
                    if (err) throw err;
                }
            );
            return res.render('upload_image');
        } 
        else{
            fs.unlinkSync(path.join(__dirname, '../public/img/', req.file.originalname));
            return res.render('NOT_SUPPORTED_IMAGE_FORMAT');
        }
    }) 

    app.get('/upload_model', (req, res) => {
        return res.render('upload_model');
    }); 

    app.post('/upload_model', upload_model.single('data_model'), (req, res) => { 
        if (path.extname(req.file.originalname).toLowerCase() === ".pt") {
            fs.rename(
                path.join(__dirname, '../public/model/', req.file.originalname), 
                path.join(__dirname, '../public/model/', 'model.pt'), 
                (err) => {
                    if (err) throw err;
                }
            ); 
            return res.render('upload_model');
        } 
        if (path.extname(req.file.originalname).toLowerCase() === ".pth") {
            fs.rename(
                path.join(__dirname, '../public/model/', req.file.originalname), 
                path.join(__dirname, '../public/model/', 'model.pth'), 
                (err) => {
                    if (err) throw err;
                }
            ); 
            return res.render('upload_model');
        } 
        fs.unlinkSync(path.join(__dirname, '../public/model/', req.file.originalname));
        return res.render('NOT_SUPPORTED_MODEL');
    });
}

module.exports = route;

