import { Link } from "react-router-dom";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; url: string }[];
}

const DrawerMenu = ({ isOpen, onClose, navItems }: DrawerMenuProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={onClose}
        >
          <div
            className="fixed top-0 left-0 z-50 w-80 h-screen p-4 bg-white overflow-y-auto shadow transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800 uppercase">Menu</h2>
              <button onClick={onClose} className="text-gray-600 hover:text-black">✕</button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  onClick={onClose}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default DrawerMenu;
