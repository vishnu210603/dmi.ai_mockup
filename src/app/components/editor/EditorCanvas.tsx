
import React, { useState } from 'react';
import { Grid3X3 } from 'lucide-react';

interface EditorCanvasProps {
  activeTool: string;
  selectedElement: any;
  setSelectedElement: (element: any) => void;
}

const EditorCanvas = ({ activeTool, selectedElement, setSelectedElement }: EditorCanvasProps) => {
  const [showGrid, setShowGrid] = useState(false);
  const [elements, setElements] = useState<any[]>([]);

  const handleCanvasClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (activeTool === 'text') {
      const newElement = {
        id: Date.now(),
        type: 'text',
        content: 'Click to edit text',
        x: x - 50,
        y: y - 10,
        width: 100,
        height: 20,
        fontSize: 16,
        color: '#000000'
      };
      setElements([...elements, newElement]);
    }
  };

  return (
    <div className="flex-1 bg-gray-100 relative overflow-hidden">
      {/* Canvas Controls */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          onClick={() => setShowGrid(!showGrid)}
          className={`p-2 rounded shadow-sm transition-colors ${
            showGrid ? 'bg-[#8A3FFC] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
          title="Toggle Grid"
        >
          <Grid3X3 size={16} />
        </button>
      </div>

      {/* Canvas Area */}
      <div className="flex items-center justify-center h-full p-8">
        <div 
          className="relative bg-white shadow-lg"
          style={{ 
            width: '800px', 
            height: '600px',
            backgroundImage: showGrid ? 
              'linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)' : 
              'none',
            backgroundSize: showGrid ? '20px 20px' : 'auto'
          }}
          onClick={handleCanvasClick}
        >
          {/* Canvas Content */}
          {elements.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-2">Start Creating</h3>
                <p className="text-sm">Click on tools from the sidebar to add elements to your design</p>
              </div>
            </div>
          )}

          {/* Render Elements */}
          {elements.map((element) => (
            <div
              key={element.id}
              className="absolute cursor-pointer border-2 border-transparent hover:border-[#8A3FFC] transition-colors"
              style={{
                left: element.x,
                top: element.y,
                width: element.width,
                height: element.height
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedElement(element);
              }}
            >
              {element.type === 'text' && (
                <div
                  contentEditable
                  suppressContentEditableWarning
                  style={{
                    fontSize: element.fontSize,
                    color: element.color,
                    outline: 'none'
                  }}
                  onBlur={(e) => {
                    const updatedElements = elements.map(el =>
                      el.id === element.id 
                        ? { ...el, content: e.target.textContent }
                        : el
                    );
                    setElements(updatedElements);
                  }}
                >
                  {element.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white rounded-lg shadow-sm px-3 py-2">
        <button className="text-sm text-gray-600 hover:text-gray-800">25%</button>
        <button className="text-sm text-gray-600 hover:text-gray-800">50%</button>
        <button className="text-sm font-medium text-gray-800">100%</button>
        <button className="text-sm text-gray-600 hover:text-gray-800">150%</button>
        <button className="text-sm text-gray-600 hover:text-gray-800">200%</button>
      </div>
    </div>
  );
};

export default EditorCanvas;
