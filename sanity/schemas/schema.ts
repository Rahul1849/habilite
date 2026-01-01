import home from "./home/home";
import about from "./about/about";
import service from "./services/service";
import serviceCategory from "./services/serviceCategory";
import blog from "./blog/blog";
import blogCategory from "./blog/blogCategory";
import chart from "./blog/chart"; // ✅ Chart schema for blog.portableContent
import doctor from "./doctors/doctor";
import faq from "./faq/faq";
import testimonial from "./testimonials/testimonial";
import globalSettings from "./global/globalSettings";
import page from "./page/page";

export const schemaTypes = [
  home,
  about,
  service,
  serviceCategory,
  blog,
  blogCategory,
  chart, // ✅ Required for chart blocks in blog.portableContent
  doctor,
  faq,
  testimonial,
  globalSettings,
  page,
];
