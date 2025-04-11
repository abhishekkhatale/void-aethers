import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const Policies = () => {
  const { type } = useParams()

  const policyData = {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "June 15, 2023",
      content: [
        {
          heading: "Information We Collect",
          text: "We collect personal information you provide when you make a purchase, create an account, or contact us. This may include your name, email address, phone number, shipping address, and payment information. We also automatically collect certain information about your device and browsing behavior using cookies and similar technologies."
        },
        {
          heading: "How We Use Your Information",
          text: "We use the information we collect to process your orders, communicate with you about your purchases, improve our products and services, and send you marketing communications if you've opted in. We may also use your information for security purposes and to comply with legal obligations."
        },
        {
          heading: "Information Sharing",
          text: "We do not sell your personal information. We may share your information with trusted third-party service providers who assist us with payment processing, shipping, marketing, and other business operations. These partners are contractually obligated to protect your information. We may also disclose information when required by law."
        },
        {
          heading: "Your Rights",
          text: "You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us using the information below. We will respond to your request within 30 days."
        },
        {
          heading: "Data Security",
          text: "We implement appropriate technical and organizational measures to protect your personal information. All payment transactions are encrypted using SSL technology. However, no method of transmission over the Internet is 100% secure, so we cannot guarantee absolute security."
        },
        {
          heading: "Policy Changes",
          text: "We may update this policy from time to time. The updated version will be posted on our website with a new \"Last Updated\" date. We encourage you to review this policy periodically."
        }
      ]
    },
    terms: {
      title: "Terms & Conditions",
      lastUpdated: "June 15, 2023",
      content: [
        {
          heading: "General Terms",
          text: "By accessing and using the GatesNFences website, you accept and agree to be bound by these Terms & Conditions. If you do not agree, you should not use our website. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of those changes."
        },
        {
          heading: "Product Information",
          text: "We strive for accuracy in all product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. If a product is not as described, your sole remedy is to return it in unused condition."
        },
        {
          heading: "Orders & Pricing",
          text: "All orders are subject to product availability. We reserve the right to limit quantities and to refuse service to anyone. Prices are subject to change without notice. We are not responsible for typographical errors regarding price or product information."
        },
        {
          heading: "Shipping & Delivery",
          text: "Shipping times are estimates and not guaranteed. Risk of loss passes to you upon delivery. Some items may require signature upon delivery. Additional shipping charges may apply for large or heavy items and remote locations."
        },
        {
          heading: "Returns & Refunds",
          text: "Most items can be returned within 30 days of delivery for a refund or exchange, provided they are in original condition. Custom or special-order items may not be returnable. Shipping charges are non-refundable. Returns must be initiated through our customer service."
        },
        {
          heading: "Intellectual Property",
          text: "All content on this website, including text, graphics, logos, and images, is our property or the property of our licensors and is protected by copyright and other intellectual property laws. You may not use any content without our express written permission."
        }
      ]
    },
    returns: {
      title: "Return & Refund Policy",
      lastUpdated: "June 15, 2023",
      content: [
        {
          heading: "Return Eligibility",
          text: "Most standard products can be returned within 30 days of delivery for a full refund or exchange, provided they are in original, unused condition with all packaging and documentation. Custom-made products, special orders, and installed items are not eligible for return unless defective."
        },
        {
          heading: "Return Process",
          text: "To initiate a return, please contact our customer service team to obtain a Return Merchandise Authorization (RMA) number. Returns without an RMA number will not be accepted. You are responsible for return shipping costs unless the return is due to our error."
        },
        {
          heading: "Refund Processing",
          text: "Once we receive and inspect your return, we will process your refund within 5-7 business days. Refunds will be issued to the original payment method. Shipping charges are non-refundable. For exchanges, we will ship the replacement item once the return is received."
        },
        {
          heading: "Damaged or Defective Items",
          text: "If you receive a damaged or defective item, please contact us within 7 days of delivery. We may require photos of the damage. We will arrange for a replacement or refund at no additional cost to you, including covering return shipping if necessary."
        },
        {
          heading: "Restocking Fees",
          text: "A 15% restocking fee may apply to returns of non-defective items that require special handling or are in less than original condition. This fee will be deducted from your refund amount."
        },
        {
          heading: "International Returns",
          text: "International customers are responsible for all return shipping costs and any applicable customs fees or duties. We recommend using a trackable shipping method as we cannot be responsible for items lost in transit."
        }
      ]
    }
  }

  const policy = policyData[type] || {
    title: "Policy Not Found",
    lastUpdated: "",
    content: [{ heading: "", text: "The requested policy does not exist." }]
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {policy.title}
          </motion.h1>
          {policy.lastUpdated && (
            <p className="text-gray-300">Last Updated: {policy.lastUpdated}</p>
          )}
        </div>
      </div>

      {/* Policy Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
          <div className="prose max-w-none">
            {policy.content.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-8"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{section.heading}</h3>
                <p className="text-gray-600">{section.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Us</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about our policies, please contact us:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>Email: legal@gatesnfences.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Mail: 123 Fence Street, Gated Community, GC 12345</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Policies