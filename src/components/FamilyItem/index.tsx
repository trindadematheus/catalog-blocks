import { Family } from "@/types/family";
import * as S from "./styles";
import Image from "next/image";

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
            width={176}
            height={198}
            loader={() => src}
            src={src}
            alt={`${family.details.name}: ${family.details.description}`}
            placeholder="blur"
            blurDataURL="/image-placeholder.png"
          />
        </S.ImageArea>

        <S.InfoArea>
          <h2 className="family-name">{family.details.name}</h2>
          <div className="separator" />
          <button className="btn">#</button>
        </S.InfoArea>
      </S.Container>
    </>
  );
}

export default FamilyItem;
