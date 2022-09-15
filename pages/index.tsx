import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="bg-gray-100 h-[1.7rem]">
        <div>
          {HEADER.map((menu, index) => (
            <span key={index} className="mx-4">
              {menu.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-row bg-blue-100 h-[95%]">
        <div className="bg-gray-100 flex-1 overflow-hidden">
          <img src="/leftBG.png" className="h-full" alt="image" />
        </div>
        <div className="flex flex-col bg-yellow-100 w-[80%]">
          <div className="border h-[4rem]">2</div>
          <div className="flex flex-row border flex-1">
            <div className="w-[13rem] border">2-1</div>
            <div className="w-full border">
              <div className="w-full h-[75%] border">code</div>
              <div className="w-full h-[25%] border">terminal</div>
            </div>
          </div>
        </div>
        <div className="bg-purple-100 flex-1">3</div>
      </div>
    </div>
  );
};

const HEADER = [
  { id: 1, name: "Code" },
  { id: 2, name: "파일" },
  { id: 3, name: "편집" },
  { id: 4, name: "선택 영역" },
  { id: 5, name: "보기" },
  { id: 6, name: "이동" },
  { id: 7, name: "실행" },
  { id: 8, name: "터미널" },
  { id: 9, name: "창" },
  { id: 10, name: "도움말" },
];

export default Home;
