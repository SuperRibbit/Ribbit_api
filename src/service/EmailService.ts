import nodemailer from "nodemailer";

export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "142.250.0.108",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  async sendPasswordResetEmail(toEmail: string, token: string): Promise<void> {
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    const resetLink = `${frontendUrl}/reset-password?token=${token}`;

    const mailOptions = {
      from: `"Equipe Ribbit" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "Recuperação de Senha - Ribbit",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h2 style="color: #2E8B57;">Olá!</h2>
          <p>Recebemos uma solicitação para redefinir a senha da sua conta no <strong>Ribbit</strong>.</p>
          <p>Clique no botão abaixo para criar uma nova senha. Este link é válido por 15 minutos.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetLink}" style="background-color: #2E8B57; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Redefinir Minha Senha
            </a>
          </div>
          
          <p style="font-size: 14px; color: #666;">Se você não solicitou essa alteração, pode ignorar este e-mail em segurança.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;" />
          <p style="font-size: 12px; color: #999; text-align: center;">Ribbit Cursos - O seu salto no aprendizado.</p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
    }
  }
}