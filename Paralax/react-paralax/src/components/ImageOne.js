import { Parallax } from "react-parallax";
import Baby1 from "../img/Baby1.jpg";

const ImageOne = () => {
  return (
    <Parallax className="image" bgImage={Baby1} strength={800}>
        <div className="content" heigh>
            <span className="img-txt">Baby1</span>
        </div>
    </Parallax>
  )
}

export default ImageOne