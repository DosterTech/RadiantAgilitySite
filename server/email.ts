import { MailService } from '@sendgrid/mail';
import type { Inquiry, Lead } from '@shared/schema';
import { sendEmailSMTP } from './emailSMTP';

const mailService = new MailService();

if (process.env.SENDGRID_API_KEY) {
  // Clean the API key by removing any quotes and whitespace
  const cleanApiKey = process.env.SENDGRID_API_KEY.trim().replace(/['"]/g, '');
  mailService.setApiKey(cleanApiKey);
  console.log(`SendGrid API key configured (length: ${cleanApiKey.length}, starts with: ${cleanApiKey.substring(0, 3)})`);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY not provided. Email notification skipped.');
    return false;
  }

  // Try SendGrid Web API first
  try {
    console.log(`Attempting to send email via SendGrid API from ${params.from} to ${params.to}`);
    const response = await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    console.log('Email sent successfully via API:', response[0].statusCode);
    return true;
  } catch (error: any) {
    console.error('SendGrid API error:', error);
    if (error.response) {
      console.error('SendGrid API response:', error.response.body);
      
      // If credits exceeded, try SMTP relay
      if (error.response.body?.errors?.[0]?.message?.includes('Maximum credits exceeded')) {
        console.log('Credits exceeded, trying SMTP relay...');
        return await sendEmailSMTP(params);
      }
    }
    
    // Try SMTP as fallback for other errors
    console.log('API failed, trying SMTP relay...');
    return await sendEmailSMTP(params);
  }
}

export async function sendInquiryNotification(inquiry: Inquiry): Promise<boolean> {
  const emailBody = `
New Contact Request from ${inquiry.name}

Name: ${inquiry.name}
Email: ${inquiry.email}
Subject: ${inquiry.subject}

Message:
${inquiry.message}

Submitted: ${new Date(inquiry.createdAt).toLocaleString()}
  `.trim();

  const htmlBody = `
    <h2>New Contact Request from ${inquiry.name}</h2>
    <p><strong>Name:</strong> ${inquiry.name}</p>
    <p><strong>Email:</strong> ${inquiry.email}</p>
    <p><strong>Subject:</strong> ${inquiry.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${inquiry.message.replace(/\n/g, '<br>')}</p>
    <p><em>Submitted: ${new Date(inquiry.createdAt).toLocaleString()}</em></p>
  `;

  return await sendEmail({
    to: 'radiantagility@gmail.com',
    from: 'noreply@radiantagility.tech',
    subject: `New Contact Request from ${inquiry.name}`,
    text: emailBody,
    html: htmlBody,
  });
}

export async function sendLeadMagnetEmail(lead: Lead): Promise<boolean> {
  if (!lead.leadMagnet) {
    return false;
  }

  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://radiantagility.technology'
    : 'http://localhost:5000';

  switch (lead.leadMagnet) {
    case 'epic-toolkit':
      return await sendEmail({
        to: lead.email,
        from: 'hello@radiantagility.technology',
        subject: '🧩 Your Epic Toolkit is Ready! (Template + AI Prompts)',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #4c63d2 0%, #e5332a 100%); padding: 30px; text-align: center; color: white;">
              <h1>🧩 Your Epic Toolkit is Here!</h1>
              <p style="font-size: 18px; margin: 0;">Transform 6-month initiatives into sprint-ready stories</p>
            </div>
            
            <div style="padding: 30px; background: #f8f9fa;">
              <h2 style="color: #4c63d2;">Hi ${lead.name}!</h2>
              
              <p>Thanks for downloading our comprehensive Epic Toolkit! You're getting TWO powerful resources to master epic planning. 🚀</p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4c63d2;">
                <h3 style="color: #4c63d2; margin-top: 0;">📋 Epic Dependency Mapping Template</h3>
                <ul>
                  <li><strong>Visual Story Inventory</strong> - Map user stories with clear hierarchy</li>
                  <li><strong>Dependency Matrix</strong> - Track cross-team dependencies</li>
                  <li><strong>Critical Path Analysis</strong> - Identify risks and bottlenecks</li>
                  <li><strong>Sprint Planning Framework</strong> - Align epic work with sprints</li>
                  <li><strong>Risk Mitigation Planner</strong> - Proactive dependency management</li>
                  <li><strong>Progress Dashboard</strong> - Monitor execution in real-time</li>
                </ul>
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #e5332a;">
                <h3 style="color: #e5332a; margin-top: 0;">🧠 Epic Splitting AI Prompts Library</h3>
                <ul>
                  <li><strong>4-Step AI Framework</strong> - Epic Analyzer → INVEST Stories → Dependency Mapper → Story Sizing</li>
                  <li><strong>Ready-to-Use Prompts</strong> - Copy/paste for ChatGPT or Claude</li>
                  <li><strong>Real-World Example</strong> - E-commerce checkout epic broken down</li>
                  <li><strong>Quality Standards</strong> - Green/Yellow/Red light criteria</li>
                  <li><strong>Tool Integration Tips</strong> - Jira, Azure DevOps, Linear guidance</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <div style="display: inline-block; margin: 10px;">
                  <a href="${baseUrl}/attached_assets/RadiantAgility_Epic_Dependency_Mapping_Template_1754332688219.pdf" 
                     style="background: linear-gradient(135deg, #4c63d2 0%, #e5332a 100%); color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; margin: 5px;">
                    📋 Download Dependency Template
                  </a>
                </div>
                <div style="display: inline-block; margin: 10px;">
                  <a href="${baseUrl}/attached_assets/RadiantAgility_Epic_Splitting_AI_Prompts_Library_Minimal_1754332688219.pdf" 
                     style="background: linear-gradient(135deg, #4c63d2 0%, #e5332a 100%); color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; margin: 5px;">
                    🧠 Download AI Prompts Library
                  </a>
                </div>
              </div>
              
              <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h4 style="color: #4c63d2; margin-top: 0;">🎯 Quick Start Guide:</h4>
                <ol>
                  <li><strong>Start with AI Prompts</strong> - Use the 4-step framework to break down your epic (8 minutes)</li>
                  <li><strong>Map Dependencies</strong> - Use the template to visualize story relationships</li>
                  <li><strong>Plan Sprints</strong> - Sequence work based on critical path analysis</li>
                  <li><strong>Execute & Track</strong> - Monitor progress with the dependency dashboard</li>
                </ol>
              </div>
              
              <p><strong>💡 Pro Tip:</strong> The AI prompts work best when you provide specific context about your team size, tech stack, and sprint capacity. The more details you include, the better the suggestions!</p>
              
              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
              
              <h3 style="color: #4c63d2;">📚 More Free Agile Tools:</h3>
              <ul>
                <li><a href="${baseUrl}/dod-template" style="color: #4c63d2;">Definition of Done Template</a> - Crystal-clear completion criteria</li>
                <li><a href="${baseUrl}/dod-prompts" style="color: #4c63d2;">AI DoD Prompts Library</a> - ChatGPT prompts for DoD creation</li>
                <li><a href="${baseUrl}/ai-ci-toolkit" style="color: #4c63d2;">AI-CI Toolkit</a> - AI-enhanced CI/CD templates</li>
                <li><a href="${baseUrl}/flow-bingo" style="color: #4c63d2;">Flow Bottleneck Bingo</a> - Interactive retrospective game</li>
              </ul>
              
              <p style="margin-top: 30px;"><strong>Ready to master SAFe at scale?</strong> <a href="${baseUrl}/safe-training" style="color: #4c63d2; font-weight: bold;">Explore our SAFe Certification Classes</a> and learn enterprise agile practices that complement these tools.</p>
              
              <p style="color: #666; font-size: 14px; margin-top: 30px;">
                Best regards,<br>
                The Radiant Agility Team<br>
                <em>Your Partner in Agile Excellence</em>
              </p>
            </div>
          </div>
        `
      });

    case 'dod-prompts':
      return await sendEmail({
        to: lead.email,
        from: 'hello@radiantagility.technology',
        subject: '🚀 Your AI DoD Prompts Library is Here!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #4c63d2 0%, #e5332a 100%); padding: 30px; text-align: center; color: white;">
              <h1>Your AI DoD Prompts Library</h1>
              <p style="font-size: 18px; margin: 0;">Ready to create Definition of Done criteria 10x faster!</p>
            </div>
            
            <div style="padding: 30px; background: #f8f9fa;">
              <h2 style="color: #4c63d2;">Hi ${lead.name}!</h2>
              
              <p>Thanks for downloading our AI-powered Definition of Done Prompts Library! 🎯</p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4c63d2;">
                <h3 style="color: #4c63d2; margin-top: 0;">What's Inside:</h3>
                <ul>
                  <li><strong>5 Core DoD Prompts</strong> - Ready-to-use ChatGPT/Claude prompts</li>
                  <li><strong>Interactive Examples</strong> - See the prompts in action</li>
                  <li><strong>Customization Guide</strong> - Adapt prompts to your team's needs</li>
                  <li><strong>Quality Checklist</strong> - Ensure your DoD criteria are complete</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${baseUrl}/attached_assets/RadiantAgility_DoD_AI_Prompts_Library.pdf" 
                   style="background: linear-gradient(135deg, #4c63d2 0%, #e5332a 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                  📥 Download Your AI DoD Prompts Library
                </a>
              </div>
              
              <p><strong>Pro Tip:</strong> Start with the "Basic DoD Generator" prompt and customize it for your team's specific technology stack and quality standards.</p>
              
              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
              
              <h3 style="color: #4c63d2;">Want More Agile Tools?</h3>
              <ul>
                <li><a href="${baseUrl}/dod-template" style="color: #4c63d2;">Definition of Done Template</a> - Visual DoD framework</li>
                <li><a href="${baseUrl}/ai-ci-toolkit" style="color: #4c63d2;">AI-CI Toolkit</a> - AI-enhanced CI/CD templates</li>
                <li><a href="${baseUrl}/epic-toolkit" style="color: #4c63d2;">Epic Toolkit</a> - Dependency mapping + AI prompts</li>
                <li><a href="${baseUrl}/flow-bingo" style="color: #4c63d2;">Flow Bottleneck Bingo</a> - Interactive retrospective game</li>
              </ul>
              
              <p style="margin-top: 30px;">Ready to advance your Agile career? <a href="${baseUrl}/safe-training" style="color: #4c63d2; font-weight: bold;">Explore our SAFe Certification Classes</a></p>
              
              <p style="color: #666; font-size: 14px; margin-top: 30px;">
                Best regards,<br>
                The Radiant Agility Team<br>
                <em>Your Partner in Agile Excellence</em>
              </p>
            </div>
          </div>
        `
      });

    case 'dod-template':
      return await sendEmail({
        to: lead.email,
        from: 'hello@radiantagility.technology',
        subject: '📋 Your Definition of Done Template is Ready!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #4c63d2 0%, #e5332a 100%); padding: 30px; text-align: center; color: white;">
              <h1>Your Definition of Done Template</h1>
              <p style="font-size: 18px; margin: 0;">Crystal-clear completion criteria for every story</p>
            </div>
            
            <div style="padding: 30px; background: #f8f9fa;">
              <h2 style="color: #4c63d2;">Hi ${lead.name}!</h2>
              
              <p>Thanks for downloading our Definition of Done Template! This tool will help your team create consistent, comprehensive completion criteria. 🎯</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${baseUrl}/attached_assets/RadiantAgility_DoD_Template.pdf" 
                   style="background: linear-gradient(135deg, #4c63d2 0%, #e5332a 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                  📥 Download Your DoD Template
                </a>
              </div>
              
              <h3 style="color: #4c63d2;">More Free Agile Tools:</h3>
              <ul>
                <li><a href="${baseUrl}/dod-prompts" style="color: #4c63d2;">AI DoD Prompts Library</a> - ChatGPT prompts for DoD creation</li>
                <li><a href="${baseUrl}/epic-toolkit" style="color: #4c63d2;">Epic Toolkit</a> - Dependency mapping + AI prompts</li>
                <li><a href="${baseUrl}/ai-ci-toolkit" style="color: #4c63d2;">AI-CI Toolkit</a> - AI-enhanced CI/CD templates</li>
                <li><a href="${baseUrl}/flow-bingo" style="color: #4c63d2;">Flow Bottleneck Bingo</a> - Interactive retrospective game</li>
              </ul>
              
              <p style="margin-top: 30px;">Ready to advance your Agile career? <a href="${baseUrl}/safe-training" style="color: #4c63d2; font-weight: bold;">Explore our SAFe Certification Classes</a></p>
              
              <p style="color: #666; font-size: 14px; margin-top: 30px;">
                Best regards,<br>
                The Radiant Agility Team<br>
                <em>Your Partner in Agile Excellence</em>
              </p>
            </div>
          </div>
        `
      });

    case 'ai-ci-toolkit':
      return await sendEmail({
        to: lead.email,
        from: 'hello@radiantagility.technology',
        subject: '🤖 Your AI-CI Toolkit is Ready!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #4c63d2 0%, #e5332a 100%); padding: 30px; text-align: center; color: white;">
              <h1>Your AI-CI Toolkit</h1>
              <p style="font-size: 18px; margin: 0;">AI-enhanced CI/CD templates and workflows</p>
            </div>
            
            <div style="padding: 30px; background: #f8f9fa;">
              <h2 style="color: #4c63d2;">Hi ${lead.name}!</h2>
              
              <p>Thanks for downloading our AI-CI Toolkit! These templates will help you integrate AI into your CI/CD pipelines. 🤖</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${baseUrl}/attached_assets/GitHub Actions AI-CI Templates Collection.pdf" 
                   style="background: linear-gradient(135deg, #4c63d2 0%, #e5332a 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                  📥 Download Your AI-CI Toolkit
                </a>
              </div>
              
              <h3 style="color: #4c63d2;">More Free Agile Tools:</h3>
              <ul>
                <li><a href="${baseUrl}/dod-template" style="color: #4c63d2;">Definition of Done Template</a> - Crystal-clear completion criteria</li>
                <li><a href="${baseUrl}/dod-prompts" style="color: #4c63d2;">AI DoD Prompts Library</a> - ChatGPT prompts for DoD creation</li>
                <li><a href="${baseUrl}/epic-toolkit" style="color: #4c63d2;">Epic Toolkit</a> - Dependency mapping + AI prompts</li>
                <li><a href="${baseUrl}/flow-bingo" style="color: #4c63d2;">Flow Bottleneck Bingo</a> - Interactive retrospective game</li>
              </ul>
              
              <p style="margin-top: 30px;">Ready to advance your Agile career? <a href="${baseUrl}/safe-training" style="color: #4c63d2; font-weight: bold;">Explore our SAFe Certification Classes</a></p>
              
              <p style="color: #666; font-size: 14px; margin-top: 30px;">
                Best regards,<br>
                The Radiant Agility Team<br>
                <em>Your Partner in Agile Excellence</em>
              </p>
            </div>
          </div>
        `
      });

    default:
      console.log(`No email template for lead magnet: ${lead.leadMagnet}`);
      return false;
  }
}