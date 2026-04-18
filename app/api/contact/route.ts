import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, entreprise, email, telephone, sujet, message, bot_field } = body;

    // 1. Simple Anti-spam (Honeypot)
    if (bot_field) {
      return NextResponse.json({ success: true, message: 'Message envoyé.' }, { status: 200 });
    }

    // 2. Validation
    if (!nom || !email || !message) {
      return NextResponse.json({ success: false, error: 'Champs obligatoires manquants.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'Format d\'email invalide.' }, { status: 400 });
    }

    // 3. Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 4. Send Email
    const mailOptions = {
      from: `Doupa Energie Web "${nom}" <${email}>`, // From user
      to: process.env.GMAIL_USER, // To your Gmail
      replyTo: email,
      subject: `Nouveau message: ${sujet || 'Demande de contact'} - ${nom}`,
      html: `    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouvelle demande - Doupa Énergie</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background-color: #f4f7fb;
          -webkit-font-smoothing: antialiased;
        }
        
        .wrapper {
          width: 100%;
          table-layout: fixed;
          background-color: #f4f7fb;
          padding-top: 40px;
          padding-bottom: 40px;
        }
        
        .main {
          background-color: #ffffff;
          margin: 0 auto;
          width: 100%;
          max-width: 600px;
          border-radius: 16px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.03);
        }
        
        .header {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          padding: 40px 32px;
          text-align: center;
          border-bottom: 1px solid #f1f5f9;
          position: relative;
        }

        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #ea580c 0%, #f59e0b 100%);
        }
        
        .logo {
          font-size: 26px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.5px;
          margin: 0;
        }
        
        .logo span {
          background: linear-gradient(90deg, #ea580c 0%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .badge {
          display: inline-block;
          margin-top: 16px;
          padding: 6px 16px;
          background-color: #fff7ed;
          color: #ea580c;
          border: 1px solid #ffedd5;
          border-radius: 99px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.3px;
        }
        
        .content {
          padding: 40px 32px;
        }
        
        .greeting {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
        }
        
        .intro {
          font-size: 15px;
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 32px 0;
        }
        
        .card {
          background-color: #f8fafc;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
          border: 1px solid #f1f5f9;
        }
        
        .row {
          margin-bottom: 16px;
        }
        .row:last-child {
          margin-bottom: 0;
        }
        
        .label {
          font-size: 12px;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
          display: block;
        }
        
        .value {
          font-size: 15px;
          font-weight: 500;
          color: #1e293b;
          display: block;
        }
        
        .value a {
          color: #ea580c;
          text-decoration: none;
          font-weight: 600;
        }
        
        .message-block {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-left: 4px solid #f59e0b;
          border-radius: 8px;
          padding: 20px;
          margin-top: 24px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
        
        .message-title {
          font-size: 12px;
          font-weight: 700;
          color: #f59e0b;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }
        
        .message-body {
          font-size: 15px;
          line-height: 1.6;
          color: #334155;
          margin: 0;
          white-space: pre-wrap;
        }
        
        .cta {
          text-align: center;
          margin-top: 40px;
        }
        
        .btn {
          display: inline-block;
          background: linear-gradient(90deg, #ea580c 0%, #f59e0b 100%);
          color: #ffffff !important;
          text-decoration: none;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(234, 88, 12, 0.25);
        }
        
        .footer {
          padding: 24px 32px;
          text-align: center;
          background-color: #f8fafc;
          border-top: 1px solid #f1f5f9;
        }
        
        .footer p {
          margin: 0 0 4px 0;
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
        }
        
        .footer span {
          font-size: 12px;
          color: #94a3b8;
        }
        
        @media screen and (max-width: 600px) {
          .wrapper { padding: 20px 10px; }
          .content { padding: 30px 20px; }
          .header { padding: 30px 20px; }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="main">
          <div class="header">
            <h1 class="logo">DOUPA <span>ÉNERGIE</span></h1>
            <div class="badge">Nouvelle Demande de Contact</div>
          </div>
          
          <div class="content">
            <h2 class="greeting">Bonjour l'équipe,</h2>
            <p class="intro">Une nouvelle demande a été soumise via le formulaire de contact de votre site internet. Voici les détails :</p>
            
            <div class="card">
              <div class="row">
                <span class="label">Client</span>
                <span class="value">${nom}</span>
              </div>
              <div class="row">
                <span class="label">Entreprise</span>
                <span class="value">${entreprise || '<span style="color: #94a3b8; font-weight: 400;">Non renseigné</span>'}</span>
              </div>
              <div class="row" style="margin-top: 16px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="50%">
                      <span class="label">Email</span>
                      <span class="value"><a href="mailto:${email}">${email}</a></span>
                    </td>
                    <td width="50%">
                      <span class="label">Téléphone</span>
                      <span class="value">${telephone ? `<a href="tel:${telephone}" style="color: #0f172a;">${telephone}</a>` : '<span style="color: #94a3b8; font-weight: 400;">Non renseigné</span>'}</span>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="row" style="margin-top: 16px;">
                <span class="label">Sujet de la demande</span>
                <span class="value" style="font-weight: 600;">${sujet || 'Demande générale'}</span>
              </div>
            </div>
            
            <div class="message-block">
              <div class="message-title">Message du client</div>
              <div class="message-body">${message.replace(/\n/g, '<br/>')}</div>
            </div>
            
            <div class="cta">
              <a href="mailto:${email}?subject=RE: ${sujet || 'Votre demande Doupa Énergie'}" class="btn">
                Répondre à ${nom}
              </a>
            </div>
          </div>
          
          <div class="footer">
            <p>Doupa Énergie - Solutions énergétiques innovantes</p>
            <span>Cet email est généré automatiquement. Merci de ne pas y répondre directement.</span>
          </div>
        </div>
      </div>
    </body>
    </html>
    `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email envoyé avec succès !' }, { status: 200 });
    
  } catch (error) {
    console.error('API Contact Error (Nodemailer):', error);
    return NextResponse.json({ success: false, error: 'Erreur lors de l\'envoi de l\'email.' }, { status: 500 });
  }
}
