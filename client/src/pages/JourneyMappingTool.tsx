import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Download, 
  ExternalLink,
  Map,
  Layers,
  ArrowRight,
  BookOpen,
  Lightbulb
} from 'lucide-react';

export default function JourneyMappingTool() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const downloadMutation = useMutation({
    mutationFn: async (data: { email: string; leadMagnet: string }) => {
      return apiRequest('POST', '/api/leads', {
        ...data,
        name: 'Lead Magnet Download',
        company: 'Not specified',
        service: 'Journey Mapping Tool Download'
      });
    },
    onSuccess: () => {
      toast({
        title: "Download Started!",
        description: "Your interactive Journey Mapping Tool will download now.",
      });
      
      // Create and download the HTML file
      setTimeout(() => {
        const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Journey Map Template - Radiant Agility Technology</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #4c63d2;
            --primary-dark: #3B1F56;
            --secondary: #f59e0b;
            --success: #10b981;
            --danger: #ef4444;
            --warning: #f97316;
            --dark: #1f2937;
            --light: #f9fafb;
            --gradient: linear-gradient(135deg, #4c63d2 0%, #3B1F56 100%);
        }

        body {
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #4c63d2 0%, #3B1F56 100%);
            min-height: 100vh;
            padding: 20px;
            color: #1f2937;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }

        header {
            background: linear-gradient(135deg, #4c63d2 0%, #3B1F56 100%);
            color: white;
            padding: 30px;
            text-align: center;
            position: relative;
        }

        .brand-header {
            margin-bottom: 20px;
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

        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 2.5em;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .subtitle {
            font-size: 1.1em;
            opacity: 0.9;
            margin-bottom: 20px;
        }

        .download-section {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .download-btn, .export-btn {
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid white;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1em;
            font-weight: 600;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .download-btn:hover, .export-btn:hover {
            background: white;
            color: var(--primary);
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .controls {
            display: flex;
            gap: 20px;
            padding: 30px;
            background: #f8f9fa;
            flex-wrap: wrap;
            justify-content: center;
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        label {
            font-weight: 600;
            color: var(--dark);
            font-size: 0.9em;
        }

        input, select {
            padding: 10px;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            font-size: 1em;
            transition: all 0.3s ease;
        }

        input:focus, select:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(76, 99, 210, 0.1);
        }

        button {
            background: var(--primary);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1em;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        button:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(76, 99, 210, 0.3);
        }

        .journey-map {
            padding: 30px;
            overflow-x: auto;
        }

        .journey-table {
            width: 100%;
            min-width: 800px;
            border-collapse: separate;
            border-spacing: 0;
        }

        .journey-table th {
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
            padding: 15px;
            text-align: left;
            font-weight: 700;
            color: var(--dark);
            border-bottom: 3px solid var(--primary);
            position: sticky;
            top: 0;
            z-index: 10;
        }

        .journey-table td {
            padding: 15px;
            border-bottom: 1px solid #e5e7eb;
            vertical-align: top;
        }

        .stage-cell {
            font-weight: 600;
            color: var(--primary);
            background: linear-gradient(135deg, #f0f0ff 0%, #f8f8ff 100%);
        }

        .editable {
            background: transparent;
            border: 1px dashed #d1d5db;
            padding: 8px;
            border-radius: 4px;
            width: 100%;
            min-height: 60px;
            transition: all 0.3s ease;
            white-space: pre-wrap;
        }

        .editable:hover {
            background: #f9fafb;
            border-color: var(--primary);
        }

        .editable:focus {
            outline: none;
            border: 2px solid var(--primary);
            background: white;
            box-shadow: 0 0 0 3px rgba(76, 99, 210, 0.1);
        }

        .emotion-score {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.9em;
        }

        .emotion-positive {
            background: #d1fae5;
            color: #065f46;
        }

        .emotion-neutral {
            background: #fef3c7;
            color: #92400e;
        }

        .emotion-negative {
            background: #fee2e2;
            color: #991b1b;
        }

        .add-stage-btn {
            background: var(--success);
            margin-top: 20px;
        }

        .add-stage-btn:hover {
            background: #059669;
        }

        .insights-section {
            padding: 30px;
            background: #f8f9fa;
            border-top: 3px solid var(--primary);
        }

        .insights-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .insight-card {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .insight-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .insight-card h3 {
            color: var(--primary);
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .icon {
            width: 24px;
            height: 24px;
            display: inline-block;
        }

        .pain-point {
            background: #fef2f2;
            border-left: 4px solid var(--danger);
            padding: 10px;
            margin: 10px 0;
            border-radius: 4px;
        }

        .opportunity {
            background: #f0fdf4;
            border-left: 4px solid var(--success);
            padding: 10px;
            margin: 10px 0;
            border-radius: 4px;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 1.8em;
            }
            
            .controls {
                flex-direction: column;
            }
            
            .control-group {
                width: 100%;
            }
        }

        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .container {
                box-shadow: none;
                border-radius: 0;
            }
            
            .download-section, .controls {
                display: none;
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
            <h1>🗺️ Dynamic Journey Map Template</h1>
            <p class="subtitle">Map your customer's journey with AI-powered insights</p>
            <div class="download-section">
                <button class="download-btn" onclick="downloadHTML()">💾 Download This Template</button>
                <button class="export-btn" onclick="exportData()">📊 Export Journey Data</button>
                <button class="export-btn" onclick="window.print()">🖨️ Print Journey Map</button>
            </div>
        </header>

        <div class="controls">
            <div class="control-group">
                <label for="persona">Persona Name:</label>
                <input type="text" id="persona" placeholder="e.g., Tech-Savvy Millennial" value="New Customer">
            </div>
            <div class="control-group">
                <label for="scenario">Journey Scenario:</label>
                <input type="text" id="scenario" placeholder="e.g., First-time Purchase" value="Product Discovery to Purchase">
            </div>
            <div class="control-group">
                <label for="journey-type">Journey Type:</label>
                <select id="journey-type">
                    <option value="customer">Customer Journey</option>
                    <option value="employee">Employee Journey</option>
                    <option value="user">User Journey</option>
                    <option value="partner">Partner Journey</option>
                </select>
            </div>
            <button onclick="updateJourneyInfo()">Update Journey Info</button>
        </div>

        <div class="journey-map">
            <table class="journey-table" id="journeyTable">
                <thead>
                    <tr>
                        <th>Stage</th>
                        <th>Actions</th>
                        <th>Thoughts</th>
                        <th>Emotions</th>
                        <th>Touchpoints</th>
                        <th>Pain Points</th>
                        <th>Opportunities</th>
                    </tr>
                </thead>
                <tbody id="journeyBody">
                    <tr>
                        <td class="stage-cell">Awareness</td>
                        <td><div contenteditable="true" class="editable">Discovers product through social media ad</div></td>
                        <td><div contenteditable="true" class="editable">"This looks interesting, but is it worth it?"</div></td>
                        <td><span class="emotion-score emotion-neutral">😐 Curious</span></td>
                        <td><div contenteditable="true" class="editable">• Instagram Ad<br>• Website Landing Page</div></td>
                        <td><div contenteditable="true" class="editable">• Unclear value proposition<br>• Too many options</div></td>
                        <td><div contenteditable="true" class="editable">• Clearer messaging<br>• Social proof integration</div></td>
                    </tr>
                    <tr>
                        <td class="stage-cell">Consideration</td>
                        <td><div contenteditable="true" class="editable">Compares features and reads reviews</div></td>
                        <td><div contenteditable="true" class="editable">"How does this compare to alternatives?"</div></td>
                        <td><span class="emotion-score emotion-positive">😊 Interested</span></td>
                        <td><div contenteditable="true" class="editable">• Product Pages<br>• Review Sites<br>• Comparison Tools</div></td>
                        <td><div contenteditable="true" class="editable">• Difficult to compare<br>• Information overload</div></td>
                        <td><div contenteditable="true" class="editable">• Comparison calculator<br>• Curated reviews</div></td>
                    </tr>
                    <tr>
                        <td class="stage-cell">Decision</td>
                        <td><div contenteditable="true" class="editable">Adds to cart and completes purchase</div></td>
                        <td><div contenteditable="true" class="editable">"Hope I'm making the right choice"</div></td>
                        <td><span class="emotion-score emotion-positive">🎉 Excited</span></td>
                        <td><div contenteditable="true" class="editable">• Shopping Cart<br>• Checkout Process<br>• Payment Gateway</div></td>
                        <td><div contenteditable="true" class="editable">• Unexpected shipping costs<br>• Long checkout process</div></td>
                        <td><div contenteditable="true" class="editable">• Transparent pricing<br>• One-click checkout</div></td>
                    </tr>
                    <tr>
                        <td class="stage-cell">Delivery</td>
                        <td><div contenteditable="true" class="editable">Receives product and unboxes</div></td>
                        <td><div contenteditable="true" class="editable">"Finally! Let's see if it lives up to expectations"</div></td>
                        <td><span class="emotion-score emotion-positive">📦 Anticipation</span></td>
                        <td><div contenteditable="true" class="editable">• Shipping Email<br>• Package<br>• Unboxing Experience</div></td>
                        <td><div contenteditable="true" class="editable">• Delayed delivery<br>• Poor packaging</div></td>
                        <td><div contenteditable="true" class="editable">• Premium unboxing<br>• Real-time tracking</div></td>
                    </tr>
                    <tr>
                        <td class="stage-cell">Support</td>
                        <td><div contenteditable="true" class="editable">Contacts customer service for help</div></td>
                        <td><div contenteditable="true" class="editable">"I need help setting this up"</div></td>
                        <td><span class="emotion-score emotion-neutral">🤔 Confused</span></td>
                        <td><div contenteditable="true" class="editable">• Help Center<br>• Chat Support<br>• Email Support</div></td>
                        <td><div contenteditable="true" class="editable">• Long wait times<br>• Repetitive questions</div></td>
                        <td><div contenteditable="true" class="editable">• Self-service options<br>• Video tutorials</div></td>
                    </tr>
                    <tr>
                        <td class="stage-cell">Loyalty</td>
                        <td><div contenteditable="true" class="editable">Becomes repeat customer and advocate</div></td>
                        <td><div contenteditable="true" class="editable">"I love this! I should tell my friends"</div></td>
                        <td><span class="emotion-score emotion-positive">❤️ Delighted</span></td>
                        <td><div contenteditable="true" class="editable">• Email Newsletter<br>• Loyalty Program<br>• Social Media</div></td>
                        <td><div contenteditable="true" class="editable">• Lack of engagement<br>• No exclusive benefits</div></td>
                        <td><div contenteditable="true" class="editable">• VIP experiences<br>• Referral rewards</div></td>
                    </tr>
                </tbody>
            </table>
            
            <button class="add-stage-btn" onclick="addStage()">+ Add New Stage</button>
        </div>

        <div class="insights-section">
            <h2>🧠 Journey Insights & Recommendations</h2>
            
            <div class="insights-grid">
                <div class="insight-card">
                    <h3>
                        <span class="icon">⚠️</span>
                        Critical Pain Points
                    </h3>
                    <div class="pain-point">
                        <strong>Checkout Friction:</strong> 40% cart abandonment due to unexpected costs
                    </div>
                    <div class="pain-point">
                        <strong>Support Delays:</strong> Average 2-hour response time causing frustration
                    </div>
                </div>
                
                <div class="insight-card">
                    <h3>
                        <span class="icon">💡</span>
                        Quick Wins
                    </h3>
                    <div class="opportunity">
                        <strong>Transparent Pricing:</strong> Display all costs upfront to reduce surprises
                    </div>
                    <div class="opportunity">
                        <strong>Live Chat:</strong> Implement instant support for immediate help
                    </div>
                </div>
                
                <div class="insight-card">
                    <h3>
                        <span class="icon">📈</span>
                        Long-term Opportunities
                    </h3>
                    <div class="opportunity">
                        <strong>Personalization:</strong> Use journey data to create personalized experiences
                    </div>
                    <div class="opportunity">
                        <strong>Predictive Support:</strong> Anticipate customer needs before they ask
                    </div>
                </div>
                
                <div class="insight-card">
                    <h3>
                        <span class="icon">🎯</span>
                        Success Metrics
                    </h3>
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        <li>Cart Abandonment Rate < 25%</li>
                        <li>Support Response Time < 30 minutes</li>
                        <li>Customer Satisfaction Score > 4.5/5</li>
                        <li>Net Promoter Score > 50</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <script>
        function updateJourneyInfo() {
            const persona = document.getElementById('persona').value;
            const scenario = document.getElementById('scenario').value;
            const journeyType = document.getElementById('journey-type').value;
            
            // Update header with new info
            const subtitle = document.querySelector('.subtitle');
            subtitle.textContent = \`\${persona} - \${scenario} (\${journeyType} journey)\`;
            
            // Store info for export
            window.journeyInfo = { persona, scenario, journeyType };
        }

        function addStage() {
            const tbody = document.getElementById('journeyBody');
            const newRow = tbody.insertRow();
            
            newRow.innerHTML = \`
                <td class="stage-cell">New Stage</td>
                <td><div contenteditable="true" class="editable">Describe the actions taken</div></td>
                <td><div contenteditable="true" class="editable">Customer thoughts and mindset</div></td>
                <td><span class="emotion-score emotion-neutral">😐 Neutral</span></td>
                <td><div contenteditable="true" class="editable">List touchpoints here</div></td>
                <td><div contenteditable="true" class="editable">Identify pain points</div></td>
                <td><div contenteditable="true" class="editable">List improvement opportunities</div></td>
            \`;
        }

        function downloadHTML() {
            const htmlContent = document.documentElement.outerHTML;
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'journey-map-template.html';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        function exportData() {
            const table = document.getElementById('journeyTable');
            const data = [];
            
            // Get header row
            const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent);
            data.push(headers);
            
            // Get data rows
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const rowData = [];
                const cells = row.querySelectorAll('td');
                cells.forEach(cell => {
                    const editableDiv = cell.querySelector('.editable');
                    if (editableDiv) {
                        rowData.push(editableDiv.textContent);
                    } else {
                        rowData.push(cell.textContent);
                    }
                });
                data.push(rowData);
            });
            
            // Convert to CSV
            const csv = data.map(row => 
                row.map(cell => \`"\${cell.replace(/"/g, '""')}"\`).join(',')
            ).join('\\n');
            
            // Download CSV
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'journey-map-data.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // Initialize journey info on load
        window.addEventListener('load', function() {
            updateJourneyInfo();
        });

        // Add footer with Radiant Agility Technology branding
        document.addEventListener('DOMContentLoaded', function() {
            const footer = document.createElement('div');
            footer.innerHTML = \`
                <div style="background: #f8f9fa; padding: 30px; text-align: center; border-top: 3px solid var(--primary); margin-top: 40px;">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 15px;">
                        <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #4c63d2 0%, #3B1F56 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 14px;">RA</div>
                        <span style="font-weight: 600; color: #1f2937; font-size: 1.1em;">Radiant Agility Technology</span>
                    </div>
                    <p style="color: #6b7280; margin-bottom: 10px;">Your Partner in Agile Excellence</p>
                    <p style="color: #9ca3af; font-size: 0.9em;">© 2025 Radiant Agility Technology. Licensed for team use.</p>
                    <p style="color: #9ca3af; font-size: 0.9em; margin-top: 5px;">Need help with journey mapping? Contact us at <a href="mailto:hello@radiantagility.tech" style="color: var(--primary);">hello@radiantagility.tech</a></p>
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
        link.download = 'RadiantAgility_Journey_Mapping_Tool.html';
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
        description: "Please enter your email to download the toolkit.",
        variant: "destructive",
      });
      return;
    }
    
    downloadMutation.mutate({ 
      email: email.trim(), 
      leadMagnet: 'Journey Mapping Interactive Tool' 
    });
  };

  const features = [
    {
      icon: Map,
      title: "Interactive Journey Builder",
      description: "Drag-and-drop interface to create comprehensive customer journey maps"
    },
    {
      icon: Users,
      title: "Multi-Persona Support",
      description: "Design journeys for different customer types and use cases"
    },
    {
      icon: Target,
      title: "Pain Point Analysis",
      description: "Identify friction points and optimization opportunities"
    }
  ];

  const benefits = [
    "Visualize complete customer experience end-to-end",
    "Identify critical moments that matter most",
    "Align teams around customer-centric thinking",
    "Export data for presentations and analysis",
    "Customize for any industry or business model",
    "Professional templates ready for immediate use"
  ];

  const toolkitCrossPromo = [
    {
      title: "Emotion + Friction Analyzer",
      description: "AI-powered prompts to decode emotions and eliminate friction",
      href: "/emotion-analyzer"
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
      <div className="bg-[#3B1F56] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4c63d2] to-[#3B1F56] opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Agile Alphabet Series: J — Journey Mapping
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Journey Mapping Interactive Tool
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Visualize and optimize customer experiences with our comprehensive interactive journey mapping template
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#3B1F56] hover:bg-purple-50 font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="h-5 w-5 mr-2" />
                Get Free Interactive Tool
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#3B1F56] font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Get Started
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
              Everything You Need for Journey Mapping
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade interactive template with built-in analytics and export capabilities
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
                Why Journey Mapping Matters
              </h2>
              <p className="text-xl text-gray-600">
                Transform customer insights into actionable improvements
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
              Download Your Free Journey Mapping Tool
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get instant access to our interactive HTML template with sample data and customization options
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
                    <Layers className="h-5 w-5 mr-2 animate-spin" />
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5 mr-2" />
                    Download Interactive Tool
                  </>
                )}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                No spam, ever. Unsubscribe anytime. Free toolkit includes interactive HTML template.
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
              More Agile Alphabet Series Toolkits
            </h2>
            <p className="text-xl text-gray-600">
              Complete your agile transformation toolkit collection
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