import React, { useState, useRef } from 'react';
import { useSirin } from '../context/SirinContext';
import { PortfolioItem } from '../types';
import {
  PRESET_STUDIO_GALLERY,
  processGalleryImageUpload,
  PresetGalleryImage,
} from '../utils/imageUpload';
import {
  X,
  Save,
  RotateCcw,
  Phone,
  Mail,
  Instagram,
  Sparkles,
  Tag,
  Plane,
  HelpCircle,
  Film,
  CheckCircle2,
  Sliders,
  Plus,
  Trash2,
  Image as ImageIcon,
  Upload,
  FolderOpen,
  Eye,
  Camera,
  Layers,
  ArrowUpRight,
  RefreshCw,
} from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    companyConfig,
    setCompanyConfig,
    packages,
    setPackages,
    droneShows,
    setDroneShows,
    services,
    setServices,
    faqs,
    setFaqs,
    stories,
    setStories,
    visualStoriesHeading,
    setVisualStoriesHeading,
    visualStoriesSubheading,
    setVisualStoriesSubheading,
    resetAllToDefault,
    saveData,
  } = useSirin();

  const [activeTab, setActiveTab] = useState<'stories' | 'contact' | 'packages' | 'drones' | 'services' | 'faq'>('stories');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isProcessingUpload, setIsProcessingUpload] = useState(false);
  
  // Gallery Preset Picker state
  const [presetPickerTargetIndex, setPresetPickerTargetIndex] = useState<number | null>(null);

  // File input refs
  const batchFileInputRef = useRef<HTMLInputElement>(null);
  const singleFileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  if (!isAdminOpen) return null;

  const handleSave = () => {
    saveData();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  // Add single new empty/preset story
  const handleAddStory = () => {
    const newStory: PortfolioItem = {
      id: `port-custom-${Date.now()}`,
      title: 'New Visual Production',
      category: 'CINEMATIC',
      image: '/src/assets/images/sirin_hero_cinematic_1787143442924.jpg',
      aspectRatio: 'landscape',
      client: 'Luxury Brand / Client',
      location: 'Global / Studio',
      description: 'High-definition 4K aerial and ground production showcasing dynamic storytelling and cinema lighting.',
      tags: ['Cinema', 'Production', '4K'],
    };
    setStories([newStory, ...stories]);
  };

  // Handle single image upload from device gallery for a specific story item
  const handleSingleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsProcessingUpload(true);
      const dataUrl = await processGalleryImageUpload(file);
      const updated = [...stories];
      updated[index] = {
        ...updated[index],
        image: dataUrl,
      };
      setStories(updated);
    } catch (err) {
      console.error('Error processing gallery image:', err);
    } finally {
      setIsProcessingUpload(false);
      // Reset input value so same file can be reselected if needed
      e.target.value = '';
    }
  };

  // Handle batch image upload from device gallery (selects multiple photos at once)
  const handleBatchImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      setIsProcessingUpload(true);
      const newItems: PortfolioItem[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const dataUrl = await processGalleryImageUpload(file);
        
        // Clean title from filename
        const rawName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
        const cleanTitle =
          rawName.charAt(0).toUpperCase() + rawName.slice(1) || `Visual Story #${stories.length + i + 1}`;

        newItems.push({
          id: `port-upload-${Date.now()}-${i}`,
          title: cleanTitle,
          category: 'PHOTOGRAPHY',
          image: dataUrl,
          aspectRatio: 'landscape',
          client: 'Client Production',
          location: 'Production Studio',
          description: 'Capture produced by SIRIN VISUALS utilizing cinema lenses and aerial drone coverage.',
          tags: ['Gallery', 'Production', '4K'],
        });
      }

      setStories([...newItems, ...stories]);
    } catch (err) {
      console.error('Error uploading batch images:', err);
    } finally {
      setIsProcessingUpload(false);
      e.target.value = '';
    }
  };

  // Handle drag and drop on a story item
  const handleDropOnStory = async (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;

    try {
      setIsProcessingUpload(true);
      const dataUrl = await processGalleryImageUpload(file);
      const updated = [...stories];
      updated[index] = {
        ...updated[index],
        image: dataUrl,
      };
      setStories(updated);
    } catch (err) {
      console.error('Error dropping image:', err);
    } finally {
      setIsProcessingUpload(false);
    }
  };

  const handleDeleteStory = (id: string) => {
    setStories(stories.filter((s) => s.id !== id));
  };

  return (
    <div
      id="admin-panel-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="bg-white text-[#190C2E] w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-purple-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#1A0835] text-white flex items-center justify-between border-b border-purple-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-700 flex items-center justify-center text-white">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold font-display">SIRIN VISUALS • LIVE ADMIN EDITOR</h2>
              <p className="text-[11px] text-purple-200">
                Directly upload images from gallery, edit visual stories, WhatsApp, packages & services.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {saveSuccess && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500 text-white rounded-lg text-xs font-bold animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Saved Live!</span>
              </div>
            )}
            <button
              type="button"
              id="admin-save-btn"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
            <button
              type="button"
              id="admin-close-btn"
              onClick={() => setIsAdminOpen(false)}
              className="p-2 text-purple-300 hover:text-white hover:bg-purple-900/50 rounded-lg cursor-pointer"
              title="Close Admin Panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-2.5 bg-purple-50/70 border-b border-purple-100 flex items-center gap-2 overflow-x-auto text-xs font-bold">
          {[
            { id: 'stories', label: 'Our Visual Stories (Portfolio & Gallery)', icon: Film },
            { id: 'contact', label: 'Contact, Phone & Socials', icon: Phone },
            { id: 'packages', label: '7 Production Packages', icon: Tag },
            { id: 'drones', label: '6 Drone Show Tiers', icon: Plane },
            { id: 'services', label: '8 Core Services', icon: Sparkles },
            { id: 'faq', label: 'FAQs & Questions', icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-purple-900 text-white shadow-xs'
                    : 'text-[#4F3F66] hover:bg-purple-100 hover:text-purple-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Body Contents */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FAFAFC]">
          
          {/* TAB: OUR VISUAL STORIES (WITH IMAGE UPLOAD FROM GALLERY) */}
          {activeTab === 'stories' && (
            <div className="space-y-6">
              
              {/* Header Title Editor & Batch Upload Area */}
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-purple-950 uppercase tracking-wider font-tech flex items-center gap-2">
                    <Film className="w-4 h-4 text-purple-700" />
                    <span>Visual Stories Section & Image Uploader</span>
                  </h3>

                  {/* Batch Gallery Upload Trigger */}
                  <div className="flex items-center gap-2">
                    <input
                      ref={batchFileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleBatchImageUpload}
                    />

                    <button
                      type="button"
                      id="upload-multiple-gallery-btn"
                      onClick={() => batchFileInputRef.current?.click()}
                      disabled={isProcessingUpload}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-purple-100 hover:bg-purple-200/80 text-purple-950 text-xs font-bold border border-purple-300/70 transition-colors shadow-2xs cursor-pointer"
                      title="Select multiple images from your photo gallery / device"
                    >
                      <Upload className="w-3.5 h-3.5 text-purple-700" />
                      <span>{isProcessingUpload ? 'Processing...' : 'Upload Photos from Gallery'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleAddStory}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-900 hover:bg-purple-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-xs cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Story</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Section Heading
                    </label>
                    <input
                      type="text"
                      value={visualStoriesHeading}
                      onChange={(e) => setVisualStoriesHeading(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none font-bold text-purple-950"
                      placeholder="e.g. OUR VISUAL STORIES"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Section Subtitle / Description
                    </label>
                    <input
                      type="text"
                      value={visualStoriesSubheading}
                      onChange={(e) => setVisualStoriesSubheading(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none text-gray-700"
                      placeholder="Short description..."
                    />
                  </div>
                </div>
              </div>

              {/* Stories Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#1F0838] font-display">
                      Project Stories & Showcase Items ({stories.length})
                    </h4>
                    <p className="text-[11px] text-[#695982]">
                      Upload images directly from device gallery or select from studio library.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {stories.map((item, index) => (
                    <div
                      key={item.id}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => handleDropOnStory(e, index)}
                      className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-3 relative group transition-all hover:border-purple-300"
                    >
                      {/* Top Row: Image Preview with Upload Overlay + Title + Delete */}
                      <div className="flex items-start gap-3">
                        
                        {/* Interactive Image Box with Gallery Upload Button */}
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-purple-200 relative group/img shadow-2xs">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                '/src/assets/images/sirin_hero_cinematic_1787143442924.jpg';
                            }}
                          />

                          {/* Hover Upload Overlay */}
                          <div
                            onClick={() => singleFileInputRefs.current[item.id]?.click()}
                            className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 flex flex-col items-center justify-center text-white cursor-pointer transition-opacity"
                            title="Click to upload image from device gallery"
                          >
                            <Camera className="w-4 h-4 mb-0.5" />
                            <span className="text-[9px] font-bold">Change</span>
                          </div>

                          {/* Hidden File Input for this story */}
                          <input
                            type="file"
                            accept="image/*"
                            ref={(el) => (singleFileInputRefs.current[item.id] = el)}
                            className="hidden"
                            onChange={(e) => handleSingleImageUpload(e, index)}
                          />
                        </div>

                        {/* Title and Controls */}
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => {
                                const updated = [...stories];
                                updated[index].title = e.target.value;
                                setStories(updated);
                              }}
                              className="font-bold text-purple-950 text-sm border-b border-purple-200 focus:border-purple-600 focus:outline-none w-full"
                              placeholder="Project Title"
                            />
                            <button
                              type="button"
                              onClick={() => handleDeleteStory(item.id)}
                              className="text-gray-400 hover:text-red-600 p-1 rounded transition-colors cursor-pointer"
                              title="Delete this Story"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Category and Client */}
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <select
                              value={item.category}
                              onChange={(e) => {
                                const updated = [...stories];
                                updated[index].category = e.target.value as any;
                                setStories(updated);
                              }}
                              className="px-2 py-1 rounded border border-gray-300 text-xs font-semibold bg-gray-50 text-purple-900"
                            >
                              <option value="DRONE">DRONE</option>
                              <option value="CINEMATIC">CINEMATIC</option>
                              <option value="VIDEOGRAPHY">VIDEOGRAPHY</option>
                              <option value="PHOTOGRAPHY">PHOTOGRAPHY</option>
                              <option value="EVENTS">EVENTS</option>
                              <option value="PRODUCT">PRODUCT</option>
                              <option value="SOCIAL MEDIA">SOCIAL MEDIA</option>
                            </select>

                            <input
                              type="text"
                              value={item.client || ''}
                              onChange={(e) => {
                                const updated = [...stories];
                                updated[index].client = e.target.value;
                                setStories(updated);
                              }}
                              placeholder="Client Name"
                              className="px-2 py-1 rounded border border-gray-300 text-xs"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Image Upload Actions Toolbar */}
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => singleFileInputRefs.current[item.id]?.click()}
                          className="flex-1 py-1.5 px-2.5 rounded-lg bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Upload className="w-3.5 h-3.5 text-purple-700" />
                          <span>Upload from Gallery</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPresetPickerTargetIndex(index)}
                          className="py-1.5 px-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                          title="Choose from studio presets"
                        >
                          <FolderOpen className="w-3.5 h-3.5 text-gray-600" />
                          <span>Library</span>
                        </button>
                      </div>

                      {/* Direct URL / Asset Path Input (Optional) */}
                      <div>
                        <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">
                          Image Source URL or Data
                        </label>
                        <input
                          type="text"
                          value={item.image.startsWith('data:') ? '[Uploaded Image File from Gallery]' : item.image}
                          onChange={(e) => {
                            if (!e.target.value.startsWith('[Uploaded')) {
                              const updated = [...stories];
                              updated[index].image = e.target.value;
                              setStories(updated);
                            }
                          }}
                          className="w-full px-2.5 py-1 text-[11px] rounded border border-gray-300 font-mono text-gray-600 bg-gray-50"
                          placeholder="https://... or uploaded file"
                        />
                      </div>

                      {/* Location & Tags */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">
                            Location
                          </label>
                          <input
                            type="text"
                            value={item.location || ''}
                            onChange={(e) => {
                              const updated = [...stories];
                              updated[index].location = e.target.value;
                              setStories(updated);
                            }}
                            placeholder="e.g. Dubai Arena / Studio"
                            className="w-full px-2.5 py-1 text-xs rounded border border-gray-300"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">
                            Tags (comma separated)
                          </label>
                          <input
                            type="text"
                            value={item.tags.join(', ')}
                            onChange={(e) => {
                              const updated = [...stories];
                              updated[index].tags = e.target.value
                                .split(',')
                                .map((t) => t.trim())
                                .filter(Boolean);
                              setStories(updated);
                            }}
                            placeholder="Drone, Cinema, 4K"
                            className="w-full px-2.5 py-1 text-xs rounded border border-gray-300"
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">
                          Story Description
                        </label>
                        <textarea
                          rows={2}
                          value={item.description}
                          onChange={(e) => {
                            const updated = [...stories];
                            updated[index].description = e.target.value;
                            setStories(updated);
                          }}
                          className="w-full p-2 text-xs rounded border border-gray-300 text-gray-700"
                          placeholder="Details about the production, cameras, or event..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: Contact, Phone & Socials */}
          {activeTab === 'contact' && (
            <div className="space-y-6 max-w-3xl">
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-purple-950 uppercase tracking-wider font-tech flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-700" />
                  <span>Phone & WhatsApp Configuration</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Display Phone Number (Formatted)
                    </label>
                    <input
                      type="text"
                      value={companyConfig.phone}
                      onChange={(e) =>
                        setCompanyConfig((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Raw Phone Number (Numbers only, for dialer)
                    </label>
                    <input
                      type="text"
                      value={companyConfig.phoneRaw}
                      onChange={(e) =>
                        setCompanyConfig((prev) => ({ ...prev, phoneRaw: e.target.value }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      WhatsApp Number (with country code, e.g. 911234567890)
                    </label>
                    <input
                      type="text"
                      value={companyConfig.whatsappNumber}
                      onChange={(e) =>
                        setCompanyConfig((prev) => ({ ...prev, whatsappNumber: e.target.value }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Primary Contact Email
                    </label>
                    <input
                      type="email"
                      value={companyConfig.email}
                      onChange={(e) =>
                        setCompanyConfig((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1 text-xs">
                    Default WhatsApp Click Message
                  </label>
                  <input
                    type="text"
                    value={companyConfig.defaultWhatsAppMessage}
                    onChange={(e) =>
                      setCompanyConfig((prev) => ({ ...prev, defaultWhatsAppMessage: e.target.value }))
                    }
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none text-xs"
                  />
                </div>
              </div>

              {/* Social Handles */}
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-purple-950 uppercase tracking-wider font-tech flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-purple-700" />
                  <span>Social Handles & Links</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Instagram Handle
                    </label>
                    <input
                      type="text"
                      value={companyConfig.instagram}
                      onChange={(e) =>
                        setCompanyConfig((prev) => ({ ...prev, instagram: e.target.value }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Instagram URL
                    </label>
                    <input
                      type="url"
                      value={companyConfig.instagramUrl}
                      onChange={(e) =>
                        setCompanyConfig((prev) => ({ ...prev, instagramUrl: e.target.value }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      YouTube URL
                    </label>
                    <input
                      type="url"
                      value={companyConfig.youtubeUrl}
                      onChange={(e) =>
                        setCompanyConfig((prev) => ({ ...prev, youtubeUrl: e.target.value }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Facebook URL
                    </label>
                    <input
                      type="url"
                      value={companyConfig.facebookUrl}
                      onChange={(e) =>
                        setCompanyConfig((prev) => ({ ...prev, facebookUrl: e.target.value }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Taglines */}
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-purple-950 uppercase tracking-wider font-tech">
                  Studio Taglines & Coverage
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Primary Tagline
                    </label>
                    <input
                      type="text"
                      value={companyConfig.tagline}
                      onChange={(e) =>
                        setCompanyConfig((prev) => ({ ...prev, tagline: e.target.value }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Secondary Tagline
                    </label>
                    <input
                      type="text"
                      value={companyConfig.secondaryTagline}
                      onChange={(e) =>
                        setCompanyConfig((prev) => ({ ...prev, secondaryTagline: e.target.value }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Production Packages */}
          {activeTab === 'packages' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packages.map((pkg, index) => (
                  <div key={pkg.id} className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={pkg.name}
                        onChange={(e) => {
                          const updated = [...packages];
                          updated[index].name = e.target.value;
                          setPackages(updated);
                        }}
                        className="font-bold text-purple-950 text-sm border-b border-purple-200 focus:border-purple-600 focus:outline-none pb-0.5"
                      />
                      <input
                        type="text"
                        value={pkg.formattedPrice}
                        onChange={(e) => {
                          const updated = [...packages];
                          updated[index].formattedPrice = e.target.value;
                          setPackages(updated);
                        }}
                        className="font-black text-purple-800 text-xs border border-gray-300 rounded px-2 py-0.5 text-right w-24"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-gray-500 mb-0.5">Subtitle</label>
                      <input
                        type="text"
                        value={pkg.subtitle}
                        onChange={(e) => {
                          const updated = [...packages];
                          updated[index].subtitle = e.target.value;
                          setPackages(updated);
                        }}
                        className="w-full px-2.5 py-1 text-xs rounded border border-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-gray-500 mb-0.5">Best For</label>
                      <input
                        type="text"
                        value={pkg.bestFor}
                        onChange={(e) => {
                          const updated = [...packages];
                          updated[index].bestFor = e.target.value;
                          setPackages(updated);
                        }}
                        className="w-full px-2.5 py-1 text-xs rounded border border-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-gray-500 mb-0.5">
                        Features (one per line)
                      </label>
                      <textarea
                        rows={3}
                        value={pkg.features.join('\n')}
                        onChange={(e) => {
                          const updated = [...packages];
                          updated[index].features = e.target.value.split('\n').filter(Boolean);
                          setPackages(updated);
                        }}
                        className="w-full p-2 text-xs rounded border border-gray-300 text-gray-700"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Drone Shows */}
          {activeTab === 'drones' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {droneShows.map((tier, index) => (
                  <div key={tier.id} className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={tier.name}
                        onChange={(e) => {
                          const updated = [...droneShows];
                          updated[index].name = e.target.value;
                          setDroneShows(updated);
                        }}
                        className="font-bold text-purple-950 text-sm border-b border-purple-200 focus:border-purple-600 focus:outline-none"
                      />
                      <input
                        type="text"
                        value={tier.formattedPrice}
                        onChange={(e) => {
                          const updated = [...droneShows];
                          updated[index].formattedPrice = e.target.value;
                          setDroneShows(updated);
                        }}
                        className="font-black text-purple-800 text-xs border border-gray-300 rounded px-2 py-0.5 text-right w-24"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">Drones Count</label>
                        <input
                          type="text"
                          value={tier.drones}
                          onChange={(e) => {
                            const updated = [...droneShows];
                            updated[index].drones = e.target.value;
                            setDroneShows(updated);
                          }}
                          className="w-full px-2 py-1 text-xs rounded border border-gray-300"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">Duration</label>
                        <input
                          type="text"
                          value={tier.duration}
                          onChange={(e) => {
                            const updated = [...droneShows];
                            updated[index].duration = e.target.value;
                            setDroneShows(updated);
                          }}
                          className="w-full px-2 py-1 text-xs rounded border border-gray-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">Visual Formations</label>
                      <input
                        type="text"
                        value={tier.formations}
                        onChange={(e) => {
                          const updated = [...droneShows];
                          updated[index].formations = e.target.value;
                          setDroneShows(updated);
                        }}
                        className="w-full px-2 py-1 text-xs rounded border border-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">Features (comma separated)</label>
                      <input
                        type="text"
                        value={tier.features.join(', ')}
                        onChange={(e) => {
                          const updated = [...droneShows];
                          updated[index].features = e.target.value.split(',').map((f) => f.trim()).filter(Boolean);
                          setDroneShows(updated);
                        }}
                        className="w-full px-2 py-1 text-xs rounded border border-gray-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Services */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((svc, index) => (
                  <div key={svc.id} className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-3">
                    <input
                      type="text"
                      value={svc.title}
                      onChange={(e) => {
                        const updated = [...services];
                        updated[index].title = e.target.value;
                        setServices(updated);
                      }}
                      className="font-bold text-purple-950 text-sm border-b border-purple-200 focus:border-purple-600 focus:outline-none w-full"
                    />

                    <div>
                      <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">Tagline</label>
                      <input
                        type="text"
                        value={svc.tagline}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[index].tagline = e.target.value;
                          setServices(updated);
                        }}
                        className="w-full px-2 py-1 text-xs rounded border border-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">Description</label>
                      <textarea
                        rows={2}
                        value={svc.description}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[index].description = e.target.value;
                          setServices(updated);
                        }}
                        className="w-full p-2 text-xs rounded border border-gray-300 text-gray-700"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: FAQs */}
          {activeTab === 'faq' && (
            <div className="space-y-6">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={faq.id} className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-2">
                    <input
                      type="text"
                      value={faq.question}
                      onChange={(e) => {
                        const updated = [...faqs];
                        updated[index].question = e.target.value;
                        setFaqs(updated);
                      }}
                      className="font-bold text-purple-950 text-xs border-b border-purple-200 focus:border-purple-600 focus:outline-none w-full pb-1"
                    />
                    <textarea
                      rows={2}
                      value={faq.answer}
                      onChange={(e) => {
                        const updated = [...faqs];
                        updated[index].answer = e.target.value;
                        setFaqs(updated);
                      }}
                      className="w-full p-2 text-xs rounded border border-gray-300 text-gray-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <button
            type="button"
            onClick={resetAllToDefault}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Factory Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsAdminOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2 bg-purple-900 hover:bg-purple-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save & Publish Live</span>
            </button>
          </div>
        </div>

      </div>

      {/* Preset Studio Library Modal Popover */}
      {presetPickerTargetIndex !== null && (
        <div
          className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setPresetPickerTargetIndex(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden shadow-2xl border border-purple-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#1A0835] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-purple-300" />
                <h3 className="text-sm font-bold font-display">Studio Media Library</h3>
              </div>
              <button
                type="button"
                onClick={() => setPresetPickerTargetIndex(null)}
                className="text-purple-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PRESET_STUDIO_GALLERY.map((preset) => (
                <div
                  key={preset.id}
                  onClick={() => {
                    if (presetPickerTargetIndex !== null) {
                      const updated = [...stories];
                      updated[presetPickerTargetIndex] = {
                        ...updated[presetPickerTargetIndex],
                        image: preset.url,
                        title: updated[presetPickerTargetIndex].title === 'New Visual Production' ? preset.name : updated[presetPickerTargetIndex].title,
                      };
                      setStories(updated);
                    }
                    setPresetPickerTargetIndex(null);
                  }}
                  className="rounded-xl border border-gray-200 hover:border-purple-600 overflow-hidden cursor-pointer group/card transition-all hover:shadow-md bg-white text-left"
                >
                  <div className="h-28 bg-gray-100 overflow-hidden relative">
                    <img
                      src={preset.url}
                      alt={preset.name}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 bg-black/70 text-[9px] font-bold text-white rounded">
                      {preset.category}
                    </span>
                  </div>
                  <div className="p-2">
                    <div className="text-xs font-bold text-purple-950 truncate">
                      {preset.name}
                    </div>
                    <div className="text-[10px] text-gray-500 line-clamp-1">
                      {preset.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setPresetPickerTargetIndex(null)}
                className="px-3 py-1 text-xs font-semibold text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
