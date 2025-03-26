import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/components/sections/Blog';

export default function BlogPost() {
  const [, params] = useRoute('/blog/:id');
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    if (params && params.id) {
      const foundPost = blogPosts.find(p => p.id === params.id);
      
      if (foundPost) {
        setPost(foundPost);
        
        // Find related posts with the same category, excluding current post
        const related = blogPosts
          .filter(p => p.id !== params.id && p.category === foundPost.category)
          .slice(0, 3);
        
        setRelatedPosts(related);
      }
    }
  }, [params]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-gray-600">Loading article...</h2>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Radiant Agility Technology</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-10">
            <Link href="/blog">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 pl-0">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Articles
              </Button>
            </Link>
          </div>
          
          {/* Header */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge className="bg-primary-500 hover:bg-primary-600">
                {post.category}
              </Badge>
              {post.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="outline" className="text-gray-700 border-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {post.readTime}
              </div>
            </div>
          </motion.div>
          
          {/* Cover Image */}
          <div className="max-w-5xl mx-auto mb-12">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
          
          {/* Social Share */}
          <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-center mb-10 pb-6 border-b border-gray-200">
            <div className="text-lg text-gray-600 font-medium">
              Share this article
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="rounded-full h-10 w-10 p-0">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full h-10 w-10 p-0">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full h-10 w-10 p-0">
                <ThumbsUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Content */}
          <div 
            className="max-w-4xl mx-auto prose prose-lg prose-blue mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Author Bio */}
          <div className="max-w-4xl mx-auto mb-16 p-8 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-20 h-20 rounded-full bg-gray-300 flex-shrink-0 mx-auto md:mx-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-center md:text-left">{post.author}</h3>
                <p className="text-gray-600 mb-4">
                  Content specialist at Radiant Agility Technology with expertise in {post.category.toLowerCase()}
                  and digital transformation. Passionate about helping businesses leverage technology to achieve their goals.
                </p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <Button variant="outline" size="sm">View Profile</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-2">
                        <Link href={`/blog/${relatedPost.id}`} className="hover:text-primary-600">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <div className="text-sm text-gray-500 mb-3">{relatedPost.date}</div>
                      <Link href={`/blog/${relatedPost.id}`} className="text-primary-600 font-medium flex items-center">
                        Read Article <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Call to Action */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your business?</h2>
              <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                Learn how our {post.category} solutions can help your business grow and thrive in today's competitive landscape.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 text-lg">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}