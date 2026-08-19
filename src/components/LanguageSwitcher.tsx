import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSirin } from '../context/SirinContext';
import { ALL_LANGUAGES, LanguageOption } from '../data/languages';
import {
  getCurrentLanguageCode,
  setGoogleTranslateLanguage,
  getLanguageByCode,
} from '../utils/translate';
import { Globe, Search, Check, X, Sparkles, ChevronDown } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'mobile' | 'footer';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'navbar' }) => {
  const { language, setLanguage } = useSirin();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCode, setActiveCode] = useState<string>('en');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync active code on mount and when changed
  useEffect(() => {
    const current = getCurrentLanguageCode();
    setActiveCode(current || language || 'en');
  }, [language]);

  // Focus search input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  const currentLanguage = useMemo(() => {
    return getLanguageByCode(activeCode);
  }, [activeCode]);

  const popularLanguages = useMemo(() => {
    return ALL_LANGUAGES.filter((l) => l.isPopular);
  }, []);

  const filteredLanguages = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return ALL_LANGUAGES;

    return ALL_LANGUAGES.filter(
      (lang) =>
        lang.name.toLowerCase().includes(query) ||
        lang.nativeName.toLowerCase().includes(query) ||
        lang.code.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSelectLanguage = (lang: LanguageOption) => {
    setActiveCode(lang.code);
    if (lang.code === 'hi' || lang.code === 'en') {
      setLanguage(lang.code);
    }
    setGoogleTranslateLanguage(lang.code);
    setIsOpen(false);
  };

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      {variant === 'mobile' ? (
        <button
          type="button"
          id="mobile-language-switcher-btn"
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center justify-between p-3 rounded-xl bg-purple-50/80 hover:bg-purple-100/70 border border-purple-200/80 transition-all text-left cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-900 text-white flex items-center justify-center">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-purple-950 flex items-center gap-1.5">
                <span>{currentLanguage.flag}</span>
                <span>{currentLanguage.nativeName} ({currentLanguage.name})</span>
              </div>
              <div className="text-[10px] font-semibold text-purple-700">
                100+ Languages Available
              </div>
            </div>
          </div>

          <div className="px-2.5 py-1 text-[11px] font-bold text-purple-900 bg-white border border-purple-200 rounded-lg shadow-2xs">
            Change
          </div>
        </button>
      ) : (
        <button
          type="button"
          id="desktop-language-switcher-btn"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50/90 hover:bg-purple-100/80 border border-purple-200/80 text-purple-950 text-xs font-bold transition-all shadow-2xs cursor-pointer group"
          title="Change Language (100+ Available)"
          aria-label="Select Language (100+ World Languages)"
        >
          <Globe className="w-3.5 h-3.5 text-purple-700 group-hover:rotate-12 transition-transform duration-200" />
          <span className="text-xs">{currentLanguage.flag}</span>
          <span className="text-xs font-semibold">{currentLanguage.name}</span>
          <ChevronDown className="w-3 h-3 text-purple-600 ml-0.5 opacity-70 group-hover:opacity-100" />
        </button>
      )}

      {/* 100+ Language Modal Dialog */}
      {isOpen && (
        <div
          id="language-modal-overlay"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            id="language-modal-content"
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-purple-100 overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#FAFAFC]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-900 text-white flex items-center justify-center shadow-xs">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[#1D0837] font-display">
                      Select Language
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-900">
                      <Sparkles className="w-2.5 h-2.5" />
                      100+ Languages
                    </span>
                  </div>
                  <p className="text-xs text-[#62537A]">
                    Instant translation for our global clients and creators
                  </p>
                </div>
              </div>

              <button
                type="button"
                id="close-language-modal-btn"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-200/60 transition-colors cursor-pointer"
                aria-label="Close language selector"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Input Bar */}
            <div className="p-4 border-b border-gray-100 bg-white">
              <div className="relative">
                <Search className="w-4 h-4 text-purple-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  id="language-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by language, country, or native script (e.g. Hindi, Spanish, 日本語, Arabic)..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-purple-200/80 bg-purple-50/30 text-xs text-[#1F0838] placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable Language Grid */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 custom-scrollbar">
              
              {/* Popular Languages Quick Pick (visible when not searching) */}
              {!searchQuery && (
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-purple-950 font-tech mb-2.5 flex items-center justify-between">
                    <span>Popular Languages</span>
                    <span className="text-[10px] text-purple-600 font-normal">Quick Select</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {popularLanguages.map((lang) => {
                      const isSelected = activeCode === lang.code;
                      return (
                        <button
                          key={lang.code}
                          type="button"
                          id={`pop-lang-${lang.code}`}
                          onClick={() => handleSelectLanguage(lang)}
                          className={`p-2.5 rounded-xl text-left flex items-center justify-between border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-purple-900 text-white border-purple-900 shadow-sm'
                              : 'bg-[#FAFAFC] hover:bg-purple-50/80 border-gray-100 hover:border-purple-200 text-[#1F0838]'
                          }`}
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <span className="text-base flex-shrink-0">{lang.flag}</span>
                            <div className="truncate">
                              <div className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-[#1F0838]'}`}>
                                {lang.nativeName}
                              </div>
                              <div className={`text-[10px] truncate ${isSelected ? 'text-purple-200' : 'text-gray-500'}`}>
                                {lang.name}
                              </div>
                            </div>
                          </div>

                          {isSelected && <Check className="w-3.5 h-3.5 text-white flex-shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* All / Filtered Languages Grid */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-purple-950 font-tech mb-2.5 flex items-center justify-between">
                  <span>
                    {searchQuery
                      ? `Found ${filteredLanguages.length} Languages`
                      : `All Supported Languages (${ALL_LANGUAGES.length}+)`}
                  </span>
                </div>

                {filteredLanguages.length === 0 ? (
                  <div className="text-center py-10 space-y-2">
                    <p className="text-xs text-gray-500">
                      No languages matched "<strong>{searchQuery}</strong>"
                    </p>
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="text-xs font-bold text-purple-700 underline cursor-pointer"
                    >
                      Clear search
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {filteredLanguages.map((lang) => {
                      const isSelected = activeCode === lang.code;
                      return (
                        <button
                          key={lang.code}
                          type="button"
                          id={`all-lang-${lang.code}`}
                          onClick={() => handleSelectLanguage(lang)}
                          className={`p-2.5 rounded-xl text-left flex items-center justify-between border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-purple-900 text-white border-purple-900 shadow-sm'
                              : 'bg-white hover:bg-purple-50/70 border-gray-100 hover:border-purple-200 text-[#1F0838]'
                          }`}
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <span className="text-sm flex-shrink-0">{lang.flag || '🌐'}</span>
                            <div className="truncate">
                              <div className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-[#1F0838]'}`}>
                                {lang.nativeName}
                              </div>
                              <div className={`text-[10px] truncate ${isSelected ? 'text-purple-200' : 'text-gray-500'}`}>
                                {lang.name}
                              </div>
                            </div>
                          </div>

                          {isSelected && <Check className="w-3.5 h-3.5 text-white flex-shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-3.5 border-t border-gray-100 bg-[#FAFAFC] flex items-center justify-between text-xs text-[#6A5C80]">
              <div className="flex items-center gap-1.5">
                <span>Active: <strong>{currentLanguage.name}</strong></span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    handleSelectLanguage(ALL_LANGUAGES[0]); // English
                  }}
                  className="text-xs font-bold text-purple-700 hover:text-purple-950 underline cursor-pointer"
                >
                  Reset to English
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
