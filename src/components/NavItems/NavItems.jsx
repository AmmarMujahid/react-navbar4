const NAV_ITEMS = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Blog",
    key: "blog",
  },
  {
    label: "About",
    key: "about",
  },
  {
    label: "Contact",
    key: "contact",
  },
];

export default function NavItems({ activePage, setActivePage }) {
  return (
    <>
      <div className="flex justify-end gap-8 mr-8 font-medium text-[#FCFAF9] ">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.key}
            className={`cursor-pointer hover:underline ${activePage === item.key ? "text-red-500": ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActivePage(item.key);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
