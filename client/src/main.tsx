import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Custom CSS for gradient elements
const style = document.createElement('style');
style.textContent = `
  .gradient-text {
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .gradient-bg {
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
  }
  .hero-pattern {
    background-color: #f8fafc;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
