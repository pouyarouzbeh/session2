import ProductItem from "./ProductItem";

export default function ProductList({ items }) {
  // آرایهٔ فیلترشده برای محصولات ارزان
  // const cheapItems = items.filter(p => p.price <= 100000);
  

  return (
    <>
      <h3>همهٔ محصولات</h3>
      <ul>
        {items.map(p => (
          <ProductItem key={p.id} title={p.title} price={p.price} />
        ))}
      </ul>

      {/* <h3>محصولات اقتصادی (≤ ۱۰۰هزار)</h3>
      <ul>
        {cheapItems.map(p => (
          <ProductItem key={p.id} title={p.title} price={p.price} />
        ))}
      </ul> */}
    </>
  );
}
