import React from "react";
import IconHotCoffe from "../../assets/images/icon/icon-hot-coffe.svg";
import IconPetCoffe from "../../assets/images/icon/icon-pet-coffe.svg";
import IconCupCoffe from "../../assets/images/icon/icon-cup-coffe.svg";

import IconCoffe from "../../assets/images/icon/icon-coffe.svg";
import IconVegan from "../../assets/images/icon/icon-vegan.svg";
import IconCyclist from "../../assets/images/icon/icon-cyclist.svg";

import "./Features.modules.css";
import CardFeature from "./CardFeature/CardFeature";
const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container container__section h-100">
        <div className="features__content flex-lg-row flex-column d-flex h-100 justify-content-center justify-content-lg-between align-items-start align-items-lg-center">
          <div className="content d-flex flex-column gap-5 col-12 col-lg-6 order-2 order-lg-1">
            <CardFeature
              icon={IconHotCoffe}
              title="Indoor Seating"
              isLeft={true}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <CardFeature
              icon={IconPetCoffe}
              title="Pet Friendly"
              isLeft={true}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <CardFeature
              icon={IconCupCoffe}
              title="Take Away"
              isLeft={true}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>

          <div className="content d-flex flex-column gap-5 col-12 col-lg-6 order-1 order-lg-2">
            <CardFeature
              icon={IconCoffe}
              title="Indoor Seating"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <CardFeature
              icon={IconVegan}
              title="Vegan Options"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <CardFeature
              icon={IconCyclist}
              title="Cyclist Friendly"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
