import multer from 'multer';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },

    filename: function (req, file, cb) {
        console.log('wwwwwwwwwwwwwww')
        console.log(file);
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        // cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
        cb(null, file.originalname + '-' + Date.now() + '.' + extension);
    }
})


export const upload = multer({ storage: storage });

