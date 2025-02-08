export const getOptimizedImageUrl = (imagePath) => {
  // For development, return the original path
  if (process.env.NODE_ENV === 'development') {
    return imagePath;
  }
  
  // For production, return the optimized path
  // The imagemin plugin will automatically optimize images in the public directory
  return imagePath;
}; 