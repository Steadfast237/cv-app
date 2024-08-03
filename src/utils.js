function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function saveData(myCv) {
  if (storageAvailable('localStorage')) {
    localStorage.setItem('cv', JSON.stringify(myCv));
    alert('saved');
  }
}

export function loadData() {
  if (!localStorage.getItem('cv')) return;

  const data = JSON.parse(localStorage.getItem('cv'));

  return data;
}

export default { saveData, loadData };
