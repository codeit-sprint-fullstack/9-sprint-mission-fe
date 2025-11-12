export default function PageContainer({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      <main>{children}</main>
    </div>
  );
}
