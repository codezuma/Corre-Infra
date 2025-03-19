import React from 'react';

interface PDFInfo {
  pdfPath: string;
}

const newsPDFs: PDFInfo[] = [
  {
    pdfPath: "/assets/news1.pdf",
  },
  {
    pdfPath: "/assets/news2.pdf",
  },
  {
    pdfPath: "/assets/news3.pdf",
  },
  {
    pdfPath: "/assets/info.pdf",
  },
];

const PDFDocumentViewer: React.FC<{ pdfPath: string }> = ({ pdfPath }) => {
  return (
    <div className="border rounded-lg shadow-md bg-white h-full overflow-hidden">
      <object
        data={pdfPath}
        type="application/pdf"
        className="w-full h-full"
      >
        <div className="p-4 text-center">
          <p>
            Unable to display PDF. Please{" "}
            <a 
              href={pdfPath} 
              download 
              className="text-blue-600 hover:underline"
            >
              download
            </a>{" "}
            the PDF to view it.
          </p>
        </div>
      </object>
    </div>
  );
};

const NewsSection: React.FC = () => {
  return (
    <div className="news-section container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center pb-6">Latest News</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsPDFs.map((news, index) => (
          <div key={index} className="h-96">
            <PDFDocumentViewer pdfPath={news.pdfPath} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;