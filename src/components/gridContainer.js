import SvgIcon from "@mui/material/SvgIcon";

const GridContainer = ({ heading, details, icon }) => {
    return (
        <div className="flex flex-row gap-4">
            <div className="h-fit rounded-md p-2">
                <SvgIcon style={{ fontSize: 64 }} className="text-nitroPink">{icon}</SvgIcon>
            </div>

            <div className="flex flex-col gap-2 py-4">
                <h2 className="font-main text-2xl font-bold h-8 text-white">{heading}</h2>
                <p className="font-main text-gray-300">{details}</p>
            </div>
        </div>
    );
};

export default GridContainer;
