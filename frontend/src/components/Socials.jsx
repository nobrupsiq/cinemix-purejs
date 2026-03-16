const Socials = ({ href, children }) => {
  return (
    <div className="border border-gr/20 rounded-sm2 group hover:border-mu transition duration-400 opacity-80 hover:opacity-100">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-2 text-gr group-hover:text-mu"
      >
        {children}
      </a>
    </div>
  );
};

export default Socials;
