import ColorModeToggle from "./colorModeToggle";

const Header = () => {
    return (
        <div className="flex h-12 items-center justify-between">
            <h1 className="text-xl font-bold">React Map GL Sample</h1>
            <ColorModeToggle />
        </div>
    );
};

export default Header;
