import { Resend } from 'resend';

export class EmailService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  async sendPasswordResetEmail(toEmail: string, token: string): Promise<void> {
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    const resetLink = `${frontendUrl}/reset-password?token=${token}`;

    try {
      const { data, error } = await this.resend.emails.send({
        from: 'Equipe Ribbit <suporte@ribbit.app.br>', 
        to: toEmail,
        subject: 'Recuperação de Senha - Ribbit',
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
      });

      if (error) {
        console.error("Erro da API do Resend:", error);
        return;
      }

      console.log("E-mail de recuperação enviado com sucesso via Resend! ID:", data?.id);

    } catch (error) {
      console.error("Erro inesperado no serviço de e-mail:", error);
    }
  }
}