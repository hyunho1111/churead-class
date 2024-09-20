import React from "react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { RiEditBoxFill, RiHome5Fill, RiHome5Line } from "react-icons/ri";
// import { RiHome5Fill } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
// import { RiEditBoxFill } from "react-icons/ri";
// import { FaUser } from "react-icons/fa6";
import { FaRegUser, FaUser } from "react-icons/fa6";

const Nav = () => {
  // logic
  // navList라는 변수를 만든다(배열)
  // navList 배열에는 각 네비게이션에 대한 데이터를 객체로 작성
  // li태그 한개만 놔두고 다 삭제
  // html부분에서 li태그를 navListdml map을 이용해서 반복 생성함
  // li태그에 key라는 prop에 요소의 id값 연결
  // html요소에 속성(to, icon)을 navList의 각객체의 값으로 연결

  const location = useLocation();


  // * 사용자가 현재 머무르는 페이지에 따라 nav 아이콘 활성화 아이콘 으로 변경
  // 사용자가 현재 머무르는 페이지의 pathname가져오기
  // 해당 pathname과 map을 돌리는 nav라는 요소에 pathname이 같은지 체크
  // 체크한 값이 true면 activeIcon으로 변경
  // 체크한 값이 false면 icon으로 보여주기

  const navList = [
    {
      id: 1,
      pathname: "/",
      icon: <RiHome5Line size={"28px"} />,
      activeIcon: <RiHome5Fill size={"28px"} />,
    },
    {
      id: 2,
      pathname: "/post",
      icon: <RiEditBoxLine size={"28px"} />,
      activeIcon: <RiEditBoxFill size={"28px"} />,
    },
    {
      id: 3,
      pathname: "/profile",
      icon: <FaRegUser size={"24px"} />,
      activeIcon: <FaUser size={"24px"} />,
    },
  ];



  // view
  return (
    <nav className="fixed bottom-0 bg-churead-gray-800 w-full max-w-[572px]">
      <ul className="flex justify-center">
        {navList.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.pathname} className="block p-6">
              {location.pathname === nav.pathname ? nav.activeIcon : nav.icon}
              {/* {nav.icon} */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
