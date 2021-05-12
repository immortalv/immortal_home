export const getVideoSource = (src) => {
  return {
    type: 'video',
    sources: [
      {
        src
      }
    ]
  }
};