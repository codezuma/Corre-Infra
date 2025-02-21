import React from 'react';

const PermissionMarquee = () => {
  const handleDownload = () => {
    window.location.href = '/assets/info.pdf';
  };

  const content = (
    <span 
      onClick={handleDownload}
      className="text-primary cursor-pointer hover:text-gray-50  mt-10 underline transition-colors"
    >
      Approval granted under DDJAY-2016 scheme
    </span>
  );

  return (
    <div className="relative w-full overflow-hidden  bg-secondary text-primary shadow-md p-4 ">
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .marquee-container {
            display: flex;
            width: fit-content;
            animation: scroll 50s linear infinite;
          }
          .marquee-text {
            white-space: nowrap;
            padding-right: 50px;
            font-size: 1.125rem;
          }
        `}
      </style>
      <div className="marquee-container">
        <div className="marquee-text font-semibold">
          {content}
        </div>
        <div className="marquee-text font-semibold">
          {content}
        </div>
        <div className="marquee-text font-semibold">
          {content}
        </div>
        <div className="marquee-text font-semibold">
          {content}
        </div>
        <div className="marquee-text font-semibold">
          {content}
        </div>
        <div className="marquee-text font-semibold">
          {content}
        </div>
        <div className="marquee-text font-semibold">
          {content}
        </div>
        <div className="marquee-text font-semibold">
          {content}
        </div>
        <div className="marquee-text font-semibold">
          {content}
        </div>
        <div className="marquee-text font-semibold">
          {content}
        </div>
        <div className="marquee-text font-semibold">
          {content}
        </div>
        <div className="marquee-text font-semibold">
          {content}
        </div>
      </div>
    </div>
  );
};

export default PermissionMarquee;