

export default async function ItemsPage() {
  const res = await fetch("https://sprint-server.onrender.com/products", {
    cache: "no-store",
  });

  const { data } = await res.json();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      
      <h1 className="text-2xl text-black font-bold mb-6">판매 중인 상품</h1>
      <div className="grid grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white rounded-lg p-4 shadow">
            <img
              src={`/Img_home_${item.id}.png`}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <p className="text-black font-bold">
              {item.price.toLocaleString()}원
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
