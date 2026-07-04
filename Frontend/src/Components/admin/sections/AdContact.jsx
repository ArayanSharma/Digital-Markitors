import { useEffect, useState, useCallback } from "react";
import { loadPageContent, savePageContent } from "../../../utils/pageApi";
import { uid } from "../../../utils/uid";
import { useToast } from "../../../context/ToastContext";
import ModalForm from "../modals/ModalForm";
import {
  Section,
  Field,
  TextInput,
  TextArea,
  ButtonFields,
  CardListHeader,
  RemoveBtn,
  PageStatusBanner,
  SaveBar,
  FormCard,
  PageHeader,
  Checkbox,
} from "./common/FormKit";
import { Mail, Info, Phone, User, Globe, MessageSquare, FileText, Type, Heading, MapPin, List, Compass, Star } from "lucide-react";

const PAGE_SLUG = "contact";

export default function AdContact() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("hero");
  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  /* ---------- MODAL STATES ---------- */
  const [modals, setModals] = useState({
    addressLine: false,
    service: false,
    touchCard: false,
    hearOption: false,
  });
  const [modalData, setModalData] = useState({ edit: null, index: null });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  /* ---------- LEFT COLUMN (contact information) ---------- */
  const [left, setLeft] = useState({
    smallHeading: "READY FOR RESULTS?",
    title: "DROP US AN EMAIL:",
    email: "support@digicore.co.in",
    phone: "+919818888064",
    addressLines: ["438C, Panki Road,", "Kalyanpur,", "Kanpur 208017 UP"],
    iconName: "Send",
  });

  /* ---------- FORM (right column) ---------- */
  const [form, setForm] = useState({
    smallHeading: "It's time",
    mainHeading: "LET'S TALK",
    placeholders: { name: "What is your name?", email: "Can we have your email address?", phone: "What phone number can we reach you on?", website: "Your website link?", message: "How can we help?" },
    privacyText: "We respect your privacy. By ticking this box, you agree that Digicore Inc. may contact you...",
    submitBtn: { text: "Submit", link: "" },
    requirePrivacyChecked: true,
    resumeAccept: "",
  });

  /* ---------- Services dropdown options ---------- */
  const [services, setServices] = useState(["SEO", "Web Development", "Social Media Marketing"]);

  /* ---------- Hear About Us dropdown options ---------- */
  const [hearOptions, setHearOptions] = useState(["Google", "Facebook", "Instagram"]);

  /* ---------- TOUCH / HOW TO GET IN TOUCH CARDS ---------- */
  const [touchHeading, setTouchHeading] = useState("How to get in touch");
  const [touchCards, setTouchCards] = useState([
    { id: uid(), title: "OPPORTUNITIES AT FOUND", text: "For information regarding open positions, check out the careers section." },
    { id: uid(), title: "FOUND BUSINESS PARTNERSHIPS", text: "For enquiries about business partnerships, email us at support@digicore.co.in" },
    { id: uid(), title: "EMAIL US", text: "Prefer to send us an email? Email us at support@digicore.co.in" },
    { id: uid(), title: "CALL US", text: "Call us on +91 9818888064" },
  ]);

  /* ---------- MAP / IFRAME ---------- */
  const [mapSrc, setMapSrc] = useState("https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7009.334881986703!2d77.250079!3d28.549714000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cf0fa997a5%3A0x9f960e33bba19672!2sDigital%20Markitors%20-%20Best%20Digital%20Marketing%20and%20SEO%20Company%20in%20Kanpur!5e0!3m2!1sen!2sin!4v1780405452796!5m2!1sen!2sin");

  /* ---------- Load existing content ---------- */
  const load = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    let data = null;
    try {
      data = await loadPageContent(PAGE_SLUG);
    } catch (err) {
      setLoadError(err.message);
    }
    if (data) {
      if (data.left) setLeft(data.left);
      if (data.form) setForm(data.form);
      if (data.services) setServices(data.services);
      if (data.hearOptions) setHearOptions(data.hearOptions);
      if (data.touchHeading) setTouchHeading(data.touchHeading);
      if (data.touchCards) setTouchCards(data.touchCards);
      if (data.mapSrc) setMapSrc(data.mapSrc);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      await load();
    })();
  }, [load]);

  /* ---------- Modal Handlers ---------- */
  const openAddressModal = () => {
    setModalData({ edit: null, index: null });
    setModals({ ...modals, addressLine: true });
  };

  const closeAddressModal = () => {
    setModals({ ...modals, addressLine: false });
  };

  const handleAddAddress = (data) => {
    if (data.line.trim()) {
      setLeft({ ...left, addressLines: [...left.addressLines, data.line] });
      closeAddressModal();
    }
  };

  const removeAddress = (idx) => {
    setLeft({ ...left, addressLines: left.addressLines.filter((_, i) => i !== idx) });
  };

  const openServiceModal = () => {
    setModalData({ edit: null, index: null });
    setModals({ ...modals, service: true });
  };

  const closeServiceModal = () => {
    setModals({ ...modals, service: false });
  };

  const handleAddService = (data) => {
    if (data.service.trim()) {
      setServices([...services, data.service]);
      closeServiceModal();
    }
  };

  const removeService = (idx) => {
    setServices(services.filter((_, i) => i !== idx));
  };

  const openHearOptionModal = () => {
    setModalData({ edit: null, index: null });
    setModals({ ...modals, hearOption: true });
  };

  const closeHearOptionModal = () => {
    setModals({ ...modals, hearOption: false });
  };

  const handleAddHearOption = (data) => {
    if (data.option.trim()) {
      setHearOptions([...hearOptions, data.option]);
      closeHearOptionModal();
    }
  };

  const removeHearOption = (idx) => {
    setHearOptions(hearOptions.filter((_, i) => i !== idx));
  };

  const openTouchCardModal = () => {
    setModalData({ edit: null, index: null });
    setModals({ ...modals, touchCard: true });
  };

  const closeTouchCardModal = () => {
    setModals({ ...modals, touchCard: false });
  };

  const handleAddTouchCard = (data) => {
    if (data.title.trim()) {
      const newCard = { id: uid(), title: data.title, text: data.text };
      setTouchCards([...touchCards, newCard]);
      closeTouchCardModal();
    }
  };

  const removeTouchCard = (id) => {
    setTouchCards(touchCards.filter((card) => card.id !== id));
  };

  /* ---------- Save ---------- */
  const handleSave = async (e) => {
    e?.preventDefault();
    setStatus("saving");
    try {
      const payload = { left, form, services, hearOptions, touchHeading, touchCards, mapSrc };
      await savePageContent(PAGE_SLUG, payload);
      setStatus("saved");
      showToast("Contact page saved successfully");
    } catch (err) {
      console.error(err);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    } finally {
      setTimeout(() => setStatus(""), 2000);
    }
  };

  return (
    <div className="min-h-screen py-6 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      
        {/* Page Header */}
        <PageHeader
          icon={Mail}
          title="Contact Page Admin"
          description="Manage all website contact page content and sections"
          breadcrumbs={["Dashboard", "Page Editor", "Contact"]}
        />
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        <FormCard>
          {/* ========== LEFT COLUMN - CONTACT INFO ========== */}
          
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section 
            icon={Info} 
            title="Contact Information (Left Column)" 
            description="Control headings, phone number, email address and main business details."
            open={openSection === "left"} 
            onToggle={() => toggle("left")}
          >
            <div className="md:col-span-2 space-y-4">
              <Field label="Small Heading">
                <TextInput 
                  icon={Type}
                  value={left.smallHeading} 
                  onChange={(e) => setLeft({ ...left, smallHeading: e.target.value })} 
                  placeholder="e.g., READY FOR RESULTS?" 
                />
              </Field>

              <Field label="Main Heading">
                <TextInput 
                  icon={Heading}
                  value={left.title} 
                  onChange={(e) => setLeft({ ...left, title: e.target.value })} 
                  placeholder="e.g., DROP US AN EMAIL:" 
                />
              </Field>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Email Address">
                  <TextInput 
                    icon={Mail}
                    value={left.email} 
                    onChange={(e) => setLeft({ ...left, email: e.target.value })} 
                    type="email" 
                    placeholder="support@example.com" 
                  />
                </Field>

                <Field label="Phone Number">
                  <TextInput 
                    icon={Phone}
                    value={left.phone} 
                    onChange={(e) => setLeft({ ...left, phone: e.target.value })} 
                    type="tel" 
                    placeholder="+91 9999999999" 
                  />
                </Field>
              </div>

              {/* Address Lines */}
              <Field label="Address Lines">
                <div className="space-y-2">
                  {left.addressLines.length > 0 ? (
                    <div className="space-y-2 mb-3">
                      {left.addressLines.map((line, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 bg-white shadow-sm rounded-xl border border-slate-200 hover:border-blue-500/30 transition-colors">
                          <MapPin size={16} className="text-slate-400" />
                          <span className="flex-1 text-slate-800 text-sm">{line}</span>
                          <button
                            type="button"
                            onClick={() => removeAddress(idx)}
                            className="text-slate-400 hover:text-red-500 transition-colors font-medium text-sm"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-400 text-sm py-2">No address lines added</p>
                  )}
                  <button
                    type="button"
                    onClick={openAddressModal}
                    className="w-full px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-200 hover:border-blue-600 transition-all font-semibold text-sm cursor-pointer text-center"
                  >
                    + Add Address Line
                  </button>
                </div>
              </Field>
            </div>
          </Section>

          {/* ========== FORM - RIGHT COLUMN ========== */}
          <Section 
            icon={FileText} 
            title="Contact Form (Right Column)" 
            description="Customize form titles, inputs, place-holder texts and agreements."
            open={openSection === "form"} 
            onToggle={() => toggle("form")}
          >
            <div className="md:col-span-2 space-y-4">
              <Field label="Form Small Heading">
                <TextInput 
                  icon={Type}
                  value={form.smallHeading} 
                  onChange={(e) => setForm({ ...form, smallHeading: e.target.value })} 
                  placeholder="e.g., It's time" 
                />
              </Field>

              <Field label="Form Main Heading">
                <TextInput 
                  icon={Heading}
                  value={form.mainHeading} 
                  onChange={(e) => setForm({ ...form, mainHeading: e.target.value })} 
                  placeholder="e.g., LET'S TALK" 
                />
              </Field>

              <Field label="Form Field Placeholders">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextInput
                    icon={User}
                    value={form.placeholders.name}
                    onChange={(e) => setForm({ ...form, placeholders: { ...form.placeholders, name: e.target.value } })}
                    placeholder="Name placeholder"
                  />
                  <TextInput
                    icon={Mail}
                    value={form.placeholders.email}
                    onChange={(e) => setForm({ ...form, placeholders: { ...form.placeholders, email: e.target.value } })}
                    placeholder="Email placeholder"
                  />
                  <TextInput
                    icon={Phone}
                    value={form.placeholders.phone}
                    onChange={(e) => setForm({ ...form, placeholders: { ...form.placeholders, phone: e.target.value } })}
                    placeholder="Phone placeholder"
                  />
                  <TextInput
                    icon={Globe}
                    value={form.placeholders.website}
                    onChange={(e) => setForm({ ...form, placeholders: { ...form.placeholders, website: e.target.value } })}
                    placeholder="Website placeholder"
                  />
                </div>
              </Field>

              <Field label="Message Placeholder">
                <TextArea 
                  icon={MessageSquare}
                  value={form.placeholders.message} 
                  onChange={(e) => setForm({ ...form, placeholders: { ...form.placeholders, message: e.target.value } })} 
                  placeholder="Message placeholder" 
                  rows={3} 
                />
              </Field>

              <Field label="Privacy Policy Text">
                <TextArea 
                  icon={FileText}
                  value={form.privacyText} 
                  onChange={(e) => setForm({ ...form, privacyText: e.target.value })} 
                  placeholder="Privacy policy text..." 
                  rows={4} 
                />
              </Field>

              <Field label="Privacy Checkbox">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Checkbox
                    checked={form.requirePrivacyChecked}
                    onChange={(e) => setForm({ ...form, requirePrivacyChecked: e.target.checked })}
                    label="Require privacy checkbox before submission"
                  />
                </div>
              </Field>
            </div>
          </Section>

          {/* ========== SERVICES ========== */}
          <Section 
            icon={List} 
            title="Services Dropdown" 
            description="Manage options presented inside the dropdown selection for services."
            open={openSection === "services"} 
            onToggle={() => toggle("services")}
          >
            <div className="md:col-span-2 space-y-3">
              <p className="text-sm text-slate-500">Services shown in the contact form dropdown</p>

              {services.length > 0 ? (
                <div className="space-y-2 mb-4">
                  {services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-white shadow-sm rounded-xl border border-slate-200 hover:border-blue-500/30 transition-colors group">
                      <Compass size={16} className="text-slate-400" />
                      <span className="flex-1 text-slate-800 text-sm">{service || "(empty)"}</span>
                      <button
                        type="button"
                        onClick={() => removeService(idx)}
                        className="text-slate-400 hover:text-red-500 transition-colors font-medium text-sm opacity-0 group-hover:opacity-100"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400 text-sm py-3">No services added yet</p>
              )}

              <button
                type="button"
                onClick={openServiceModal}
                className="w-full px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-200 hover:border-blue-600 transition-all font-semibold text-sm cursor-pointer text-center"
              >
                + Add Service
              </button>
            </div>
          </Section>

          {/* ========== HEAR ABOUT US ========== */}
          <Section 
            icon={Star} 
            title="How Did You Hear About Us? Dropdown" 
            description="Manage choices for customer discovery feedback dropdown."
            open={openSection === "hear"} 
            onToggle={() => toggle("hear")}
          >
            <div className="md:col-span-2 space-y-3">
              <p className="text-sm text-slate-500">Options shown in the "How did you hear about us?" dropdown</p>

              {hearOptions.length > 0 ? (
                <div className="space-y-2 mb-4">
                  {hearOptions.map((opt, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-white shadow-sm rounded-xl border border-slate-200 hover:border-blue-500/30 transition-colors group">
                      <Compass size={16} className="text-slate-400" />
                      <span className="flex-1 text-slate-800 text-sm">{opt || "(empty)"}</span>
                      <button
                        type="button"
                        onClick={() => removeHearOption(idx)}
                        className="text-slate-400 hover:text-red-500 transition-colors font-medium text-sm opacity-0 group-hover:opacity-100"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400 text-sm py-3">No options added yet</p>
              )}

              <button
                type="button"
                onClick={openHearOptionModal}
                className="w-full px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-200 hover:border-blue-600 transition-all font-semibold text-sm cursor-pointer text-center"
              >
                + Add Option
              </button>
            </div>
          </Section>

          {/* ========== TOUCH CARDS ========== */}
          <Section 
            icon={Mail} 
            title="How to Get in Touch" 
            description="Control secondary blocks of quick options to contact business partners/careers."
            open={openSection === "touch"} 
            onToggle={() => toggle("touch")}
          >
            <div className="md:col-span-2 space-y-4">
              <Field label="Section Heading">
                <TextInput 
                  icon={Type}
                  value={touchHeading} 
                  onChange={(e) => setTouchHeading(e.target.value)} 
                  placeholder="e.g., How to get in touch" 
                />
              </Field>

              <div className="space-y-3">
                <p className="text-sm text-slate-500">Contact option cards</p>

                {touchCards.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {touchCards.map((card) => (
                      <div key={card.id} className="p-4 bg-white shadow-sm rounded-xl border border-slate-200 hover:border-blue-500/30 hover:shadow-md transition-all duration-200 group">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-slate-900 flex-1 text-sm">{card.title}</h4>
                          <button
                            type="button"
                            onClick={() => removeTouchCard(card.id)}
                            className="text-slate-400 hover:text-red-500 transition-colors font-medium text-sm opacity-0 group-hover:opacity-100"
                          >
                            ✕
                          </button>
                        </div>
                        <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">{card.text}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400 text-sm py-3">No touch cards added yet</p>
                )}

                <button
                  type="button"
                  onClick={openTouchCardModal}
                  className="w-full px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-200 hover:border-blue-600 transition-all font-semibold text-sm cursor-pointer text-center"
                >
                  + Add Touch Card
                </button>
              </div>
            </div>
          </Section>

          {/* ========== MAP / EMBED ========== */}
          <Section 
            icon={MapPin} 
            title="Map / Location Embed" 
            description="Paste an iframe source link from Google Maps to pin your headquarters location."
            open={openSection === "map"} 
            onToggle={() => toggle("map")}
          >
            <div className="md:col-span-2 space-y-3">
              <Field label="Google Map Embed Code">
                <TextArea 
                  icon={Globe}
                  value={mapSrc} 
                  onChange={(e) => setMapSrc(e.target.value)} 
                  placeholder="Paste Google Maps embed iframe src..." 
                  rows={4} 
                />
              </Field>
              <p className="text-xs text-slate-400">Paste the iframe src attribute from Google Maps embed code</p>
            </div>
          </Section>
        </div>

        </FormCard>

        {/* Save Bar */}
        <SaveBar status={status} onSave={handleSave} />
      </form>

      {/* ========== MODALS ========== */}

      {/* Address Line Modal */}
      <ModalForm
        isOpen={modals.addressLine}
        title="Add Address Line"
        onClose={closeAddressModal}
        onSubmit={handleAddAddress}
        fields={[
          { name: "line", label: "Address Line", type: "text", required: true, placeholder: "e.g., 438C Panki Road" },
        ]}
      />

      {/* Service Modal */}
      <ModalForm
        isOpen={modals.service}
        title="Add Service"
        onClose={closeServiceModal}
        onSubmit={handleAddService}
        fields={[
          { name: "service", label: "Service Name", type: "text", required: true, placeholder: "e.g., Web Development" },
        ]}
      />

      {/* Touch Card Modal */}
      <ModalForm
        isOpen={modals.touchCard}
        title="Add Contact Option"
        onClose={closeTouchCardModal}
        onSubmit={handleAddTouchCard}
        fields={[
          { name: "title", label: "Title", type: "text", required: true, placeholder: "e.g., EMAIL US" },
          { name: "text", label: "Description", type: "textarea", rows: 3, placeholder: "Enter description..." },
        ]}
      />

      {/* Hear Option Modal */}
      <ModalForm
        isOpen={modals.hearOption}
        title="Add Dropdown Option"
        onClose={closeHearOptionModal}
        onSubmit={handleAddHearOption}
        fields={[
          { name: "option", label: "Option Name", type: "text", required: true, placeholder: "e.g., Google, LinkedIn" },
        ]}
      />
    </div>
  );
}
