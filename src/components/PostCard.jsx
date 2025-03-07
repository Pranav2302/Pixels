import React, { useState } from 'react'
import appwriteService from "../appwrite/configuration";
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage, content, userId }) {
  const [imageError, setImageError] = useState(false);
 
  // Extract a short excerpt from content (strip HTML tags)
  const handleImageError = () => {
    setImageError(true);
  };
  const createExcerpt = (htmlContent) => {
    const strippedContent = htmlContent.replace(/<[^>]+>/g, '');
    return strippedContent.length > 100 
      ? `${strippedContent.substring(0, 100)}...` 
      : strippedContent;
  };

  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-card rounded-2xl overflow-hidden shadow-card h-full transition-all duration-300 hover:shadow-elevated hover:translate-y-[-4px]">
      <div className="aspect-video overflow-hidden">
        {featuredImage && !imageError ? (
          <img 
            src={
              typeof featuredImage === 'string' && featuredImage.startsWith('http') 
                ? featuredImage 
                : appwriteService.getFilePreview(featuredImage)
            }
            alt={title}
            onError={handleImageError}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
      </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-textPrimary mb-2 line-clamp-2">{title}</h2>
          {content && (
            <p className="text-textSecondary line-clamp-3 text-sm">
              {createExcerpt(content)}
            </p>
          )}
          <div className="mt-4 flex justify-between items-center">
            <div className="text-xs text-primary font-medium">Read more</div>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                   className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard