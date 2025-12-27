import { BookOpen } from "lucide-react";
import { BlogCard } from "./blog-card";

const blogPosts = [
  {
    title: "Role Base Access Control in NestJS",
    description:
      "Implementing robust role-based access control (RBAC) patterns in NestJS applications to manage user permissions and secure endpoints effectively.",
    link: "https://medium.com/@palashmahabub/role-base-access-control-in-nest-js-e984f3db4634",
    date: "Medium Article",
    tags: ["NestJS", "Security", "Backend"],
  },
  {
    title: "How to Upload Files with NestJS, MongoDB, and AWS S3",
    description:
      "Complete guide on implementing file upload functionality in NestJS with MongoDB integration and AWS S3 storage for scalable applications.",
    link: "https://medium.com/dev-genius/how-to-upload-files-with-nestjs-mongodb-and-aws-s3-4a247a5e1e1d",
    date: "Dev Genius Article",
    tags: ["NestJS", "MongoDB", "AWS S3"],
  },
  {
    title: "Integrating SSLCommerz Payment Gateway in NestJS E-commerce",
    description:
      "Step-by-step integration of SSLCommerz payment gateway in NestJS e-commerce projects for secure online transactions.",
    link: "https://medium.com/@palashmahabub/integrating-sslcommerz-payment-gateway-in-nestjs-e-commerce-project-5f51f7b272a8",
    date: "Medium Article",
    tags: ["NestJS", "Payment", "E-commerce"],
  },
  {
    title: "Docker দিয়ে React (Vite) + NestJS অ্যাপ ডেপ্লয়মেন্ট",
    description:
      "Complete guide on containerizing and deploying React (Vite) + NestJS applications using Docker for production-ready deployments.",
    link: "https://medium.com/@palashmahabub/docker-%E0%A6%A6%E0%A6%BF%E0%A7%9F%E0%A7%87-react-vite-nestjs-%E0%A6%85%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AA-%E0%A6%A1%E0%A7%87%E0%A6%AA%E0%A7%8D%E0%A6%B2%E0%A7%9F%E0%A6%AE%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F-4a7f782fefd1",
    date: "Medium Article",
    tags: ["Docker", "React", "NestJS", "DevOps"],
  },
  {
    title:
      "Integrating Google Analytics 4 & Google Tag Manager in React and Next.js",
    description:
      "Learn how to implement Google Analytics 4 and Google Tag Manager in React and Next.js applications for comprehensive tracking and analytics.",
    link: "https://medium.com/@palashmahabub/integrating-google-analytics-4-google-tag-manager-in-react-and-next-js-1db0b9c43949",
    date: "Medium Article",
    tags: ["Analytics", "React", "Next.js", "GTM"],
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="border-t border-border py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <BookOpen className="text-primary" size={32} />
          Blog & Articles
        </h2>
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
