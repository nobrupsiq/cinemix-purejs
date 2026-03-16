const HeaderMenu = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur">
      <div className="flex items-center justify-between p-page tracking-[2px] container mx-auto">
        <div>
          <h1 className="text-4xl uppercase font-display text-white">
            Cine<span className="text-mu">Mix•</span>
          </h1>
        </div>
        <nav className="font-body text-xs font-bold text-gr">
          <ul className="flex gap-10 uppercase items-center">
            <li className="link-underline after:duration-300 pt-2 hover:text-white">
              <a href="">Início</a>
            </li>
            <li className="link-underline after:duration-300 pt-2 hover:text-white">
              <a href="">Filmes</a>
            </li>
            <li className="link-underline after:duration-300 pt-2 hover:text-white">
              <a href="">Combos</a>
            </li>
            <li className="link-underline after:duration-300 pt-2 hover:text-white">
              <a href="">Programação</a>
            </li>
            <li>
              <button className="btn-primary">
                <span>Ingressos</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;
