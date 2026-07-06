function Button({
  children,
  href,
  outline = false,
}) {
  return (
    <a
      href={href}
      className={
        outline
          ? "btn btn-outline"
          : "btn"
      }
    >
      {children}
    </a>
  );
}

export default Button;