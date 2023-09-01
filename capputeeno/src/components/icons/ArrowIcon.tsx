"use client";
import { styled } from "styled-components";

const SVG = styled.svg<{ $facing: directionEnum }>`
    transform: rotate(
        ${(props) => {
            switch (props.$facing) {
                case directionEnum.LEFT:
                    return "90deg";
                    break;
                case directionEnum.UP:
                    return "180deg";

                    break;
                case directionEnum.RIGHT:
                    return "270deg";

                    break;
                default:
                    return "";
            }
        }}
    );
`;
export enum directionEnum {
    "UP",
    "RIGHT",
    "DOWN",
    "LEFT",
}
interface ArrowIconProps {
    direction?: directionEnum;
}
export function ArrowIcon({ direction }: ArrowIconProps) {
    return (
        <SVG
            $facing={direction ?? directionEnum.DOWN}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Group">
                <path
                    id="Path"
                    d="M8 10L12 14L16 10"
                    stroke="#737380"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </SVG>
    );
}
