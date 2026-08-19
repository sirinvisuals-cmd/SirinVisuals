import React, { useState, useEffect } from 'react';
import { useSirin } from '../context/SirinContext';
import { EnquiryFormData } from '../types';
import confetti from 'canvas-confetti';
import {
  Phone,
  Mail,
  Instagram,
  Send,
  CheckCircle2,
  Clock,
  RotateCcw,
} from 'lucide-react';

interface ContactProps {
  initialServiceOrPackage?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialServiceOrPackage }) => {
  const { companyConfig, language, t } = useSirin();

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    city: '',
    projectType: 'Commercial / Brand Video',
    preferredDate: '',
    budgetRange: '₹25,000 - ₹50,000',
    selectedServices: ['Videography', 'Drone Services'],
    selectedPackage: '',
    projectDetails: '',
    referenceFilesNote: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialServiceOrPackage) {
      if (initialServiceOrPackage.startsWith('PACKAGE:') || initialServiceOrPackage.startsWith('SIRIN SKY:')) {
        setFormData((prev) => ({
          ...prev,
          selectedPackage: initialServiceOrPackage,
          projectDetails: `Inquiring about ${initialServiceOrPackage}.\n` + prev.projectDetails,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          selectedServices: Array.from(new Set([...prev.selectedServices, initialServiceOrPackage])),
          projectDetails: `Interested in ${initialServiceOrPackage} service.\n` + prev.projectDetails,
        }));
      }
    }
  }, [initialServiceOrPackage]);

  const allAvailableServices = [
    'Drone Services',
    'Photography',
    'Videography',
    'Video Editing',
    '360 Photo Booth',
    'Cinematic Films',
    'Product Shoot',
    'Social Media Content',
    'SIRIN SKY Drone Show',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== service)
          : [...prev.selectedServices, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage(language === 'hi' ? 'कृपया अपना पूरा नाम दर्ज करें।' : 'Please provide your full name.');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMessage(language === 'hi' ? 'कृपया अपना फोन नंबर दर्ज करें।' : 'Please provide a contact phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#7E22CE', '#3B0764', '#C084FC'],
        });
      } catch (err) {
        // Confetti fallback
      }

      // Save inquiry to local record for reference
      try {
        const existing = JSON.parse(localStorage.getItem('sirin_inquiries_log') || '[]');
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('sirin_inquiries_log', JSON.stringify(existing));
      } catch (err) {}
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      city: '',
      projectType: 'Commercial / Brand Video',
      preferredDate: '',
      budgetRange: '₹25,000 - ₹50,000',
      selectedServices: ['Videography', 'Drone Services'],
      selectedPackage: '',
      projectDetails: '',
      referenceFilesNote: '',
    });
    setIsSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700 font-tech">
            {t('contact_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#190830] font-display">
            {t('contact_heading')}
          </h2>
          <p className="text-sm text-[#5C4E73]">
            {t('contact_subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs space-y-4">
              <h3 className="text-lg font-bold font-display text-[#1F0838]">
                {language === 'hi' ? 'सीधे संपर्क सूत्र' : 'Direct Contacts'}
              </h3>

              <div className="space-y-3 text-xs">
                <a
                  href={`tel:${companyConfig.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-purple-700" />
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase">Phone / WhatsApp</div>
                    <div className="font-bold text-[#1F0838]">{companyConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${companyConfig.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors"
                >
                  <Mail className="w-4 h-4 text-purple-700" />
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase">Email</div>
                    <div className="font-bold text-[#1F0838]">{companyConfig.email}</div>
                  </div>
                </a>

                <a
                  href={companyConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-purple-700" />
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase">Instagram</div>
                    <div className="font-bold text-[#1F0838]">{companyConfig.instagram}</div>
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center gap-2 text-[11px] text-[#6E6083]">
                <Clock className="w-3.5 h-3.5 text-purple-700 flex-shrink-0" />
                <span>
                  {language === 'hi' ? '24 व्यावसायिक घंटों के भीतर जवाब' : 'Response within 24 business hours'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-xs">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#1F0838]">
                    {language === 'hi' ? 'पूछताछ प्राप्त हो गई!' : 'Enquiry Received!'}
                  </h3>
                  <p className="text-xs text-[#5D4F75] max-w-md mx-auto">
                    {language === 'hi'
                      ? `धन्यवाद, ${formData.fullName}। हमारी टीम को आपका विवरण मिल गया है और हम शीघ्र ही आपसे संपर्क करेंगे।`
                      : `Thank you, ${formData.fullName}. Our team has received your details and will get back to you shortly.`}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase rounded-lg text-purple-900 bg-purple-50 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{language === 'hi' ? 'दूसरी पूछताछ भेजें' : 'Send Another'}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formData.selectedPackage && (
                    <div className="p-2.5 rounded-lg bg-purple-50 text-xs text-purple-900 flex justify-between">
                      <span>Package: <strong>{formData.selectedPackage}</strong></span>
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, selectedPackage: '' }))}
                        className="text-purple-700 font-bold cursor-pointer"
                      >
                        Clear
                      </button>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {t('contact_form_name')} *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder={language === 'hi' ? 'आपका नाम / कंपनी' : 'Your Name / Company'}
                        className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-gray-900 focus:border-purple-600 focus:outline-none bg-[#FAFAFC]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {t('contact_form_phone')} *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-gray-900 focus:border-purple-600 focus:outline-none bg-[#FAFAFC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {t('contact_form_email')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-gray-900 focus:border-purple-600 focus:outline-none bg-[#FAFAFC]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {t('contact_form_location')}
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder={language === 'hi' ? 'शहर / स्थान' : 'City / Location'}
                        className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-gray-900 focus:border-purple-600 focus:outline-none bg-[#FAFAFC]"
                      />
                    </div>
                  </div>

                  {/* Services Chips */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      {language === 'hi' ? 'आवश्यक सेवाएं' : 'Services Needed'}
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {allAvailableServices.map((srv) => {
                        const active = formData.selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                              active
                                ? 'bg-purple-900 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {active ? '✓ ' : '+ '}
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('contact_form_message')}
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={2}
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      placeholder={
                        language === 'hi'
                          ? 'शूट, स्थान या आवश्यकताओं का संक्षिप्त विवरण...'
                          : 'Brief details about the shoot, venue, or requirements...'
                      }
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-gray-900 focus:border-purple-600 focus:outline-none bg-[#FAFAFC]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-purple-900 hover:bg-purple-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>
                      {isSubmitting
                        ? language === 'hi'
                          ? 'भेजा जा रहा है...'
                          : 'Sending...'
                        : t('contact_form_submit')}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
