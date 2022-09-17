import type { NextPage } from "next";
import { useState } from "react";
import HeaderMenu from "../components/HeaderMenu";

const Home: NextPage = () => {
  const [hoverBox, setHoverBox] = useState([]);
  const [isShowMenu, setIsShowMenu] = useState(-1);
  const handleMenu = (index: number) => {
    setIsShowMenu(index);
  };
  const handleMenuCancel = () => {
    setIsShowMenu(-1);
  };
  const [code, setCode] = useState("<div>hello<div>");
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex items-center bg-gray-100 h-[2rem] text-[0.825rem]">
        {HEADER.map((menu, index) => (
          <HeaderMenu key={index} menu={menu} index={index} handleMenu={handleMenu} isShowMenu={isShowMenu} handleMenuCancel={handleMenuCancel} />
        ))}
      </div>
      <div className="flex flex-row bg-blue-100 h-[100%]">
        <div className="bg-gray-100 overflow-hidden w-[16rem]">
          <img src="/leftBG.png" className="h-full" alt="image" />
        </div>
        <div className="flex flex-col bg-gray-600 w-[100%] ">
          <div className="flex justify-between items-center border h-[2rem] bg-gray-700">
            <div>X O 1</div>
            <div>
              <input type="search" className="h-[1.5rem] bg-gray-800 border brder-gray-100 px-3" placeholder="console.log" />
            </div>
            <div>image</div>
          </div>
          <div className="flex flex-row border flex-1">
            <div className="flex border">
              <ul className="w-[3rem] bg-gray-800">
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
              </ul>
              <div className="w-[8rem]">
                <h3 className="bg-gray-800">탐색기</h3>
                <h3 className="bg-gray-800">메뉴1</h3>
                <ul>
                  <li>compoenent</li>
                  <li>compoenent</li>
                  <li>compoenent</li>
                  <li>compoenent</li>
                  <li>compoenent</li>
                </ul>
                <h3 className="bg-gray-800">메뉴2</h3>
                <ul>
                  <li>compoenent</li>
                  <li>compoenent</li>
                  <li>compoenent</li>
                  <li>compoenent</li>
                </ul>
                <h3 className="bg-gray-800">메뉴3</h3>
                <ul>
                  <li>compoenent</li>
                  <li>compoenent</li>
                  <li>compoenent</li>
                </ul>
              </div>
            </div>
            <div className="w-full border">
              <div className="flex flex-col w-full h-[75%] border">
                <div className="flex bg-gray-800 ">
                  <li className="hover:bg-gray-500">file1.tsx</li>
                  <li className="hover:bg-gray-500">file2.tsx</li>
                </div>
                <div>{code}</div>
              </div>
              <div className="w-full h-[25%] border bg-black text-white">
                <div>
                  <span>(base) ➜ consolelog git:(main)</span>
                  <span> terminal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export interface MenuType {
  id: number;
  name: string;
  child: string[];
}
const HEADER = [
  { id: 0, name: "image", child: ["이 Mac에 관하여", "", "시스템 환경설정...", "App Store...", "", "최근 사용 항목", "", "Code 강제 종료", "", "잠자기", "재시동...", "시스템 종료...", "", "화면 잠금", "하상원 로그아웃..."] },
  { id: 1, name: "Code", child: ["Visual Studio 정보", "다시 시작 및 업데이트", "", "기본 설정", "", "서비스", "", "Visual Studio Code 숨기기", "기타 숨기기", "모두 표시", "", "Visual Studio Code 종료"] },
  { id: 2, name: "파일", child: ["기본 메뉴", "메뉴 세팅", "", "메뉴 열기"] },
  { id: 3, name: "편집", child: ["기본 메뉴", "메뉴 세팅", "", "메뉴 열기"] },
  { id: 4, name: "선택 영역", child: ["기본 메뉴", "메뉴 세팅", "", "메뉴 열기"] },
  { id: 5, name: "보기", child: ["기본 메뉴", "메뉴 세팅", "", "메뉴 열기"] },
  { id: 6, name: "이동", child: ["기본 메뉴", "메뉴 세팅", "", "메뉴 열기"] },
  { id: 7, name: "실행", child: ["기본 메뉴", "메뉴 세팅", "", "메뉴 열기"] },
  { id: 8, name: "터미널", child: ["기본 메뉴", "메뉴 세팅", "", "메뉴 열기"] },
  { id: 9, name: "창", child: ["기본 메뉴", "메뉴 세팅", "", "메뉴 열기"] },
  { id: 10, name: "도움말", child: ["기본 메뉴", "메뉴 세팅", "", "메뉴 열기"] },
];

export default Home;
