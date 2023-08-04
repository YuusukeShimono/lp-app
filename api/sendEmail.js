const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const dotenv = require('dotenv');

// .envファイルから環境変数を読み込む
dotenv.config();

app.use(express.json());

app.post('/api/sendEmail', (req, res) => {
    const {
        firstName,
        lastName,
        company,
        email,
        phoneNumber,
        department,
        position,
    } = req.body;

    // メールの設定
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER, // .envファイルから取得したGmailのユーザー名
            pass: process.env.EMAIL_PASS, // .envファイルから取得したGmailのパスワード
        },
    });

    // メールの内容
    const mailOptions = {
        from: process.env.EMAIL_USER, // .envファイルから取得したGmailのユーザー名
        to: 'jungle379@gmail.com',
        subject: 'お問い合わせフォームの内容',
        text: `氏名: ${lastName} ${firstName}\n会社名: ${company}\nメールアドレス: ${email}\n電話番号: ${phoneNumber}\n部門: ${department}\n役職: ${position}`,
    };

    // メールの送信
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
            res.status(500).send('メールの送信に失敗しました');
        } else {
            console.log('Email sent:', info.response);
            res.send('メールを送信しました');
        }
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`サーバーがポート${port}で起動しました`);
});
