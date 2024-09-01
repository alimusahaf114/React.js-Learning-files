export default function Layout({ header, children, footer }) {
  return (
    <div className="layout">
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}
