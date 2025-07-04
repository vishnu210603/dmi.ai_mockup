
import React, { useState } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  Palette,
  Type,
  Minus,
  Plus,
  Undo,
  Redo,
  Download,
  Share
} from 'lucide-react';

interface EditorToolbarProps {
  selectedElement: any;
  setSelectedElement: (element: any) => void;
}

const EditorToolbar = ({ selectedElement, setSelectedElement }: EditorToolbarProps) => {
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [textColor, setTextColor] = useState('#000000');

  const fonts = ['Arial', 'Helvetica', 'Georgia', 'Times New Roman', 'Roboto', 'Inter'];
  
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-4">
      {/* File Actions */}
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
          <Undo size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
          <Redo size={18} />
        </button>
      </div>

      <div className="w-px h-6 bg-gray-300" />

      {/* Font Controls */}
      <div className="flex items-center gap-2">
        <select 
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
          className="px-3 py-1 border border-gray-200 rounded text-sm"
        >
          {fonts.map(font => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>

        <div className="flex items-center border border-gray-200 rounded">
          <button 
            onClick={() => setFontSize(Math.max(8, fontSize - 2))}
            className="p-1 hover:bg-gray-100"
          >
            <Minus size={14} />
          </button>
          <span className="px-2 py-1 text-sm min-w-[40px] text-center">{fontSize}px</span>
          <button 
            onClick={() => setFontSize(Math.min(72, fontSize + 2))}
            className="p-1 hover:bg-gray-100"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      <div className="w-px h-6 bg-gray-300" />

      {/* Text Formatting */}
      <div className="flex items-center gap-1">
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
          <Bold size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
          <Italic size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
          <Underline size={18} />
        </button>
      </div>

      <div className="w-px h-6 bg-gray-300" />

      {/* Text Alignment */}
      <div className="flex items-center gap-1">
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
          <AlignLeft size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
          <AlignCenter size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
          <AlignRight size={18} />
        </button>
      </div>

      <div className="w-px h-6 bg-gray-300" />

      {/* Color Picker */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Type size={18} className="text-gray-600" />
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-8 h-8 border border-gray-200 rounded cursor-pointer"
          />
        </div>
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
          <Palette size={18} />
        </button>
      </div>

      {/* Right Side Actions */}
      <div className="ml-auto flex items-center gap-2">
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium flex items-center gap-2">
          <Share size={16} />
          Share
        </button>
        <button className="px-4 py-2 bg-[#8A3FFC] hover:bg-[#7A2FEC] text-white rounded text-sm font-medium flex items-center gap-2">
          <Download size={16} />
          Download
        </button>
      </div>
    </div>
  );
};

export default EditorToolbar;
