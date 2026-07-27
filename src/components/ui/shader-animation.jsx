import React from 'react';

export const ShaderAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(230, 31, 0, 0.3) 0%, transparent 70%)',
          animationDelay: '0s'
        }}
      />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-15 animate-float-medium"
        style={{
          background: 'radial-gradient(circle, rgba(10, 1, 0, 0.2) 0%, transparent 70%)',
          animationDelay: '2s'
        }}
      />
      <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full blur-[110px] opacity-10 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(230, 31, 0, 0.25) 0%, transparent 70%)',
          animationDelay: '4s'
        }}
      />
      
      {/* Subtle moving lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e61f00] to-transparent animate-slide-right" 
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0a0100] to-transparent animate-slide-left" 
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e61f00] to-transparent animate-slide-right" 
          style={{ animationDelay: '3s' }}
        />
      </div>
    </div>
  );
};

