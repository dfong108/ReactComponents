import { Parallax } from "react-parallax";
import Baby2 from "../img/Baby2.jpg";

const ImageOne = () => {
  return (
    <Parallax className="image" bgImage={Baby2} strength={800}>
        <div className="content" heigh>
            <span className="img-txt">Baby2</span>
        </div>
    </Parallax>
  )
}

export default ImageOne