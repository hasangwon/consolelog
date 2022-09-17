import { useState, useEffect, useRef, useCallback } from "react";
import { MenuType } from "../pages/index";

interface HeaderMenuProp {
  menu: MenuType;
  index: number;
  handleMenu: (index: number) => void;
  isShowMenu: number;
  handleMenuCancel: () => void;
}

const HeaderMenu = ({ menu, index, handleMenu, isShowMenu, handleMenuCancel }: HeaderMenuProp) => {
  const ref = useRef<HTMLButtonElement>(null);
  const handleClickOutside = useCallback(
    (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleMenuCancel();
      }
    },
    [handleMenuCancel]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [handleClickOutside]);
  return (
    <button className="mx-3 hover:bg-white" onClick={() => handleMenu(index)} ref={ref}>
      {menu.name}
      {isShowMenu === index && (
        <ul className="absolute top-[1.7rem] bg-gray-300 min-w-[6rem] py-1 px-2 z-50 rounded-md">
          {menu.child?.map((value: any, index: number) => (
            <li key={index} className="hover:bg-blue-300">
              {value}
            </li>
          ))}
        </ul>
      )}
    </button>
  );
};

export default HeaderMenu;
