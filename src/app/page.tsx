"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Star } from 'lucide-react';

const assetMap = [
  { id: "hero", url: "https://images.pexels.com/photos/5377558/pexels-photo-5377558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Warm autumn drink in a yellow mug with pumpkin and squash on a soft background." },
  { id: "about", url: "https://images.pexels.com/photos/5964562/pexels-photo-5964562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A baker in gloves skillfully slices a chocolate cake with a spatula on a metal table." },
  { id: "products", url: "https://images.pexels.com/photos/34298914/pexels-photo-34298914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A selection of artisan breads displayed with fresh herbs in a decorative bowl, perfect for entertaining." },
  { id: "contact", url: "https://images.pexels.com/photos/34297248/pexels-photo-34297248.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "biscuits" },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="Bakery Bliss" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-pink-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Bakery Bliss"
            description="Delicious artisan breads and pastries crafted with love."
            imageSrc="https://images.pexels.com/photos/5377558/pexels-photo-5377558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{ text: "Explore Our Bakes", href: "products" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-pink-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Our passion is crafting delicious baked goods using the finest ingredients. Join us on our journey."
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-pink-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            title="Our Delicious Range"
            products={[
              { id: "1", brand: "Bakery Bliss", name: "Sourdough Bread", price: "$4.99", rating: 5, reviewCount: "150", imageSrc: "asset://products" },
              { id: "2", brand: "Bakery Bliss", name: "Chocolate Croissant", price: "$2.99", rating: 4, reviewCount: "87", imageSrc: "asset://products" },
              { id: "3", brand: "Bakery Bliss", name: "Blueberry Muffin", price: "$1.99", rating: 5, reviewCount: "200", imageSrc: "asset://products" }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24 bg-pink-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            title="What Our Customers Say"
            testimonials={[
              { id: "1", name: "Jane Doe", role: "Customer", testimonial: "The best bakery in town. The sourdough bread is a must-try.", imageSrc: "asset://hero", icon: Star },
              { id: "2", name: "John Smith", role: "Food Critic", testimonial: "Bakery Bliss delivers top quality every time. Highly recommended!", imageSrc: "asset://hero", icon: Star }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-pink-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact Us"
            title="Let's Get In Touch"
            description="Have any questions or feedback? We'd love to hear from you."
            imageSrc="asset://contact"
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-pink-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Discover", items: [{ label: "Products", href: "products" }, { label: "About Us", href: "about" }] },
              { title: "Legal", items: [{ label: "Terms of Service", href: "terms" }, { label: "Privacy Policy", href: "policy" }] }
            ]}
            copyrightText="© 2025 | Bakery Bliss"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
