import { Parallax } from "react-parallax";
import Baby3 from "../img/Baby3.jpg";

const ImageOne = () => {
  return (
    <Parallax className="image" bgImage={Baby3} strength={800}>
        <div className="content" heigh>
            <span className="img-txt">Baby3</span>
        </div>
    </Parallax>
  )
}

export default ImageOne