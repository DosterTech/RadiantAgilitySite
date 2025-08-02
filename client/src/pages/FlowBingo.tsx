import { useEffect } from 'react';

export default function FlowBingo() {
  useEffect(() => {
    // Redirect to the static HTML version
    window.location.href = '/flow-bingo/';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Flow Bottleneck Bingo...</p>
      </div>
    </div>
  );
}