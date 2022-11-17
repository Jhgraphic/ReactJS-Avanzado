const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const vapidKeys = { 
    "publicKey": "BO120naHfTKZKUHP10fQsqCFshUiF1a0h5GsucYjXF8pM1KH1TV6S6IFuoU5hDwa2IrY9EQo7jf89JbOXB3kPVk","privateKey": "oDGUu4DjwBQLfMEg-8Q-jgQgXKJPkg2Oi4juXAzyQcY"
};

webpush.setVapidDetails(
    'mailto:gorka@example.ex', 
    vapidKeys.publicKey, 
    vapidKeys.privateKey
);

const subscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/cQ34mRaWBYA:APA91bES59THbm4eEW9JofW_Kd8pwoP8bsTSLm1s45s_Fbi7oZfrld4OyZeeApeKsxJLGDgIA3bQan4u80hn8tw5ucwZSpYevEQYcTTab6Z489RVS1AIg-DEtWzQ4U6ddWUOG6aL9BUm',
    expirationTime: null,
    keys: {
        p256dh: 'BH2EwFsNws9mKgu99-dwgYU7iphASd_W_r0DLpnsxmSF6tKiTgQCk0auGtHC0-ZZElkIDI-cn0URyrjGyG6ovAw',
        auth: 'MVicjgbnwUqcg-6CGwIvCw'
    }
};

app.get('/', (req, res) => {
    const payload = JSON.stringify(
        { 
            title: "Server notification", 
            message: "Esta es una notificación que nos llega desde el servidor"
        }
    );
    webpush.sendNotification(subscription, payload);
    res.send("Todo ok, funcionando correctamente");
});

app.post('/custom-notification', (req, res) => {
    const { title, message } = req.body;
    console.log(req.body);
    const payload = JSON.stringify({ title, message });
    webpush.sendNotification(subscription, payload);
    res.sendStatus("Todo ok, custom notification enviada");
})

app.post('/subscription', (req, res) => {
    const { pushSubscription } = req.body;
    console.log(pushSubscription);
    res.sendStatus(200);
});

const port = 8000;

app.listen(port, () => console.log(`Server listening on port ${port}`));