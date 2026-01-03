import React from 'react';

interface StatusSignalProps {
  available: boolean;
}

const StatusSignal: React.FC<StatusSignalProps> = ({ available }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md">
      <span className="relative flex h-3 w-3">
        {available && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-3 w-3 ${available ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
      </span>
      <span className={`text-sm font-medium ${available ? 'text-emerald-400' : 'text-slate-400'}`}>
        {available ? 'Available for Work' : 'Currently Busy'}
      </span>
    </div>
  );
};

export default StatusSignal;
