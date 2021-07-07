export const readFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const toBinary = (file, type) => {
  let binary = atob(file.split(",")[1]);
  let array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  let blobData = new Blob([new Uint8Array(array)], { type });
  return blobData;
};
