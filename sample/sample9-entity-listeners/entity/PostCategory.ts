import {GeneratedPrimaryColumn, Column, Table} from "../../../src/index";
import {Post} from "./Post";
import {ManyToMany} from "../../../src/decorator/relations/ManyToMany";
import {AfterRemove} from "../../../src/decorator/listeners/AfterRemove";
import {BeforeRemove} from "../../../src/decorator/listeners/BeforeRemove";
import {AfterUpdate} from "../../../src/decorator/listeners/AfterUpdate";
import {BeforeUpdate} from "../../../src/decorator/listeners/BeforeUpdate";
import {AfterInsert} from "../../../src/decorator/listeners/AfterInsert";
import {BeforeInsert} from "../../../src/decorator/listeners/BeforeInsert";

@Table("sample9_post_category")
export class PostCategory {

    @GeneratedPrimaryColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Post, post => post.categories, {
        cascadeInsert: true,
        cascadeUpdate: true,
        cascadeRemove: true
    })
    posts: Post[] = [];

    @BeforeInsert()
    doSomethingBeforeInsertion() {
        console.log(`event: PostCategory "${this.name}" will be inserted so soon...`);
    }

    @AfterInsert()
    doSomethingAfterInsertion() {
        console.log(`event: PostCategory "${this.name}" has been inserted and callback executed`);
    }

    @BeforeUpdate()
    doSomethingBeforeUpdate() {
        console.log(`event: PostCategory "${this.name}" will be updated so soon...`);
    }

    @AfterUpdate()
    doSomethingAfterUpdate() {
        console.log(`event: PostCategory "${this.name}" has been updated and callback executed`);
    }

    @BeforeRemove()
    doSomethingBeforeRemove() {
        console.log(`event: PostCategory "${this.name}" will be removed so soon...`);
    }

    @AfterRemove()
    doSomethingAfterRemove() {
        console.log(`event: PostCategory "${this.name}" has been removed and callback executed`);
    }

}