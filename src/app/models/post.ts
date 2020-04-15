export class Post{
    //Agregar export a la clase para poder utilizarla despues en otros ficheros
    constructor(
        public id: number,
        public user_id: string,
        public category_id: number,
        public title:string,
        public content: string,
        public image: string,
        public created_at: any
    ){
    }
}