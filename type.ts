export type NavItem = {
    id?: number,
    name: string,
    path: string
}

// Scroll card
export type ScrollCardData = {
    id?: number,
    heading: string,
    subHeading: string
}
// Scroll card
export type ServiceScrollCardData = {
    id?: number,
    imageUrl: string,
    heading: string,
    description: string
}

// sustainability Scroll card
export type SustainabilityScrollCardData = {
    id?: number,
    imageUrl: string,
    description: string

}
// hover part from the home 
export interface ImageCardProps {
  data: {
    id: number;
    image: string;
    heading: string;
    subheading: string;
    link?: string; 
  };
  isHovered: boolean;
  isAnyHovered?: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}


// Manufacturing
export type ManufacturingProps = {
    id: number,
    heading: string,
    category: string,
    subheading: string,
    image: string,
}

// ToolRoom
export type ToolRoomProps = {
    id: number,
    heading: string,
    description1: string,
    description2: string,
    image: string,
}

// StateofArt
export type StateofArtProps = {
    id: number,
    heading: string,
    description1: string,
    description2: string,
    image: string,
}

//service page supply chain
export type SupplyChainProps = {
    id: number,
    heading: string,
    category: string,
    subheading: string,
    image: string,
    subhead1: string,
    content1: string,
    subhead2: string,
    content2: string,
}

//Precision 
export type PrecisionProps = {
    id: number,
    heading: string,
    category: string,
    image: string,

}

export type processProps = {
    data: {
        id: number,
        number: string,
        heading: string,
        content: string
    }
}

export type MachineCardBannerProps = {
    data: {
        id: number,
        img: string,
        text: {
            title: string,
            description: string
        }
    }
}