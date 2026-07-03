import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiInfo,
  FiSearch,
  FiFileText,
  FiImage,
  FiGrid,
  FiSettings,
  FiPlus,
  FiTrash,
  FiUploadCloud,
  FiCheck,
  FiX,
  FiBold,
  FiItalic,
  FiUnderline,
  FiList,
  FiCalendar,
  FiHelpCircle
} from "react-icons/fi";

export default function CreateService() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  // --- Form State ---
  const [basicInfo, setBasicInfo] = useState({
    title: "",
    slug: "",
    category: "Development",
    shortDesc: ""
  });

  const [seoInfo, setSeoInfo] = useState({
    metaTitle: "",
    metaDesc: "",
    tags: ["SaaS", "Agency", "Digicore"]
  });
  const [tagInput, setTagInput] = useState("");

  const [content, setContent] = useState("<p>Enter your rich service details here...</p>");
  const [editorStyle, setEditorStyle] = useState({ bold: false, italic: false, underline: false });

  const [images, setImages] = useState({
    featured: null, // { name: '', size: '', url: '' }
    gallery: [] // array of { name: '', size: '', url: '' }
  });

  const [settings, setSettings] = useState({
    status: "published", // published, draft, archived
    isFeatured: true,
    allowReviews: false,
    visibility: "public", // public, private
    publishDate: new Date().toISOString().split("T")[0]
  });

  const [benefits, setBenefits] = useState([
    { id: 1, title: "High Performance", desc: "Optimized for lightning fast speed." },
    { id: 2, title: "Modern Design", desc: "Crafted with the latest web standards." }
  ]);

  // --- UI feedback states ---
  const [notification, setNotification] = useState(null);
  const [isDragOverFeatured, setIsDragOverFeatured] = useState(false);
  const [isDragOverGallery, setIsDragOverGallery] = useState(false);

  // --- Handlers ---
  const showToast = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleSlugAutoFill = (e) => {
    const val = e.target.value;
    setBasicInfo(prev => ({
      ...prev,
      title: val,
      slug: val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
    }));
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const tag = tagInput.trim();
      if (tag && !seoInfo.tags.includes(tag)) {
        setSeoInfo(prev => ({ ...prev, tags: [...prev.tags, tag] }));
        setTagInput("");
      }
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setSeoInfo(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tagToRemove) }));
  };

  // Dynamic fields
  const handleAddBenefit = () => {
    const newId = benefits.length > 0 ? Math.max(...benefits.map(b => b.id)) + 1 : 1;
    setBenefits([...benefits, { id: newId, title: "", desc: "" }]);
  };

  const handleRemoveBenefit = (id) => {
    setBenefits(benefits.filter(b => b.id !== id));
  };

  const handleBenefitChange = (id, field, value) => {
    setBenefits(benefits.map(b => b.id === id ? { ...b, [field]: value } : b));
  };

  // Mock upload logic
  const processFile = (file, isGallery = false) => {
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = {
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
        url: reader.result
      };
      if (isGallery) {
        setImages(prev => ({ ...prev, gallery: [...prev.gallery, fileData] }));
        showToast("Image added to gallery");
      } else {
        setImages(prev => ({ ...prev, featured: fileData }));
        showToast("Featured image uploaded");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileDrop = (e, isGallery = false) => {
    e.preventDefault();
    if (isGallery) setIsDragOverGallery(false);
    else setIsDragOverFeatured(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0], isGallery);
    }
  };

  // Save actions
  const handleSave = (statusOverride) => {
    // Basic Validation
    if (!basicInfo.title.trim()) {
      showToast("Service title is required!", "error");
      return;
    }
    const finalStatus = statusOverride || settings.status;
    showToast(`Service "${basicInfo.title}" successfully saved as [${finalStatus.toUpperCase()}]!`);
    console.log("Saving payload:", { basicInfo, seoInfo, content, images, settings, benefits, status: finalStatus });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-28 text-slate-800 animate-[fadeIn_0.4s_ease-out]">
      {/* Toast Notification */}
      {notification && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border transition-all duration-300 transform translate-y-0 scale-100 ${
          notification.type === "error" 
            ? "bg-red-50 border-red-200 text-red-700" 
            : "bg-emerald-50 border-emerald-200 text-emerald-700"
        }`}>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${notification.type === "error" ? "bg-red-100" : "bg-emerald-100"}`}>
            {notification.type === "error" ? <FiX size={14} /> : <FiCheck size={14} />}
          </div>
          <span className="text-sm font-medium">{notification.message}</span>
        </div>
      )}

      {/* Outer Layout wrapper */}
      <div className="max-w-[1400px] mx-auto px-4 py-8 md:px-8 space-y-6">
        
        {/* Breadcrumbs & Title */}
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <span className="hover:text-slate-600 cursor-pointer" onClick={() => navigate("/admin")}>Dashboard</span>
              <span>/</span>
              <span className="hover:text-slate-600 cursor-pointer" onClick={() => navigate("/admin")}>Services</span>
              <span>/</span>
              <span className="text-blue-600">Create Service</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mt-1 tracking-tight">Create Service</h1>
          </div>

          <button 
            onClick={() => navigate("/admin")}
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all duration-200 shadow-sm"
          >
            <FiArrowLeft size={16} />
            Back to Dashboard
          </button>
        </div>

        {/* Primary 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Form Fields Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Basic Info Section */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FiInfo size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Basic Information</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Primary information visible on the main page</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Service Name</label>
                  <input
                    type="text"
                    required
                    value={basicInfo.title}
                    onChange={handleSlugAutoFill}
                    placeholder="e.g. Enterprise SEO Optimization"
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-slate-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Slug URL</label>
                    <input
                      type="text"
                      value={basicInfo.slug}
                      onChange={(e) => setBasicInfo(prev => ({ ...prev, slug: e.target.value }))}
                      placeholder="e.g. enterprise-seo-optimization"
                      className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-slate-400 font-mono text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Service Category</label>
                    <div className="relative">
                      <select
                        value={basicInfo.category}
                        onChange={(e) => setBasicInfo(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 appearance-none bg-white text-slate-700"
                      >
                        <option value="SEO">SEO Marketing</option>
                        <option value="SMO">Social Media Management</option>
                        <option value="Development">Web Development</option>
                        <option value="Advertising">Paid Advertising</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Short Description</label>
                  <textarea
                    rows={4}
                    value={basicInfo.shortDesc}
                    onChange={(e) => setBasicInfo(prev => ({ ...prev, shortDesc: e.target.value }))}
                    placeholder="Write a brief, compelling summary describing the service..."
                    className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-slate-400 resize-y min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* 2. SEO Information Section */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FiSearch size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">SEO Information</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Optimize how this service appears on search engine result pages</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Meta Title</label>
                  <input
                    type="text"
                    value={seoInfo.metaTitle}
                    onChange={(e) => setSeoInfo(prev => ({ ...prev, metaTitle: e.target.value }))}
                    placeholder="Focus keyword matching meta title (suggested under 60 characters)"
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Meta Description</label>
                  <textarea
                    rows={3}
                    value={seoInfo.metaDesc}
                    onChange={(e) => setSeoInfo(prev => ({ ...prev, metaDesc: e.target.value }))}
                    placeholder="Enter meta description for search snippets (suggested under 160 characters)..."
                    className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-slate-400 resize-y"
                  />
                </div>

                {/* Tags input */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">SEO Keywords / Tags</label>
                  <div className="w-full min-h-12 p-2 rounded-xl border border-slate-200 bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all duration-200 flex flex-wrap gap-2 items-center">
                    {seoInfo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 font-semibold text-xs rounded-lg border border-slate-200/50 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-150 cursor-pointer"
                        onClick={() => handleRemoveTag(tag)}
                        title="Click to remove"
                      >
                        {tag}
                        <FiX size={12} />
                      </span>
                    ))}
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                      placeholder="Type keyword and press Enter..."
                      className="border-none focus:ring-0 focus:outline-none text-sm placeholder-slate-400 flex-1 min-w-[150px] py-1 px-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Content Rich Editor Section */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FiFileText size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Service Content</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Write a comprehensive details section with our premium rich editor</p>
                </div>
              </div>

              {/* Rich Text Editor Toolbar */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-1 bg-slate-50 border-b border-slate-200 p-2.5 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setEditorStyle(prev => ({ ...prev, bold: !prev.bold }))}
                    className={`p-2 rounded-lg hover:bg-slate-200 transition-colors duration-150 ${editorStyle.bold ? "bg-slate-200 text-blue-600" : "text-slate-500"}`}
                  >
                    <FiBold size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditorStyle(prev => ({ ...prev, italic: !prev.italic }))}
                    className={`p-2 rounded-lg hover:bg-slate-200 transition-colors duration-150 ${editorStyle.italic ? "bg-slate-200 text-blue-600" : "text-slate-500"}`}
                  >
                    <FiItalic size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditorStyle(prev => ({ ...prev, underline: !prev.underline }))}
                    className={`p-2 rounded-lg hover:bg-slate-200 transition-colors duration-150 ${editorStyle.underline ? "bg-slate-200 text-blue-600" : "text-slate-500"}`}
                  >
                    <FiUnderline size={16} />
                  </button>
                  <div className="h-6 w-px bg-slate-200 mx-1.5" />
                  <button
                    type="button"
                    className="p-2 rounded-lg hover:bg-slate-200 transition-colors duration-150 text-slate-500"
                    onClick={() => setContent(prev => prev + "<li>List item</li>")}
                  >
                    <FiList size={16} />
                  </button>
                  <div className="h-6 w-px bg-slate-200 mx-1.5" />
                  <button
                    type="button"
                    onClick={() => setContent("<h1>Heading 1</h1>" + content)}
                    className="px-2 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded"
                  >
                    H1
                  </button>
                  <button
                    type="button"
                    onClick={() => setContent("<h2>Heading 2</h2>" + content)}
                    className="px-2 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded"
                  >
                    H2
                  </button>
                  <button
                    type="button"
                    onClick={() => setContent("<h3>Heading 3</h3>" + content)}
                    className="px-2 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded"
                  >
                    H3
                  </button>
                </div>
                
                {/* Editable Area */}
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className={`w-full min-h-[250px] p-6 focus:outline-none resize-y text-slate-700 leading-relaxed font-sans border-0 ${
                    editorStyle.bold ? "font-bold" : ""
                  } ${editorStyle.italic ? "italic" : ""} ${
                    editorStyle.underline ? "underline" : ""
                  }`}
                  placeholder="Detailed service narrative structure..."
                />
              </div>
            </div>

            {/* 4. Images Upload Area */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FiImage size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Featured Image</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Primary high-resolution imagery showcasing the service banner</p>
                </div>
              </div>

              {/* Drag/Drop featured area */}
              {!images.featured ? (
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragOverFeatured(true); }}
                  onDragLeave={() => setIsDragOverFeatured(false)}
                  onDrop={(e) => handleFileDrop(e, false)}
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  className={`w-full border-2 border-dashed rounded-2xl p-8 text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                    isDragOverFeatured 
                      ? "border-blue-500 bg-blue-50/50" 
                      : "border-slate-200 hover:border-blue-400 hover:bg-slate-50/50"
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] && processFile(e.target.files[0], false)}
                  />
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                    <FiUploadCloud size={24} />
                  </div>
                  <h3 className="font-semibold text-slate-700 text-sm">Drag & drop files or <span className="text-blue-600 underline">browse</span></h3>
                  <p className="text-xs text-slate-400 mt-1">PNG, JPG, JPEG, SVG up to 5MB</p>
                </div>
              ) : (
                /* Uploaded card preview */
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-4 group transition-all duration-200 hover:shadow-sm">
                  <div className="w-20 h-20 bg-white border border-slate-100 rounded-xl overflow-hidden shadow-inner flex items-center justify-center shrink-0">
                    <img src={images.featured.url} alt="Featured preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-700 truncate">{images.featured.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{images.featured.size}</p>
                    
                    {/* Simulated loading bar */}
                    <div className="w-full h-1.5 bg-slate-200 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-full" />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setImages(prev => ({ ...prev, featured: null }))}
                    className="p-2.5 rounded-xl border border-slate-200 text-slate-400 bg-white hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors duration-150"
                  >
                    <FiTrash size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* 5. Gallery Images */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FiGrid size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Project Gallery</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Additional screenshots or process slides displaying success work</p>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {images.gallery.map((img, i) => (
                  <div key={i} className="relative group aspect-video bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <img src={img.url} alt="Gallery item" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setImages(prev => ({ ...prev, gallery: prev.gallery.filter((_, idx) => idx !== i) }))}
                        className="p-2 bg-white/95 rounded-lg text-red-600 hover:bg-white transition-colors duration-150"
                      >
                        <FiTrash size={14} />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Upload Trigger grid box */}
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragOverGallery(true); }}
                  onDragLeave={() => setIsDragOverGallery(false)}
                  onDrop={(e) => handleFileDrop(e, true)}
                  onClick={() => galleryInputRef.current && galleryInputRef.current.click()}
                  className={`aspect-video border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                    isDragOverGallery 
                      ? "border-blue-500 bg-blue-50/50" 
                      : "border-slate-200 hover:border-blue-400 hover:bg-slate-50/50"
                  }`}
                >
                  <input
                    type="file"
                    ref={galleryInputRef}
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                      if (e.target.files) {
                        Array.from(e.target.files).forEach(f => processFile(f, true));
                      }
                    }}
                  />
                  <FiPlus size={20} className="text-slate-400" />
                  <span className="text-xs font-semibold text-slate-500 mt-1">Add Image</span>
                </div>
              </div>
            </div>

            {/* Dynamic Fields Section: Key Benefits */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FiHelpCircle size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Key Benefits</h2>
                    <p className="text-xs text-slate-400 mt-0.5">Highlight major features dynamically in accordion tables</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddBenefit}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200"
                >
                  <FiPlus size={14} />
                  Add Row
                </button>
              </div>

              {/* Dynamic Rows Container */}
              <div className="space-y-4">
                {benefits.map((b, idx) => (
                  <div
                    key={b.id}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex gap-4 items-start animate-[slideUp_0.3s_ease-out] relative"
                  >
                    <span className="text-xs font-bold text-slate-400 mt-3 bg-white w-6 h-6 border border-slate-200 rounded-full flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-1">
                        <input
                          type="text"
                          value={b.title}
                          onChange={(e) => handleBenefitChange(b.id, "title", e.target.value)}
                          placeholder="Feature Title"
                          className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-blue-500 transition-all text-sm font-semibold"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <input
                          type="text"
                          value={b.desc}
                          onChange={(e) => handleBenefitChange(b.id, "desc", e.target.value)}
                          placeholder="Short description of this item's value statement..."
                          className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-blue-500 transition-all text-sm"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveBenefit(b.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150 mt-1 shrink-0"
                    >
                      <FiTrash size={15} />
                    </button>
                  </div>
                ))}

                {benefits.length === 0 && (
                  <div className="text-center py-6 text-sm text-slate-400">
                    No features configured. Click "Add Row" to build value propositions.
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right settings column */}
          <div className="space-y-8">
            
            {/* 6. Settings Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FiSettings size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Settings</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Control visibility and active settings</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Radio status options */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Publish Status</label>
                  <div className="space-y-2">
                    {[
                      { key: "published", label: "Published (Visible)" },
                      { key: "draft", label: "Draft (Internal Only)" },
                      { key: "archived", label: "Archived" }
                    ].map((opt) => (
                      <label key={opt.key} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="pub_status"
                          value={opt.key}
                          checked={settings.status === opt.key}
                          onChange={() => setSettings(prev => ({ ...prev, status: opt.key }))}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                          settings.status === opt.key 
                            ? "border-blue-600 bg-blue-600 text-white" 
                            : "border-slate-200 bg-white group-hover:border-slate-400"
                        }`}>
                          {settings.status === opt.key && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Date Picker */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Publish Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={settings.publishDate}
                      onChange={(e) => setSettings(prev => ({ ...prev, publishDate: e.target.value }))}
                      className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-sm text-slate-700"
                    />
                    <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  </div>
                </div>

                <div className="h-px bg-slate-100 my-4" />

                {/* Toggles */}
                <div className="space-y-4">
                  {/* Toggle 1: Featured */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-sm font-semibold text-slate-700">Featured Service</span>
                      <span className="text-xs text-slate-400">Display prominently on the homepage header</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSettings(prev => ({ ...prev, isFeatured: !prev.isFeatured }))}
                      className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
                        settings.isFeatured ? "bg-blue-600" : "bg-slate-200"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 ${
                        settings.isFeatured ? "translate-x-5" : "translate-x-0"
                      }`} />
                    </button>
                  </div>

                  {/* Toggle 2: Allow Reviews */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-sm font-semibold text-slate-700">Customer Feedback</span>
                      <span className="text-xs text-slate-400">Permit user comments & stars rating</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSettings(prev => ({ ...prev, allowReviews: !prev.allowReviews }))}
                      className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
                        settings.allowReviews ? "bg-blue-600" : "bg-slate-200"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 ${
                        settings.allowReviews ? "translate-x-5" : "translate-x-0"
                      }`} />
                    </button>
                  </div>
                </div>

                <div className="h-px bg-slate-100 my-4" />

                {/* Checkbox item */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={settings.visibility === "private"}
                    onChange={(e) => setSettings(prev => ({ ...prev, visibility: e.target.checked ? "private" : "public" }))}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all mt-0.5 ${
                    settings.visibility === "private" 
                      ? "border-blue-600 bg-blue-600 text-white" 
                      : "border-slate-200 bg-white group-hover:border-slate-400"
                  }`}>
                    {settings.visibility === "private" && <FiCheck size={12} />}
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">Mark as Private page</span>
                    <span className="text-xs text-slate-400">Only authorized logins can explore details link URL</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-t border-slate-200/80 px-4 py-4 md:px-8 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] transition-all">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-xs text-slate-400 font-semibold hidden md:block">
            {basicInfo.title ? `Editing: ${basicInfo.title}` : "Creating new service payload"}
          </p>

          <div className="flex w-full sm:w-auto items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-semibold text-red-600 bg-white border border-red-200 hover:bg-red-50 hover:border-red-300 rounded-xl transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleSave("draft")}
              className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-all duration-200"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={() => handleSave()}
              className="flex-1 sm:flex-none px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200/50 rounded-xl transition-all duration-200"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
