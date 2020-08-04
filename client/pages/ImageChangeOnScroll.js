import React, { useRef, useEffect, useState } from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {

    return <div>

        {[187, 823, 1124, 1269, 1530, 1725, 2920, 5996, 6548, 8367, 8590, 10803].map((speakerId, index) => {
            return (
                <ImageToggleOnScroll
                    key={index}
                    primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
                    secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
                    alt="" />

            );

        })}

    </div>
};

export default ImageChangeOnScroll;