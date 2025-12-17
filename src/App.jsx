import React, { useState, useEffect } from 'react';
import { Home, Palette, Eye, Calculator, Image, Mail, ChevronRight, Check } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState('living');
  const [roomColor, setRoomColor] = useState('#E5E7EB');
  const [calcHeight, setCalcHeight] = useState('');
  const [calcWidth, setCalcWidth] = useState('');
  const [calcResult, setCalcResult] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const products = [
    { id: 1, name: 'Velvet Touch', category: 'interior', finish: 'Matte', color: '#8B7355', price: '$54.99' },
    { id: 2, name: 'Silk Canvas', category: 'interior', finish: 'Satin', color: '#C5B8A5', price: '$59.99' },
    { id: 3, name: 'Mirror Sheen', category: 'interior', finish: 'Gloss', color: '#2C3E50', price: '$64.99' },
    { id: 4, name: 'Weather Shield', category: 'exterior', finish: 'Satin', color: '#34495E', price: '$69.99' },
    { id: 5, name: 'Stone Guard', category: 'exterior', finish: 'Matte', color: '#95A5A6', price: '$74.99' },
    { id: 6, name: 'Terra Texture', category: 'texture', finish: 'Textured', color: '#D4A574', price: '$79.99' },
    { id: 7, name: 'Industrial Pro', category: 'industrial', finish: 'High-Traffic', color: '#1C2833', price: '$89.99' },
    { id: 8, name: 'Coastal Breeze', category: 'interior', finish: 'Eggshell', color: '#A3C1DA', price: '$56.99' },
  ];

  const colorSwatches = [
    { name: 'Cloud White', hex: '#F8F9FA' },
    { name: 'Warm Gray', hex: '#9CA3AF' },
    { name: 'Deep Navy', hex: '#1E293B' },
    { name: 'Forest Sage', hex: '#4A5D4F' },
    { name: 'Terracotta', hex: '#D97706' },
    { name: 'Royal Blue', hex: '#1E40AF' },
    { name: 'Charcoal', hex: '#374151' },
    { name: 'Cream', hex: '#FEF3C7' },
  ];

  const gallery = [
    { id: 1, before: '#BDC3C7', after: '#2C3E50', title: 'Modern Living Room' },
    { id: 2, before: '#ECF0F1', after: '#16A085', title: 'Kitchen Refresh' },
    { id: 3, before: '#D5DBDB', after: '#8E44AD', title: 'Bedroom Sanctuary' },
    { id: 4, before: '#F4F6F7', after: '#E74C3C', title: 'Accent Wall Drama' },
  ];

  const calculatePaint = () => {
    if (calcHeight && calcWidth) {
      const area = parseFloat(calcHeight) * parseFloat(calcWidth);
      const liters = (area / 10).toFixed(2);
      const gallons = (liters * 0.264172).toFixed(2);
      setCalcResult({ liters, gallons, area: area.toFixed(2) });
    }
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Navigation Component
  const Navigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-white/60 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight text-slate-900">
          Élite <span className="text-amber-600">Paint</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', icon: Home, page: 'home' },
            { name: 'Products', icon: Palette, page: 'products' },
            { name: 'Visualizer', icon: Eye, page: 'visualizer' },
            { name: 'Calculator', icon: Calculator, page: 'calculator' },
            { name: 'Gallery', icon: Image, page: 'gallery' },
            { name: 'Contact', icon: Mail, page: 'contact' },
          ].map((item) => (
            <button
              key={item.page}
              onClick={() => navigate(item.page)}
              className={`flex items-center gap-2 transition-colors ${
                currentPage === item.page ? 'text-amber-600' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <item.icon size={18} />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  // Home Page
  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
            Color Perfected
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-200 font-light">
            Premium architectural coatings for discerning spaces
          </p>
          <button 
            onClick={() => navigate('products')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-2xl"
          >
            Explore Collections
          </button>
        </div>
      </div>

      {/* Color of the Year */}
      <div className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-amber-600 font-semibold">2025 Selection</span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">Color of the Year</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">A sophisticated sage that brings timeless elegance to any space</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-3xl shadow-2xl" style={{ backgroundColor: '#4A5D4F' }}></div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-slate-900">Forest Sage</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                A harmonious blend of earthy green and soft gray, Forest Sage embodies natural sophistication. 
                This versatile shade creates serene environments while maintaining commanding presence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="text-amber-600" size={20} />
                  <span className="text-slate-700">Perfect for living spaces and bedrooms</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-amber-600" size={20} />
                  <span className="text-slate-700">Available in all finish types</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-amber-600" size={20} />
                  <span className="text-slate-700">Zero-VOC formulation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-16 text-center">Signature Collections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Interior Luxe', 'Exterior Armor', 'Artisan Textures'].map((collection, idx) => (
              <div 
                key={idx}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => navigate('products')}
              >
                <div className={`absolute inset-0 ${
                  idx === 0 ? 'bg-gradient-to-br from-slate-800 to-slate-600' :
                  idx === 1 ? 'bg-gradient-to-br from-slate-700 to-amber-800' :
                  'bg-gradient-to-br from-amber-700 to-amber-900'
                }`}></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-2">{collection}</h3>
                    <p className="text-slate-200 mb-4">Discover the collection</p>
                    <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Products Page
  const ProductsPage = () => (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-slate-900 mb-6">Product Catalog</h1>
          <p className="text-xl text-slate-600">Premium coatings for every application</p>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          {[
            { label: 'All Products', value: 'all' },
            { label: 'Interior', value: 'interior' },
            { label: 'Exterior', value: 'exterior' },
            { label: 'Textures', value: 'texture' },
            { label: 'Industrial', value: 'industrial' },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === cat.value
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="h-48" style={{ backgroundColor: product.color }}></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wide text-amber-600 font-semibold mb-2">
                  {product.finish}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4 capitalize">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900">{product.price}</span>
                  <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-600 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Visualizer Page
  const VisualizerPage = () => (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-slate-900 mb-6">Virtual Color Visualizer</h1>
          <p className="text-xl text-slate-600">See your color choices come to life</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Room Preview */}
          <div className="bg-slate-50 rounded-3xl p-8 shadow-xl">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-3">Select Room</label>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedRoom('living')}
                  className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                    selectedRoom === 'living' ? 'bg-amber-600 text-white' : 'bg-white text-slate-600'
                  }`}
                >
                  Living Room
                </button>
                <button
                  onClick={() => setSelectedRoom('kitchen')}
                  className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                    selectedRoom === 'kitchen' ? 'bg-amber-600 text-white' : 'bg-white text-slate-600'
                  }`}
                >
                  Kitchen
                </button>
              </div>
            </div>

            {/* Simple Room SVG */}
            <div className="bg-white rounded-2xl p-8 shadow-inner">
              <svg viewBox="0 0 400 300" className="w-full">
                {/* Floor */}
                <rect x="0" y="220" width="400" height="80" fill="#D4C5B9" />
                
                {/* Main Wall */}
                <rect x="0" y="0" width="400" height="220" fill={roomColor} />
                
                {/* Window */}
                <rect x="150" y="40" width="100" height="120" fill="#E0F2FE" stroke="#94A3B8" strokeWidth="3" />
                <line x1="150" y1="100" x2="250" y2="100" stroke="#94A3B8" strokeWidth="3" />
                <line x1="200" y1="40" x2="200" y2="160" stroke="#94A3B8" strokeWidth="3" />
                
                {/* Furniture - Sofa */}
                {selectedRoom === 'living' && (
                  <>
                    <rect x="80" y="180" width="120" height="40" fill="#475569" rx="5" />
                    <rect x="70" y="175" width="15" height="50" fill="#475569" rx="3" />
                    <rect x="200" y="175" width="15" height="50" fill="#475569" rx="3" />
                  </>
                )}
                
                {/* Furniture - Table */}
                {selectedRoom === 'kitchen' && (
                  <>
                    <ellipse cx="200" cy="200" rx="60" ry="40" fill="#8B7355" />
                    <rect x="170" y="195" width="10" height="25" fill="#6B5A47" />
                    <rect x="220" y="195" width="10" height="25" fill="#6B5A47" />
                  </>
                )}
              </svg>
            </div>
          </div>

          {/* Color Swatches */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Choose Your Color</h3>
            <div className="grid grid-cols-2 gap-4">
              {colorSwatches.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => setRoomColor(color.hex)}
                  className={`group relative h-32 rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 ${
                    roomColor === color.hex ? 'ring-4 ring-amber-600 ring-offset-2' : ''
                  }`}
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-3">
                    <div className="font-semibold text-sm text-slate-900">{color.name}</div>
                    <div className="text-xs text-slate-600 font-mono">{color.hex}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
              <h4 className="font-bold text-slate-900 mb-2">Current Selection</h4>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg shadow-md" style={{ backgroundColor: roomColor }}></div>
                <div>
                  <div className="font-mono text-sm text-slate-600">{roomColor}</div>
                  <button className="text-amber-600 hover:text-amber-700 font-medium text-sm mt-1">
                    Request Sample →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Calculator Page
  const CalculatorPage = () => (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-slate-900 mb-6">Paint Calculator</h1>
          <p className="text-xl text-slate-600">Calculate exactly how much paint you need</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Wall Height (meters)
              </label>
              <input
                type="number"
                value={calcHeight}
                onChange={(e) => setCalcHeight(e.target.value)}
                placeholder="e.g., 2.5"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none text-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Wall Width (meters)
              </label>
              <input
                type="number"
                value={calcWidth}
                onChange={(e) => setCalcWidth(e.target.value)}
                placeholder="e.g., 4.0"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none text-lg"
              />
            </div>
          </div>

          <button
            onClick={calculatePaint}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
          >
            Calculate Paint Needed
          </button>

          {calcResult && (
            <div className="mt-8 p-8 bg-slate-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Results</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">{calcResult.area} m²</div>
                  <div className="text-sm text-slate-600">Total Area</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">{calcResult.liters} L</div>
                  <div className="text-sm text-slate-600">Liters Needed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">{calcResult.gallons} gal</div>
                  <div className="text-sm text-slate-600">Gallons Needed</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-xl border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong>Note:</strong> This calculation assumes one coat. For best results, we recommend 
                  two coats. Add 10% extra for texture or porous surfaces.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">1 L</div>
            <div className="text-sm text-slate-600">Covers ~10 m²</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">2</div>
            <div className="text-sm text-slate-600">Coats Recommended</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">+10%</div>
            <div className="text-sm text-slate-600">Extra for Waste</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Gallery Page
  const GalleryPage = () => (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-slate-900 mb-6">Inspiration Gallery</h1>
          <p className="text-xl text-slate-600">Transformations that inspire</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {gallery.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-3xl shadow-xl">
              <div className="grid grid-cols-2">
                <div className="relative h-80" style={{ backgroundColor: item.before }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-bold text-slate-900">
                      Before
                    </span>
                  </div>
                </div>
                <div className="relative h-80" style={{ backgroundColor: item.after }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-bold text-slate-900">
                      After
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 text-white p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">Professional transformation</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Contact Page
  const ContactPage = () => (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600">Request a color consultation with our experts</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 bg-gradient-to-br from-slate-900 to-amber-900 text-white">
              <h2 className="text-3xl font-bold mb-6">Color Consultation</h2>
              <p className="text-slate-200 mb-8 leading-relaxed">
                Our color experts will help you find the perfect palette for your space. 
                Book a free consultation today.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-300">info@elitepaint.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Home className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold">Showroom</div>
                    <div className="text-slate-300">123 Design District, NYC</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none">
                    <option>Residential Interior</option>
                    <option>Residential Exterior</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ProductsPage />;
      case 'visualizer':
        return <VisualizerPage />;
      case 'calculator':
        return <CalculatorPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {renderPage()}
    </div>
  );
};

export default App;