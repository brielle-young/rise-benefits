import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function NotFound() {
  return <div className="flex min-h-screen flex-col"><Navbar /><main className="container flex-1 py-24"><p className="eyebrow">404 / Page not found</p><h1 className="text-4xl md:text-6xl mb-6">This page isn’t here.</h1><p className="text-muted-foreground mb-8">The link may have changed. You can still find programs by state or browse nationwide resources.</p><div className="flex flex-wrap gap-6"><Link to="/" className="text-link">Return to Home →</Link><Link to="/states" className="text-link">Browse State Programs →</Link></div></main><Footer /></div>;
}
