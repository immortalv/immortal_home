/**
 * filterFalsy
 * @typedef {Object} options
 * @property {boolean} acceptFalse - Accept boolean false values
 * @property {boolean} acceptEmpty - Accept empty arrays
 */

const defaultOptions = {
  acceptFalse: true,
  acceptEmpty: true,
};

export const filterFalsy = (obj, options = {}) => {
  const opt = { ...defaultOptions, ...options };

  return Object.keys(obj).reduce((acc, key) => {
    if (opt.acceptFalse && obj[key] === false) {
      acc[key] = obj[key];
      return acc;
    }

    if (Array.isArray(obj[key]) && !opt.acceptEmpty && !obj[key].length) {
      return acc;
    }

    if (typeof obj[key] === "string" && opt.acceptEmpty) {
      acc[key] = obj[key];
    }

    if (obj[key]) acc[key] = obj[key];

    return acc;
  }, {});
};
