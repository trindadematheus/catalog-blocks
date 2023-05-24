import Image from "next/image";

import { Family } from "@/types/family";
import * as S from "./styles";

type FamilyItemProps = {
  family: Family;
};

function FamilyItem({ family }: FamilyItemProps) {
  const src = `https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${family.id}.jpg`;

  return (
    <>
      <S.Container>
        <S.ImageArea>
          <Image
            width={112}
            height={169}
            loader={() => src}
            src={src}
            alt={`${family.details.name}: ${family.details.description}`}
            placeholder="blur"
            blurDataURL="/image-placeholder.png"
            style={{ objectFit: "contain" }}
          />
        </S.ImageArea>

        <S.InfoArea>
          <h2 className="family-name">{family.details.name}</h2>
          <div className="separator" />
          <button className="btn">
            <img
              src="/arrow-icon.svg"
              alt="Arrow icon that take you to the description family page"
            />
          </button>
        </S.InfoArea>
      </S.Container>
    </>
  );
}

export default FamilyItem;
