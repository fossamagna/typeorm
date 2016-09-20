import {GeneratedPrimaryColumn, Column, Table, OneToOne} from "../../../src/index";
import {Post} from "./Post";

@Table("sample2_post_information")
export class PostInformation {

    @GeneratedPrimaryColumn()
    id: number;

    @Column()
    text: string;
    
    @OneToOne(type => Post, post => post.information, {
        cascadeUpdate: true,
    })
    post: Post;

}