
import React, { useState } from 'react';
import { 
  Type, 
  Image, 
  Shapes, 
  Palette, 
  Layout, 
  Upload,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Grid3X3,
  PenTool,
  X
} from 'lucide-react';

interface EditorSidebarProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
  showTemplates: boolean;
  setShowTemplates: (show: boolean) => void;
}

const EditorSidebar = ({ activeTool, setActiveTool, showTemplates, setShowTemplates }: EditorSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tools = [
    { id: 'text', name: 'Text', icon: Type },
    { id: 'images', name: 'Images', icon: Image },
    { id: 'shapes', name: 'Shapes', icon: Shapes },
    { id: 'graphics', name: 'Graphics', icon: Sparkles },
    { id: 'templates', name: 'Templates', icon: Layout, action: () => setShowTemplates(true) },
    { id: 'uploads', name: 'Uploads', icon: Upload },
    { id: 'draw', name: 'Draw', icon: PenTool },
    { id: 'grid', name: 'Grid', icon: Grid3X3 },
  ];

  const templates = [
    { name: 'Presentations', color: 'from-blue-500 to-purple-600' },
    { name: 'Social Posts', color: 'from-pink-500 to-rose-600' },
    { name: 'Posters', color: 'from-green-500 to-teal-600' },
    { name: 'Videos', color: 'from-indigo-500 to-blue-600' },
    { name: 'Brochures', color: 'from-purple-500 to-pink-600' },
    { name: 'Newsletters', color: 'from-cyan-500 to-blue-600' }
  ];

  const textOptions = [
    'Add a heading',
    'Add a subheading', 
    'Add body text',
    'Add a text box'
  ];

  const shapeOptions = [
    'Rectangle',
    'Circle', 
    'Triangle',
    'Line',
    'Arrow'
  ];

  const handleToolClick = (tool: any) => {
    if (tool.action) {
      tool.action();
    } else {
      setActiveTool(tool.id);
    }
  };

  return (
    <>
      <div className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-80'
      } flex relative z-10`}>
        {/* Main Tools */}
        <div className="w-16 bg-gray-100 border-r border-gray-200 py-4">
          <div className="space-y-2">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => handleToolClick(tool)}
                  className={`w-12 h-12 mx-2 rounded-lg flex items-center justify-center transition-colors ${
                    activeTool === tool.id 
                      ? 'bg-[#8A3FFC] text-white' 
                      : 'hover:bg-gray-200 text-gray-600'
                  }`}
                  title={tool.name}
                >
                  <Icon size={20} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Tool Details Panel */}
        <div className={`flex-1 transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-0 opacity-0' : 'w-64 opacity-100'
        } overflow-hidden`}>
          <div className="p-4 h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800 capitalize">{activeTool}</h3>
              <button
                onClick={() => setIsCollapsed(true)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
            </div>

            {activeTool === 'text' && (
              <div className="space-y-3">
                {textOptions.map((option, index) => (
                  <div
                    key={index}
                    className="p-3 border border-gray-200 rounded-lg hover:border-[#8A3FFC] cursor-pointer transition-colors"
                  >
                    <div className="text-sm font-medium">{option}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTool === 'shapes' && (
              <div className="grid grid-cols-2 gap-3">
                {shapeOptions.map((shape, index) => (
                  <div
                    key={index}
                    className="aspect-square border border-gray-200 rounded-lg hover:border-[#8A3FFC] cursor-pointer transition-colors flex items-center justify-center"
                  >
                    <div className="text-xs font-medium">{shape}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTool === 'images' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {[1,2,3,4,5,6].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                      style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=200&h=200&fit=crop)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTool === 'graphics' && (
              <div className="space-y-4">
                <div className="text-sm text-gray-600">AI-Generated Graphics</div>
                <div className="grid grid-cols-2 gap-2">
                  {[1,2,3,4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gradient-to-br from-[#8A3FFC] to-[#4F82FF] rounded-lg cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Collapse/Expand Button */}
        {isCollapsed && (
          <button
            onClick={() => setIsCollapsed(false)}
            className="absolute top-4 -right-3 bg-white border border-gray-200 rounded-full p-1 shadow-sm hover:shadow-md transition-all duration-300 z-20"
          >
            <ChevronRight size={16} />
          </button>
        )}
      </div>

      {/* Templates Modal Overlay */}
      {showTemplates && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Choose a Template</h2>
              <button
                onClick={() => setShowTemplates(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template, index) => (
                <div
                  key={index}
                  className="cursor-pointer group"
                  onClick={() => {
                    setShowTemplates(false);
                    setActiveTool('text');
                  }}
                >
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`absolute inset-0 bg-gradient-to-br ${template.color}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-white text-xl font-bold">{template.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditorSidebar;
