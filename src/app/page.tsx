import Map from "@/components/custom/map";

const Home = () => {
    return (
        <div className="h-160 overflow-hidden rounded-md">
            <Map initialLongitude={139.8063367782008} initialLatitude={35.7487843041853} initialZoom={15.4} />
        </div>
    );
};

export default Home;
