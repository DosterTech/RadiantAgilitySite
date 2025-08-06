import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { 
  Brain, 
  Zap, 
  Target, 
  CheckCircle, 
  Download, 
  Copy,
  Users,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Lightbulb
} from 'lucide-react';

export default function EmotionAnalyzer() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const downloadMutation = useMutation({
    mutationFn: async (data: { email: string; leadMagnet: string }) => {
      return apiRequest('POST', '/api/leads', {
        ...data,
        name: 'Lead Magnet Download',
        company: 'Not specified',
        service: 'Emotion + Friction Analyzer Download'
      });
    },
    onSuccess: () => {
      toast({
        title: "Download Started!",
        description: "Your Emotion + Friction Analyzer will download now.",
      });
      
      // Create and download the HTML file with Radiant Agility branding
      setTimeout(() => {
        const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emotion + Friction Analyzer AI Prompt - Radiant Agility Technology</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --gradient-start: #4c63d2;
            --gradient-end: #3B1F56;
            --primary-purple: #4c63d2;
            --primary-coral: #3B1F56;
            --primary-dark: #3B1F56;
            --coral-dark: #2A1440;
            --light-gray: #94A3B8;
            --text-dark: #1E293B;
            --white: #FFFFFF;
            --bg-light: #F8FAFC;
            --border-light: #E2E8F0;
            --shadow-sm: 0 2px 4px rgba(0,0,0,0.06);
            --shadow-md: 0 4px 16px rgba(0,0,0,0.1);
            --shadow-lg: 0 10px 40px rgba(0,0,0,0.15);
            --shadow-xl: 0 20px 60px rgba(0,0,0,0.2);
            --glow-purple: 0 0 40px rgba(76, 99, 210, 0.3);
            --glow-coral: 0 0 40px rgba(59, 31, 86, 0.3);
        }

        body {
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
            min-height: 100vh;
            padding: 20px;
            color: var(--text-dark);
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: var(--white);
            border-radius: 24px;
            box-shadow: var(--shadow-xl);
            overflow: hidden;
            animation: fadeInUp 0.6s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        header {
            background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
            color: var(--white);
            padding: 60px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
            0%, 100% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(180deg);
            }
        }

        .brand-header {
            margin-bottom: 30px;
            position: relative;
            z-index: 1;
        }

        .brand-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 10px;
        }

        .logo-icon {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid white;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 18px;
            color: white;
        }

        .brand-name {
            font-size: 1.2em;
            font-weight: 600;
            color: white;
            opacity: 0.95;
        }

        .radiant-badge {
            position: absolute;
            top: 30px;
            right: 30px;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            padding: 10px 20px;
            border-radius: 30px;
            font-size: 0.9em;
            font-weight: 600;
            border: 1px solid rgba(255, 255, 255, 0.3);
            letter-spacing: 0.5px;
        }

        h1 {
            font-size: 3em;
            font-weight: 800;
            margin-bottom: 15px;
            position: relative;
            z-index: 1;
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from {
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
            }
            to {
                text-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(76, 99, 210, 0.4);
            }
        }

        .subtitle {
            font-size: 1.2em;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 300;
            margin-bottom: 30px;
            position: relative;
            z-index: 1;
        }

        .subtitle .lightning {
            display: inline-block;
            margin: 0 5px;
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.2);
            }
        }

        .action-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            position: relative;
            z-index: 1;
        }

        .btn {
            padding: 14px 32px;
            border-radius: 12px;
            border: none;
            font-weight: 600;
            font-size: 1em;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
            overflow: hidden;
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .btn:hover::before {
            width: 300px;
            height: 300px;
        }

        .btn-primary {
            background: var(--primary-coral);
            color: var(--white);
            box-shadow: 0 6px 20px rgba(59, 31, 86, 0.4);
        }

        .btn-primary:hover {
            background: var(--coral-dark);
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(59, 31, 86, 0.5);
        }

        .btn-secondary {
            background: var(--primary-purple);
            color: var(--white);
            box-shadow: 0 6px 20px rgba(76, 99, 210, 0.4);
        }

        .btn-secondary:hover {
            background: var(--primary-dark);
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(76, 99, 210, 0.5);
        }

        .btn-outline {
            background: rgba(255, 255, 255, 0.1);
            color: var(--white);
            border: 2px solid var(--white);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .btn-outline:hover {
            background: var(--white);
            color: var(--primary-purple);
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3);
        }

        .main-content {
            padding: 50px;
        }

        .prompt-builder {
            background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 40px;
            border: 1px solid var(--border-light);
            box-shadow: var(--shadow-md);
        }

        h2 {
            color: var(--text-dark);
            margin-bottom: 30px;
            font-size: 2em;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .input-group {
            margin-bottom: 25px;
        }

        label {
            display: block;
            font-weight: 600;
            margin-bottom: 10px;
            color: var(--text-dark);
            font-size: 0.95em;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        input, textarea, select {
            width: 100%;
            padding: 14px 18px;
            border: 2px solid var(--border-light);
            border-radius: 12px;
            font-size: 1em;
            font-family: 'Poppins', sans-serif;
            transition: all 0.3s ease;
            background: var(--white);
        }

        textarea {
            min-height: 120px;
            resize: vertical;
        }

        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: var(--primary-purple);
            box-shadow: 0 0 0 4px rgba(76, 99, 210, 0.1);
            transform: translateY(-2px);
        }

        .analysis-type {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin-top: 10px;
        }

        .type-btn {
            padding: 10px 20px;
            border: 2px solid var(--border-light);
            background: var(--white);
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
            position: relative;
            overflow: hidden;
        }

        .type-btn.active {
            background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
            color: var(--white);
            border-color: transparent;
            box-shadow: 0 4px 15px rgba(76, 99, 210, 0.3);
        }

        .type-btn:hover:not(.active) {
            border-color: var(--primary-purple);
            background: linear-gradient(135deg, rgba(76, 99, 210, 0.05) 0%, rgba(59, 31, 86, 0.05) 100%);
            transform: translateY(-2px);
        }

        .prompt-output {
            background: var(--white);
            border: 3px solid transparent;
            background-image: linear-gradient(var(--white), var(--white)), 
                              linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
            background-origin: border-box;
            background-clip: padding-box, border-box;
            border-radius: 20px;
            padding: 30px;
            margin-top: 40px;
            position: relative;
            box-shadow: var(--shadow-lg);
        }

        .prompt-text {
            background: linear-gradient(135deg, rgba(76, 99, 210, 0.03) 0%, rgba(59, 31, 86, 0.03) 100%);
            border-left: 4px solid;
            border-image: linear-gradient(135deg, var(--gradient-start), var(--gradient-end)) 1;
            padding: 25px;
            border-radius: 12px;
            font-family: 'Courier New', monospace;
            white-space: pre-wrap;
            word-wrap: break-word;
            color: var(--text-dark);
            line-height: 1.8;
            font-size: 0.95em;
        }

        .copy-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
            color: var(--white);
            border: none;
            padding: 10px 20px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 0.9em;
            font-weight: 600;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            box-shadow: 0 4px 15px rgba(76, 99, 210, 0.3);
        }

        .copy-btn:hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 6px 20px rgba(76, 99, 210, 0.4);
        }

        .copy-btn.copied {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .examples-section {
            margin-top: 50px;
            padding: 40px;
            background: linear-gradient(135deg, rgba(76, 99, 210, 0.05) 0%, rgba(59, 31, 86, 0.05) 100%);
            border-radius: 20px;
            border: 1px solid var(--border-light);
        }

        .example-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }

        .example-card {
            background: var(--white);
            padding: 25px;
            border-radius: 16px;
            box-shadow: var(--shadow-md);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
        }

        .example-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .example-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-xl);
            border-color: var(--primary-purple);
        }

        .example-card:hover::before {
            transform: scaleX(1);
        }

        .example-title {
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .example-icon {
            width: 24px;
            height: 24px;
            border-radius: 6px;
            background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }

        .example-desc {
            color: var(--light-gray);
            font-size: 0.9em;
            line-height: 1.5;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2.2em;
            }
            
            .main-content, header {
                padding: 30px 20px;
            }
            
            .action-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .btn {
                width: 100%;
                max-width: 280px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="brand-header">
                <div class="brand-logo">
                    <div class="logo-icon">RA</div>
                    <span class="brand-name">Radiant Agility Technology</span>
                </div>
            </div>
            <div class="radiant-badge">J Series Tool</div>
            <h1>📊 Emotion + Friction Analyzer</h1>
            <p class="subtitle">AI-powered prompts to decode customer emotions and eliminate friction points <span class="lightning">⚡</span></p>
            <div class="action-buttons">
                <button class="btn btn-primary" onclick="downloadHTML()">💾 Download Tool</button>
                <button class="btn btn-secondary" onclick="generatePrompt()">🚀 Generate Prompt</button>
                <button class="btn btn-outline" onclick="copyPrompt()">📋 Copy to Clipboard</button>
            </div>
        </header>

        <div class="main-content">
            <div class="prompt-builder">
                <h2>🧠 AI Prompt Builder</h2>
                
                <div class="input-group">
                    <label for="journey-stage">Journey Stage</label>
                    <select id="journey-stage">
                        <option value="Awareness">Awareness Stage</option>
                        <option value="Consideration">Consideration Stage</option>
                        <option value="Decision">Decision Stage</option>
                        <option value="Purchase">Purchase Stage</option>
                        <option value="Onboarding">Onboarding Stage</option>
                        <option value="Usage">Usage/Experience Stage</option>
                        <option value="Support">Support Stage</option>
                        <option value="Renewal">Renewal/Loyalty Stage</option>
                        <option value="Advocacy">Advocacy Stage</option>
                    </select>
                </div>

                <div class="input-group">
                    <label for="touchpoint">Primary Touchpoint</label>
                    <input type="text" id="touchpoint" placeholder="e.g., Landing page, mobile app, customer service call, checkout process">
                </div>

                <div class="input-group">
                    <label for="context">Business Context</label>
                    <textarea id="context" placeholder="Describe your business type, target audience, and specific situation you want to analyze..."></textarea>
                </div>

                <div class="input-group">
                    <label>Analysis Type</label>
                    <div class="analysis-type">
                        <div class="type-btn active" data-type="emotion">😊 Emotion Analysis</div>
                        <div class="type-btn" data-type="friction">⚠️ Friction Detection</div>
                        <div class="type-btn" data-type="combined">🔄 Combined Analysis</div>
                        <div class="type-btn" data-type="recommendations">💡 Get Recommendations</div>
                    </div>
                </div>

                <div class="input-group">
                    <label for="data-source">Available Data</label>
                    <select id="data-source">
                        <option value="analytics">Website/App Analytics</option>
                        <option value="surveys">Customer Surveys</option>
                        <option value="interviews">User Interviews</option>
                        <option value="support">Support Tickets</option>
                        <option value="reviews">Reviews & Feedback</option>
                        <option value="observations">Direct Observations</option>
                        <option value="mixed">Multiple Sources</option>
                    </select>
                </div>

                <button class="btn btn-primary" onclick="generatePrompt()">🎯 Generate AI Prompt</button>
            </div>

            <div class="prompt-output" id="prompt-output" style="display: none;">
                <button class="copy-btn" id="copy-btn" onclick="copyPrompt()">📋 Copy</button>
                <h3 style="color: var(--text-dark); margin-bottom: 20px; font-size: 1.4em;">Your AI Prompt:</h3>
                <div class="prompt-text" id="prompt-text"></div>
            </div>

            <div class="examples-section">
                <h2>🎯 Example Use Cases</h2>
                
                <div class="example-grid">
                    <div class="example-card" onclick="loadExample('ecommerce')">
                        <div class="example-title">
                            <span class="example-icon">🛒</span>
                            E-commerce Checkout
                        </div>
                        <div class="example-desc">Analyze cart abandonment and payment friction in your online store checkout process.</div>
                    </div>
                    
                    <div class="example-card" onclick="loadExample('saas')">
                        <div class="example-title">
                            <span class="example-icon">💻</span>
                            SaaS Onboarding
                        </div>
                        <div class="example-desc">Identify emotional drops and confusion points during user onboarding flows.</div>
                    </div>
                    
                    <div class="example-card" onclick="loadExample('mobile')">
                        <div class="example-title">
                            <span class="example-icon">📱</span>
                            Mobile App Usage
                        </div>
                        <div class="example-desc">Discover usability issues and emotional triggers in mobile app interactions.</div>
                    </div>
                    
                    <div class="example-card" onclick="loadExample('support')">
                        <div class="example-title">
                            <span class="example-icon">🎧</span>
                            Customer Support
                        </div>
                        <div class="example-desc">Map emotional journey through support interactions and resolution processes.</div>
                    </div>
                    
                    <div class="example-card" onclick="loadExample('retail')">
                        <div class="example-title">
                            <span class="example-icon">🏪</span>
                            In-Store Experience
                        </div>
                        <div class="example-desc">Analyze physical retail touchpoints and customer emotional responses.</div>
                    </div>
                    
                    <div class="example-card" onclick="loadExample('subscription')">
                        <div class="example-title">
                            <span class="example-icon">🔄</span>
                            Subscription Renewal
                        </div>
                        <div class="example-desc">Understand cancellation triggers and renewal motivation factors.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        let currentAnalysisType = 'emotion';

        // Analysis type selection
        document.querySelectorAll('.type-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentAnalysisType = this.dataset.type;
            });
        });

        function generatePrompt() {
            const stage = document.getElementById('journey-stage').value;
            const touchpoint = document.getElementById('touchpoint').value;
            const context = document.getElementById('context').value;
            const dataSource = document.getElementById('data-source').value;

            let prompt = '';

            if (currentAnalysisType === 'emotion') {
                prompt = \`You are an expert UX researcher and customer journey analyst. I need you to help me analyze the emotional journey of customers at the \${stage} stage, specifically when they interact with: \${touchpoint}.

Context:
\${context}

Data Available: \${dataSource}

Please provide:
1. **Emotional Mapping**: Identify the likely emotional states customers experience during this touchpoint
2. **Emotional Triggers**: What specific elements or moments might cause emotional shifts (positive or negative)
3. **Emotional Peaks & Valleys**: Where do customers feel most confident vs. most uncertain?
4. **Emotional Recovery Points**: How can we help customers recover from negative emotions?
5. **Measurement Recommendations**: What metrics should we track to monitor emotional health?

Format your response with specific, actionable insights that our team can implement immediately.\`;

            } else if (currentAnalysisType === 'friction') {
                prompt = \`You are a conversion optimization expert specializing in friction analysis. I need you to identify and prioritize friction points at the \${stage} stage, specifically within: \${touchpoint}.

Context:
\${context}

Data Available: \${dataSource}

Please analyze:
1. **Friction Audit**: List potential friction points customers might encounter
2. **Friction Severity**: Rate each friction point by impact (High/Medium/Low)
3. **Root Cause Analysis**: Why does each friction point exist?
4. **Quick Wins**: Which friction points can be resolved with minimal effort?
5. **Long-term Solutions**: What systemic changes would eliminate major friction?
6. **Success Metrics**: How should we measure friction reduction success?

Prioritize your recommendations by business impact and implementation difficulty.\`;

            } else if (currentAnalysisType === 'combined') {
                prompt = \`You are a customer experience strategist combining emotional intelligence with conversion optimization. Analyze the \${stage} stage, focusing on: \${touchpoint}.

Context:
\${context}

Data Available: \${dataSource}

Provide a holistic analysis covering:

**EMOTIONAL DIMENSION:**
1. Current emotional state of customers at this touchpoint
2. Desired emotional outcome we should aim for
3. Emotional barriers preventing positive progression

**FRICTION DIMENSION:**
1. Functional friction points (usability, process, technical)
2. Cognitive friction (confusion, decision paralysis, overwhelm)
3. Emotional friction (fear, doubt, frustration)

**INTEGRATED SOLUTIONS:**
1. Solutions that simultaneously reduce friction AND improve emotions
2. Trade-offs where reducing friction might impact emotions (or vice versa)
3. Prioritized action plan with expected emotional and conversion impact

**MEASUREMENT FRAMEWORK:**
Recommend specific metrics for tracking both emotional health and friction reduction.

Focus on actionable insights our team can implement within 30-60-90 day timeframes.\`;

            } else if (currentAnalysisType === 'recommendations') {
                prompt = \`You are a customer experience consultant providing strategic recommendations for the \${stage} stage, specifically for: \${touchpoint}.

Context:
\${context}

Data Available: \${dataSource}

Please provide:

**IMMEDIATE ACTIONS (0-30 days):**
1. Quick wins to improve customer experience
2. Low-cost/high-impact changes
3. Messaging or copy improvements

**SHORT-TERM INITIATIVES (30-60 days):**
1. Process improvements
2. Feature enhancements
3. Training requirements

**STRATEGIC CHANGES (60+ days):**
1. System or platform modifications
2. Organizational changes
3. Technology investments

**SUCCESS FRAMEWORK:**
1. Key metrics to track improvement
2. Testing methodology recommendations
3. Timeline for expected results

**RISK MITIGATION:**
1. Potential negative consequences of changes
2. How to minimize disruption during implementation
3. Rollback plans if needed

Format as an executive summary with clear action items, owners, and success criteria.\`;
            }

            document.getElementById('prompt-text').textContent = prompt;
            document.getElementById('prompt-output').style.display = 'block';
            document.getElementById('prompt-output').scrollIntoView({ behavior: 'smooth' });
        }

        function copyPrompt() {
            const promptText = document.getElementById('prompt-text').textContent;
            navigator.clipboard.writeText(promptText).then(() => {
                const copyBtn = document.getElementById('copy-btn');
                copyBtn.textContent = '✅ Copied!';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.textContent = '📋 Copy';
                    copyBtn.classList.remove('copied');
                }, 2000);
            });
        }

        function loadExample(type) {
            const examples = {
                ecommerce: {
                    stage: 'Decision',
                    touchpoint: 'Checkout process and payment page',
                    context: 'E-commerce fashion retailer with 15% cart abandonment rate. Target audience: women 25-45, mobile-first shoppers.',
                    dataSource: 'analytics'
                },
                saas: {
                    stage: 'Onboarding',
                    touchpoint: 'Initial setup wizard and first-time user experience',
                    context: 'B2B project management SaaS with complex feature set. Users are team leaders and project managers in mid-size companies.',
                    dataSource: 'mixed'
                },
                mobile: {
                    stage: 'Usage',
                    touchpoint: 'Core feature navigation and task completion',
                    context: 'Fitness tracking mobile app. Users are health-conscious millennials using the app daily for workout logging.',
                    dataSource: 'analytics'
                },
                support: {
                    stage: 'Support',
                    touchpoint: 'Help desk ticket submission and resolution process',
                    context: 'SaaS customer support for technical product. Users are frustrated when they contact support.',
                    dataSource: 'support'
                },
                retail: {
                    stage: 'Consideration',
                    touchpoint: 'In-store product discovery and sales interaction',
                    context: 'High-end electronics retail store. Customers are researching expensive purchases and need guidance.',
                    dataSource: 'observations'
                },
                subscription: {
                    stage: 'Renewal',
                    touchpoint: 'Subscription renewal notification and payment process',
                    context: 'Streaming service with monthly subscriptions. Facing increased churn due to market competition.',
                    dataSource: 'surveys'
                }
            };

            const example = examples[type];
            if (example) {
                document.getElementById('journey-stage').value = example.stage;
                document.getElementById('touchpoint').value = example.touchpoint;
                document.getElementById('context').value = example.context;
                document.getElementById('data-source').value = example.dataSource;
                
                // Scroll to the form
                document.querySelector('.prompt-builder').scrollIntoView({ behavior: 'smooth' });
            }
        }

        function downloadHTML() {
            const content = document.documentElement.outerHTML;
            const blob = new Blob([content], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'RadiantAgility_Emotion_Friction_Analyzer.html';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // Add footer with Radiant Agility Technology branding
        document.addEventListener('DOMContentLoaded', function() {
            const footer = document.createElement('div');
            footer.innerHTML = \`
                <div style="background: #f8f9fa; padding: 30px; text-align: center; border-top: 3px solid var(--primary-purple); margin-top: 40px;">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 15px;">
                        <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #4c63d2 0%, #3B1F56 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 14px;">RA</div>
                        <span style="font-weight: 600; color: #1f2937; font-size: 1.1em;">Radiant Agility Technology</span>
                    </div>
                    <p style="color: #6b7280; margin-bottom: 10px;">Your Partner in Agile Excellence</p>
                    <p style="color: #9ca3af; font-size: 0.9em;">© 2025 Radiant Agility Technology. Licensed for team use.</p>
                    <p style="color: #9ca3af; font-size: 0.9em; margin-top: 5px;">Need help with emotion analysis? Contact us at <a href="mailto:hello@radiantagility.tech" style="color: var(--primary-purple);">hello@radiantagility.tech</a></p>
                </div>
            \`;
            document.querySelector('.container').appendChild(footer);
        });
    </script>
</body>
</html>`;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'RadiantAgility_Emotion_Friction_Analyzer.html';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 1000);
      
      setEmail('');
    },
    onError: (error) => {
      toast({
        title: "Download Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
      console.error('Download error:', error);
    },
  });

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email to download the analyzer.",
        variant: "destructive",
      });
      return;
    }
    
    downloadMutation.mutate({ 
      email: email.trim(), 
      leadMagnet: 'Emotion + Friction Analyzer' 
    });
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Generate sophisticated prompts for ChatGPT, Claude, and other AI tools"
    },
    {
      icon: Zap,
      title: "Real-Time Insights",
      description: "Instantly analyze emotional states and friction points across touchpoints"
    },
    {
      icon: Target,
      title: "Actionable Recommendations",
      description: "Get specific, prioritized solutions for immediate implementation"
    }
  ];

  const benefits = [
    "Decode hidden customer emotions at every touchpoint",
    "Identify friction before it impacts conversions",
    "Generate AI prompts tailored to your specific context",
    "Prioritize improvements by business impact",
    "Combine emotional and functional analysis",
    "Get actionable insights in 30-60-90 day timeframes"
  ];

  const toolkitCrossPromo = [
    {
      title: "Journey Toolkit",
      description: "Interactive journey mapping with emotion tracking",
      href: "/journey-toolkit"
    },
    {
      title: "Flow Toolkit", 
      description: "Daily stand-up questions and WIP calculator",
      href: "/flow-toolkit"
    },
    {
      title: "Gestalt Toolkit",
      description: "Design principles and UX audit templates",
      href: "/gestalt-toolkit"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#4c63d2] to-[#3B1F56] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Agile Alphabet Series: J — Journey Analysis
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              📊 Emotion + Friction Analyzer
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              AI-powered prompts to decode customer emotions and eliminate friction points at every touchpoint
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#3B1F56] hover:bg-purple-50 font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="h-5 w-5 mr-2" />
                Get Free AI Analyzer
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#3B1F56] font-semibold px-8 py-4 text-lg"
                onClick={() => window.open('#', '_blank')}
              >
                <Brain className="h-5 w-5 mr-2" />
                Preview Tool
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Decode Every Customer Emotion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform customer insights into breakthrough improvements with AI-generated analysis prompts
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-[#4c63d2] to-[#3B1F56] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Emotion + Friction Analysis Matters
              </h2>
              <p className="text-xl text-gray-600">
                Understand what customers feel AND why they get stuck
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Download Form Section */}
      <div id="download-form" className="py-20 bg-gradient-to-r from-[#4c63d2] to-[#3B1F56]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Download Your Free Emotion + Friction Analyzer
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get instant access to our AI prompt builder with ready-to-use templates for ChatGPT, Claude, and other AI tools
            </p>
            
            <form onSubmit={handleDownload} className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <Input
                  type="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg py-4 px-6 border-2 border-gray-200 focus:border-[#4c63d2] rounded-xl"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-[#4c63d2] to-[#3B1F56] hover:from-[#3B1F56] hover:to-[#4c63d2] text-white font-semibold py-4 text-lg rounded-xl"
                disabled={downloadMutation.isPending}
              >
                {downloadMutation.isPending ? (
                  <>
                    <Brain className="h-5 w-5 mr-2 animate-spin" />
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5 mr-2" />
                    Download AI Analyzer
                  </>
                )}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                No spam, ever. Unsubscribe anytime. Free analyzer includes AI prompt builder.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Toolkit Cross-Promotion */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Your Journey Analysis Toolkit
            </h2>
            <p className="text-xl text-gray-600">
              Combine emotion analysis with comprehensive journey mapping
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {toolkitCrossPromo.map((toolkit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{toolkit.title}</h3>
                <p className="text-gray-600 mb-6">{toolkit.description}</p>
                <a 
                  href={toolkit.href}
                  className="inline-flex items-center text-[#4c63d2] font-semibold hover:text-[#3B1F56] transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-[#3B1F56] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with New Toolkits</h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
            Get notified when we release new tools in the Agile Alphabet Series
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border-white/20 text-white placeholder-purple-200"
            />
            <Button className="bg-white text-[#3B1F56] hover:bg-purple-50 font-semibold whitespace-nowrap">
              <Lightbulb className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}