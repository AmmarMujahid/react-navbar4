import Button from "../Buttons/Button";
import NavItems from "../NavItems/NavItems";

// eslint-disable-next-line react/prop-types
export default function Navbar({ activePage, setActivePage}) {
  return (
    <>
      <div className="container px-6 mx-auto bg-[#333333] rounded-md mt-4 shadow-lg">
        <div className="flex justify-between items-center py-6">
          {/* --------- LOGO --------- */}
          <div>
            <a href="#" className="text-xl text-[#FCFAF9] font-medium">
              The Mathematics Outlet
            </a>
          </div>
          {/* --------- NAV ITEMS --------- */}
          <div className="flex-1">
            <NavItems activePage={activePage} setActivePage={setActivePage} />
          </div>
          {/* --------- BUTTONS --------- */}
          <div className="flex gap-8">
            <Button>Login</Button>
            <Button>SignUp</Button>
          </div>
        </div>
      </div>
    </>
  );
}
