import {Category} from "./Category";
import {ManyToMany} from "../../../../../src/decorator/relations/ManyToMany";
import {Table} from "../../../../../src/decorator/tables/Table";
import {GeneratedPrimaryColumn} from "../../../../../src/decorator/columns/GeneratedPrimaryColumn";
import {Column} from "../../../../../src/decorator/columns/Column";
import {Tag} from "./Tag";
import {ManyToOne} from "../../../../../src/decorator/relations/ManyToOne";
import {JoinTable} from "../../../../../src/decorator/relations/JoinTable";
import {RelationCount} from "../../../../../src/decorator/relations/RelationCount";

@Table()
export class Post {

    @GeneratedPrimaryColumn()
    id: number;

    @Column()
    title: string;
    
    @ManyToOne(type => Tag)
    tag: Tag;

    @ManyToMany(type => Category)
    @JoinTable()
    categories: Category[];
    
    @RelationCount((post: Post) => post.categories)
    categoriesCount: number;
    
    secondCategoriesCount: number;

}