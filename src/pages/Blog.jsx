import { motion } from 'framer-motion'
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Choosing the Right Gate for Your Property",
      excerpt: "Learn how to select the perfect gate that combines security, functionality, and aesthetic appeal for your home or business.",
      date: "June 15, 2023",
      author: "John Smith",
      category: "Gates",
      image: "p1.jpg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Benefits of Automated Gate Systems",
      excerpt: "Discover how automated gates can enhance your property's security and convenience while increasing its value.",
      date: "May 28, 2023",
      author: "Sarah Johnson",
      category: "Automation",
      image: "p2.jpg",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Maintaining Your Wrought Iron Fence",
      excerpt: "Essential tips and techniques to keep your wrought iron fence looking beautiful and functioning properly for years to come.",
      date: "April 12, 2023",
      author: "Michael Chen",
      category: "Maintenance",
      image: "p3.jpg",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Modern Fencing Trends for 2023",
      excerpt: "Explore the latest design trends in residential and commercial fencing that combine style with security.",
      date: "March 22, 2023",
      author: "Emily Rodriguez",
      category: "Design",
      image: "p4.jpg",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Security Fencing for Commercial Properties",
      excerpt: "How to choose and install the most effective security fencing solutions for your business premises.",
      date: "February 18, 2023",
      author: "John Smith",
      category: "Security",
      image: "p5.jpg",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Vinyl vs. Wood Fencing: Pros and Cons",
      excerpt: "A comprehensive comparison of two popular fencing materials to help you make the right choice for your property.",
      date: "January 5, 2023",
      author: "Sarah Johnson",
      category: "Materials",
      image: "p6.jpg",
      readTime: "6 min read"
    }
  ]

  const categories = ["All", "Gates", "Automation", "Maintenance", "Design", "Security", "Materials"]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566752229-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Blog & News
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Latest updates, tips, and insights about gates and fencing
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Featured Post */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="uppercase tracking-wide text-sm text-orange-500 font-semibold mb-1">
                  {blogPosts[0].category}
                </div>
                <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-4">
                    <FiUser className="mr-1" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <FiCalendar className="mr-1" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
                  Read more <FiArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="uppercase tracking-wide text-xs text-orange-500 font-semibold mb-1">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FiUser className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <button className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
                  Read more <FiArrowRight className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
    
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-1">
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-orange-500 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
              3
            </button>
            <span className="px-2">...</span>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
              8
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
    )
}

export default Blog