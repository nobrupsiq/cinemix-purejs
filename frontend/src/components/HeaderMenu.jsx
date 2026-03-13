const HeaderMenu = () => {
  return (
    <div className="flex items-center justify-between p-page tracking-[2px] sticky top-0 z-100">
      <div>
        <h1 className="text-4xl uppercase font-display text-white">
          Cine<span className="text-mu">Mix•</span>
        </h1>
      </div>
      <nav className="font-body text-xs font-bold text-gr">
        <ul className="flex gap-10 uppercase items-center">
          <li className="link-underline after:duration-300 pt-2">
            <a href="">Início</a>
          </li>
          <li className="link-underline after:duration-300 pt-2">
            <a href="">Filmes</a>
          </li>
          <li className="link-underline after:duration-300 pt-2">
            <a href="">Combos</a>
          </li>
          <li className="link-underline after:duration-300 pt-2">
            <a href="">Programação</a>
          </li>
          <li>
            <a
              className="bg-mu pt-3 pb-3 pr-6 pl-6 rounded-xs text-black"
              href=""
            >
              Ingressos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
