import Frame from "@/src/components/modal/Frame";
import sajadImage from "@/src/assets/sajad-image.jpg";


export default function PhotoPage() {
    
    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700 ">
                <Frame  photo={sajadImage} />
            </div>
        </div>
    );
}
