const SidebarMenuItem = ({ text, Icon, active }) => {
  return (
    <div className="hoverEffect flex items-center text-gray-700 justify-center lg:justify-start text-lg space-x-3 ">
      <Icon className="h-7"></Icon>
      {/* // if it is active make the font bold */}
      <span className={`${active && "font-bold"} hidden lg:inline`}>
        {text}
      </span>
    </div>
  );
};

export default SidebarMenuItem;
