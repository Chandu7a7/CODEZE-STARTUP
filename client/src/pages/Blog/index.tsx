import React from 'react'
import { SectionTitle } from '../../components/common/SectionTitle'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const Blog: React.FC = () => {
  const posts = [
    {
      title: "Designing the Perfect Light Theme in 2026",
      desc: "Why modern websites are choosing custom, soft, slate-gray systems over simple default white backgrounds.",
      date: "June 10, 2026",
      author: "Alex Rivera",
      category: "Design",
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Optimizing React App Performance at Scale",
      desc: "An in-depth guide on how we improved loading times by 50% using server component splits and cache strategies.",
      date: "May 24, 2026",
      author: "Marcus Vance",
      category: "Engineering",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "The Ultimate Guide to Glassmorphism",
      desc: "How to use subtle backdrops and CSS backdrop-filters to give web layouts an extremely premium depth.",
      date: "April 18, 2026",
      author: "Sophia Patel",
      category: "Aesthetics",
      imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop&q=60"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background z-0 opacity-40" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <SectionTitle subtitle="Insights" title="Our Design & Code Blog" align="center" />
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mt-4">
          Stay up to date with the latest designs, technology trends, and industry insights.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {posts.map((post, idx) => (
          <div key={idx} className="group rounded-2xl glass-card overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left">
            <div>
              <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="object-cover w-full h-full group-hover:scale-103 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 text-[10px] text-white bg-purple-600 px-3 py-1 rounded-full font-bold uppercase">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-[10px] text-[var(--text-muted)] mb-3">
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </span>
                </div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  {post.desc}
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <span className="inline-flex items-center space-x-1 text-xs font-bold text-purple-600 hover:text-purple-700 cursor-pointer">
                <span>Read Article</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
