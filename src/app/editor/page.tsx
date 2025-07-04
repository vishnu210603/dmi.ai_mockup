"use client"
import React, { useState } from 'react';
import EditorSidebar from '../components/editor/EditorSidebar';
import EditorToolbar from '../components/editor/EditorToolbar';
import EditorCanvas from '../components/editor/EditorCanvas';

const Editor = () => {
  const [activeTool, setActiveTool] = useState('text');
  const [selectedElement, setSelectedElement] = useState(null);
  const [showTemplates, setShowTemplates] = useState(false);

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      <EditorSidebar 
        activeTool={activeTool} 
        setActiveTool={setActiveTool}
        showTemplates={showTemplates}
        setShowTemplates={setShowTemplates}
      />
      
      <div className="flex-1 flex flex-col">
        <EditorToolbar 
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
        />
        
        <EditorCanvas 
          activeTool={activeTool}
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
        />
      </div>
    </div>
  );
};

export default Editor;
