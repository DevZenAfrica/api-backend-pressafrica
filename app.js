const express = require('express');
const firebase = require('firebase');

const app = express();

const firebaseConfig = {
    apiKey: "AIzaSyDdOCNlvPKUDz7HrccaVtiHUq-w2w2R0po",
    authDomain: "ayoba-news-headlines.firebaseapp.com",
    projectId: "ayoba-news-headlines",
    storageBucket: "ayoba-news-headlines.appspot.com",
    messagingSenderId: "204095383734",
    appId: "1:204095383734:web:6aa34fe61a061bbe3d1e17"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/addPays', (req, res) => {
    (async () => {
        try {
            await db.collection('pays').doc(req.body.id).set(Object.assign({}, req.body)).then(
                () => {
                    return res.status(200).send({message : 'ok'});
                });
        } catch (error) {
            return res.status(500).send(error);
        }
    })()
});

app.post('/api/addHeadline', (req, res) => {
    (async () => {
        try {
            await db.collection('headlines').doc(req.body.id).set(Object.assign({}, req.body)).then(
                () => {
                    return res.status(200).send({message : 'ok'});
                });
        } catch (error) {
            return res.status(500).send(error);
        }
    })()
});

app.post('/api/addCoverage', (req, res) => {
    (async () => {
        try {
            await db.collection('coverage').doc(req.body.id).set(Object.assign({}, req.body)).then(
                () => {
                    return res.status(200).send({message : 'ok'});
                });
        } catch (error) {
            return res.status(500).send(error);
        }
    })()
});

app.post('/api/addEditorType', (req, res) => {
    (async () => {
        try {
            await db.collection('editorsType').doc(req.body.id).set(Object.assign({}, req.body)).then(
                () => {
                    return res.status(200).send({message : 'ok'});
                });
        } catch (error) {
            return res.status(500).send(error);
        }
    })()
});

app.post('/api/addEditor', (req, res) => {
    (async () => {
        try {
            await db.collection('editors').doc(req.body.id).set(Object.assign({}, req.body)).then(
                () => {
                    return res.status(200).send({message : 'ok'});
                });
        } catch (error) {
            return res.status(500).send(error);
        }
    })()
});

app.post('/api/addCategoryEditor', (req, res) => {
    (async () => {
        try {
            await db.collection('categoriesEditors').doc(req.body.id).set(Object.assign({}, req.body)).then(
                () => {
                    return res.status(200).send({message : 'ok'});
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    })()
});

app.post('/api/addPoll', (req, res) => {
    (async () => {
        try {
            await db.collection('polls').doc(req.body.id).set(Object.assign({}, req.body)).then(
                () => {
                    return res.status(200).send({message : 'ok'});
                });
        } catch (error) {
            return res.status(500).send(error);
        }
    })()
});

app.get('/api/getReport', (req, res) => {
    (async () => {
        try {
            let reponse = [];

            await db.collection('report').get().then(querysnapshot=>{
                let docs = querysnapshot.docs;

                for(let doc of docs) {
                    reponse.push(doc.data());
                }
                return res.status(200).send(reponse);
            })
        } catch (error) {
            return res.status(500).send(error);
        }
    })()
});

/*
app.get('/api/stuff', (req, res) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff);
});
*/

module.exports = app;