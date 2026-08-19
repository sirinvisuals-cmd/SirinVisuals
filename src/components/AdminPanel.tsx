import React, { useState } from 'react';
import { useSirin } from '../context/SirinContext';
import { PortfolioItem } from '../types';
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
  Layers,
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

  const [activeTab, setActiveTab] = useState<'contact' | 'stories' | 'packages' | 'drones' | 'services' | 'faq'>('stories');
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isAdminOpen) return null;

  const handleSave = () => {
    saveData();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleAddStory = () => {
    const newStory: PortfolioItem = {
      id: `port-custom-${Date.now()}`,
      title: 'New Visual Project',
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
                Directly edit Visual Stories, phone numbers, WhatsApp, packages, drone shows & services.
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
            { id: 'stories', label: 'Our Visual Stories (Portfolio)', icon: Film },
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
          
          {/* TAB: OUR VISUAL STORIES */}
          {activeTab === 'stories' && (
            <div className="space-y-6">
              
              {/* Header Title Editor */}
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-3">
                <h3 className="text-sm font-bold text-purple-950 uppercase tracking-wider font-tech flex items-center gap-2">
                  <Film className="w-4 h-4 text-purple-700" />
                  <span>Visual Stories Header & Intro</span>
                </h3>

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

              {/* Items List Controls */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1F0838] font-display">
                    Project Stories & Showcase Items ({stories.length})
                  </h4>
                  <p className="text-[11px] text-[#695982]">
                    Edit titles, images, categories, locations, client credits, and tags.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddStory}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-900 hover:bg-purple-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-xs cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Story</span>
                </button>
              </div>

              {/* Grid of Story Editors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stories.map((item, index) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-3 relative group"
                  >
                    {/* Top Row: Thumbnail + Title + Delete */}
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200 relative">
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
                      </div>

                      <div className="flex-1 min-w-0 space-y-1">
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
                            className="text-gray-400 hover:text-red-600 p-1 rounded transition-colors"
                            title="Delete this Story"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Category and Aspect Ratio */}
                        <div className="grid grid-cols-2 gap-2 text-xs pt-1">
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
                            <option value="BEFORE / AFTER">BEFORE / AFTER</option>
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

                    {/* Image URL Input */}
                    <div>
                      <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">
                        Image / Asset URL
                      </label>
                      <input
                        type="text"
                        value={item.image}
                        onChange={(e) => {
                          const updated = [...stories];
                          updated[index].image = e.target.value;
                          setStories(updated);
                        }}
                        className="w-full px-2.5 py-1 text-xs rounded border border-gray-300 font-mono text-gray-700"
                        placeholder="https://... or /src/assets/..."
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
                      <label className="block text-[11px] font-semibold text-gray-500 mb-0.5">
                        Features (one per line)
                      </label>
                      <textarea
                        rows={3}
                        value={pkg.features.join('\n')}
                        onChange={(e) => {
                          const updated = [...packages];
                          updated[index].features = e.target.value.split('\n').filter((f) => f.trim().length > 0);
                          setPackages(updated);
                        }}
                        className="w-full p-2 text-xs rounded border border-gray-300 font-mono"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Drone Show Tiers */}
          {activeTab === 'drones' && (
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
                      <label className="block text-[10px] font-semibold text-gray-500">Fleet Size</label>
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
                      <label className="block text-[10px] font-semibold text-gray-500">Duration</label>
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
                    <label className="block text-[10px] font-semibold text-gray-500">Features</label>
                    <textarea
                      rows={2}
                      value={tier.features.join('\n')}
                      onChange={(e) => {
                        const updated = [...droneShows];
                        updated[index].features = e.target.value.split('\n').filter((f) => f.trim().length > 0);
                        setDroneShows(updated);
                      }}
                      className="w-full p-2 text-xs rounded border border-gray-300 font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Core Services */}
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((srv, index) => (
                <div key={srv.id} className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-2 text-xs">
                  <input
                    type="text"
                    value={srv.title}
                    onChange={(e) => {
                      const updated = [...services];
                      updated[index].title = e.target.value;
                      setServices(updated);
                    }}
                    className="font-bold text-sm text-purple-950 w-full border-b border-gray-200 pb-1"
                  />
                  <input
                    type="text"
                    value={srv.tagline}
                    onChange={(e) => {
                      const updated = [...services];
                      updated[index].tagline = e.target.value;
                      setServices(updated);
                    }}
                    className="w-full px-2 py-1 border border-gray-200 rounded text-purple-700"
                  />
                  <textarea
                    rows={2}
                    value={srv.description}
                    onChange={(e) => {
                      const updated = [...services];
                      updated[index].description = e.target.value;
                      setServices(updated);
                    }}
                    className="w-full p-2 border border-gray-200 rounded"
                  />
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: FAQs */}
          {activeTab === 'faq' && (
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-2 text-xs">
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => {
                      const updated = [...faqs];
                      updated[index].question = e.target.value;
                      setFaqs(updated);
                    }}
                    className="font-bold text-sm text-purple-950 w-full border-b border-gray-200 pb-1"
                  />
                  <textarea
                    rows={2}
                    value={faq.answer}
                    onChange={(e) => {
                      const updated = [...faqs];
                      updated[index].answer = e.target.value;
                      setFaqs(updated);
                    }}
                    className="w-full p-2 border border-gray-200 rounded text-gray-700"
                  />
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={resetAllToDefault}
            className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-800 font-semibold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All to Default Settings</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsAdminOpen(false)}
              className="px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-bold uppercase tracking-wider cursor-pointer"
            >
              Save & Apply Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
