import Image from "next/image";
import SidebarMenuItem from "./UI/SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  HashtagIcon,
  BookmarkIcon,
  BellIcon,
  ClipboardIcon,
  InboxIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 lg:items-start fixed h-full">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-200 lg:p-1">
        <Image
          width="50"
          height="50"
          src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png"
          alt="Twitter-logo"
        ></Image>
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 lg:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>

      {/* Button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>
      {/* Mini-Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center lg:justify-start mt-2">
        <img
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
          alt="User Profile Image"
          className="h-10 w-10 rounded-full xl:mr-2"
        />
        <div className="leading-5 hidden lg:inline">
          <h4 className="font-bold">Natnael Yohanes</h4>
          <p className="text-gray-500">@nama21yo</p>
        </div>
        <EllipsisHorizontalCircleIcon className="h-7 xl:ml-8 lg:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
