"use client";

import React, { useState } from "react";
import { Search, ArrowRight, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const Templates = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarCategories = [
    { id: "all", name: "All designs", count: 500000 },
    { id: "business", name: "Business", count: 45000 },
    { id: "marketing", name: "Marketing", count: 38000 },
    { id: "social-media", name: "Social Media", count: 92000 },
    { id: "presentations", name: "Presentations", count: 25000 },
    { id: "documents", name: "Documents", count: 18000 },
    { id: "education", name: "Education", count: 15000 },
    { id: "events", name: "Events", count: 12000 },
    { id: "personal", name: "Personal", count: 8000 },
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { id: 'instagram', name: 'Instagram Post', icon: '📱', color: 'from-pink-500 to-rose-500' },
    { id: 'poster', name: 'Poster', icon: '📄', color: 'from-blue-500 to-purple-500' },
    { id: 'presentation', name: 'Presentation', icon: '📊', color: 'from-green-500 to-teal-500' },
    { id: 'doc', name: 'Document', icon: '📝', color: 'from-orange-500 to-red-500' },
    { id: 'whiteboard', name: 'Whiteboard', icon: '⚪', color: 'from-cyan-500 to-blue-500' },
    { id: 'social', name: 'Social Media', icon: '💬', color: 'from-indigo-500 to-purple-500' },
    { id: 'video', name: 'Video', icon: '🎬', color: 'from-purple-500 to-pink-500' },
    { id: 'website', name: 'Website', icon: '🌐', color: 'from-teal-500 to-green-500' }
  ];

  const templates = [
    {
      name: "Presentations",
      category: "presentations",
      color: "from-blue-500 to-purple-600",
      description: "Professional slide decks and pitch presentations",
      image: "photo-1560472354-b33ff0c44a43",
    },
    {
      name: "Whiteboards",
      category: "education",
      color: "from-green-500 to-teal-600",
      description: "Collaborative brainstorming and planning boards",
      image: "photo-1552664730-d307ca884978",
    },
    {
      name: "Posters",
      category: "events",
      color: "from-pink-500 to-rose-600",
      description: "Eye-catching promotional and event posters",
      image: "photo-1561070791-2526d30994b5",
    },
    {
      name: "Social Posts",
      category: "social-media",
      color: "from-orange-500 to-red-600",
      description: "Engaging content for all social platforms",
      image: "photo-1611162617474-5b21e879e113",
    },
    {
      name: "Videos",
      category: "marketing",
      color: "from-indigo-500 to-blue-600",
      description: "Dynamic video content and animations",
      image: "photo-1574717024653-61fd2cf4d44d",
    },
    {
      name: "Brochures",
      category: "business",
      color: "from-purple-500 to-pink-600",
      description: "Professional marketing materials and catalogs",
      image: "photo-1586953208448-b95a79798f07",
    },
  ];

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      selectedCategory === "all" || template.category === selectedCategory;
    const matchesSearch = template.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTemplateClick = (template: any) => {
    router.push("/editor", { state: { selectedTemplate: template } });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navbar />

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-16 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
          sidebarOpen ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-900">Categories</h3>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X size={16} />
            </button>
          </div>
          <div className="space-y-2">
            {sidebarCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? "bg-[#8A3FFC] text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm">{category.name}</span>
                  <span className="text-xs opacity-70">
                    {category.count.toLocaleString()}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-gray-200 rounded-lg"
              >
                <Menu size={20} />
              </button>
            )}
            <div className="text-center flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent mb-4">
                What will you design today?
              </h1>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative mt-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search millions of templates"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#8A3FFC] text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8A3FFC]">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col items-center group ${
                  selectedCategory === category.id ? 'scale-110' : 'hover:scale-105'
                } transition-transform`}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl mb-2 shadow-lg ${
                  selectedCategory === category.id ? 'ring-4 ring-[#8A3FFC]/30' : ''
                }`}>
                  {category.icon}
                </div>
                <span className={`text-sm font-medium ${
                  selectedCategory === category.id ? 'text-[#8A3FFC]' : 'text-gray-600'
                }`}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>


          {/* Templates Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
  {filteredTemplates.map((template, index) => (
    <div
      key={index}
      className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300"
      onClick={() => handleTemplateClick(template)}
    >
      {/* Background gradient and image with vignette */}
      <div className={`absolute inset-0 bg-gradient-to-br ${template.color}`}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url(https://images.unsplash.com/${template.image}?w=400&h=600&fit=crop)`,
          }}
        />
        {/* Default vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      </div>

      {/* Template Title */}
      <div className="relative w-[16rem] h-[30rem] flex justify-center mt-5">
        <h3 className="text-2xl font-bold text-white">
          {template.name}
        </h3>
      </div>

      {/* Overlay on hover with description and CTA */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 text-white w-full">
          <p className="text-sm mb-3">{template.description}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleTemplateClick(template);
            }}
            className="w-full bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
          >
            Use Template <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">What's new</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Create a custom tribute for Doctors\' Day', color: 'from-blue-500 to-cyan-500', image: 'photo-1559757148-5c350d0d3c56' },
                { title: 'Get creative for back to school', color: 'from-green-500 to-teal-500', image: 'photo-1580582932707-520aed937b7b' },
                { title: 'Design joy this Krishna Janmashtami', color: 'from-purple-500 to-pink-500', image: 'photo-1578662996442-48f60103fc96' },
                { title: 'Create with gratitude this Guru Purnima', color: 'from-yellow-500 to-orange-500', image: 'photo-1507003211169-0a1dd7228f2d' }
              ].map((item, index) => (
                <div key={index} className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}>
                    <div 
                      className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
                      style={{
                        backgroundImage: `url(https://images.unsplash.com/${item.image}?w=400&h=300&fit=crop)`
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Templates;
