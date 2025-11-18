const STORAGE_KEY = "ssvp_donations_v1";

function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch { return []; }
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getDonations() {
  return load();
}

export function addDonation(item) {
  const list = load();
  item.id = Date.now();
  list.push(item);
  save(list);
}

export function deleteDonation(id) {
  const list = load().filter(i => i.id !== id);
  save(list);
}