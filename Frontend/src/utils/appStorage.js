const CONTACT_STORAGE_KEY = "dm_contact_submissions";
const CAREER_STORAGE_KEY = "dm_career_submissions";

export const loadStoredContacts = () => {
  try {
    const raw = localStorage.getItem(CONTACT_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to load stored contacts", error);
    return [];
  }
};

export const saveContactSubmission = (payload) => {
  const entry = {
    ...payload,
    _id: `${Date.now()}`,
    createdAt: new Date().toISOString(),
  };

  const next = [entry, ...loadStoredContacts()];
  localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(next));
  return entry;
};

export const loadStoredCareers = () => {
  try {
    const raw = localStorage.getItem(CAREER_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to load stored careers", error);
    return [];
  }
};

export const saveCareerApplication = (payload) => {
  const entry = {
    ...payload,
    _id: `${Date.now()}`,
    createdAt: new Date().toISOString(),
  };

  const next = [entry, ...loadStoredCareers()];
  localStorage.setItem(CAREER_STORAGE_KEY, JSON.stringify(next));
  return entry;
};
