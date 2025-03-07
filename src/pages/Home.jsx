import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/configuration";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from "../components/container/Container";
import { AnimatedTestimonials } from "../components/Animated-testimonials";

function Home() {
  const [featuredPosts, setFeaturedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [testimonials, setTestimonials] = useState([])
  const authStatus = useSelector((state) => state.auth.status)
  const userData = useSelector((state) => state.auth.userData)

  useEffect(() => {
    appwriteService.getAllPost()
      .then((posts) => {
        if (posts && posts.documents) {
          // Sort by date (newest first)
          const sortedPosts = [...posts.documents].sort((a, b) => 
            new Date(b.$createdAt) - new Date(a.$createdAt)
          )
          
          // Take the first posts as featured
          if (sortedPosts.length > 0) {
            setFeaturedPosts(sortedPosts.slice(0, 3))
            
            // Format posts for testimonials component
            const formattedTestimonials = sortedPosts.slice(0, 5).map(post => ({
              src: appwriteService.getFilePreview(post.featuredImage),
              name: post.title,
              designation: new Date(post.$createdAt).toLocaleDateString(),
              quote: post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 120) + '...' : 'No content available',
              id: post.$id
            }))
            setTestimonials(formattedTestimonials)
          }
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  // Hero section content changes based on login status
  const renderHeroSection = () => {
    if (authStatus) {
      return (
        <div className="relative overflow-hidden bg-gradient-to-r from-primary to-accent rounded-2xl shadow-elevated mb-16">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <Container className="relative z-10">
            <div className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Welcome back, {userData?.name || 'Creator'}!
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-xl text-white/80">
                  Discover today's inspiring content or share your own creations with our community.
                </p>
                {/* Buttons removed as requested */}
              </div>
            </div>
          </Container>
        </div>
      )
    } else {
      return (
        <div className="relative overflow-hidden bg-gradient-to-r from-primary/90 to-accent rounded-2xl shadow-elevated mb-16">
          <div className="absolute inset-0 bg-black/10 z-0"></div>
          <Container className="relative z-10">
            <div className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Share Your Story with the World
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-xl text-white/80">
                  Join our community of creators and storytellers. Start sharing your journey today.
                </p>
                {/* Buttons removed as requested */}
              </div>
            </div>
          </Container>
        </div>
      )
    }
  }

  if (loading) {
    return (
      <div className="w-full min-h-[60vh] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div>
      {/* Dynamic Hero Section */}
      {renderHeroSection()}
      
      <Container>
        {/* Featured Posts with AnimatedTestimonials */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-textPrimary">Featured Posts</h2>
            {authStatus && (
              <Link to="/all-posts" className="text-primary hover:underline font-medium flex items-center">
                View All
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>

          {testimonials.length === 0 ? (
            <div className="bg-card p-8 rounded-xl text-center shadow-card">
              <p className="text-textSecondary">No featured posts available yet.</p>
            </div>
          ) : (
            // Use the AnimatedTestimonials component
            <div className="bg-card rounded-2xl shadow-card p-8">
              <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
              
              {/* Make images clickable */}
              <div className="mt-4 text-center">
                <Link 
                  to={`/post/${testimonials[0]?.id || ''}`}
                  className="inline-block text-primary hover:underline"
                >
                  View featured post details →
                </Link>
              </div>
            </div>
          )}
        </div>
        
        {/* Call to action */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 shadow-card border border-primary/10">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:pr-6">
                <h3 className="text-2xl font-bold text-textPrimary mb-3">Ready to share your story?</h3>
                <p className="text-textSecondary">
                  Join our growing community of creators and start sharing your unique perspective with the world.
                </p>
              </div>
              <div className="flex-shrink-0">
                {authStatus ? (
                  <Link
                    to="/add-post"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Create New Post
                  </Link>
                ) : (
                  <Link
                    to="/signup"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Sign Up Now
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home