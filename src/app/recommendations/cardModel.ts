export class cardModel {
    name: string;
    img: any;
    text: string;
    socialLink: string;


    constructor(name,img,text,social){
        this.name = name;
        this.img = img;
        this.text = text;
        this.socialLink = social;
    }
}