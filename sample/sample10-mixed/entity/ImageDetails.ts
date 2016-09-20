import {GeneratedPrimaryColumn, Column, Table, OneToOne} from "../../../src/index";
import {Image} from "./Image";

@Table("sample10_image_details")
export class ImageDetails {

    @GeneratedPrimaryColumn()
    id: number;

    @Column()
    meta: string;

    @Column()
    comment: string;

    @OneToOne(type => Image, image => image.details)
    image: Image;

}