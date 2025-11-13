import BooksList from "@/components/BooksList";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Biblioteca Digital
          </h1>
          
        </header>
        
        <BooksList />
      </div>
    </main>
  );
}
