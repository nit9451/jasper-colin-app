import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ProductCard
        imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        title="Modern Chair"
        description="A sleek and comfortable modern chair perfect for any living space. Made with premium materials."
      />
    </main>
  );
}