export class Todo {
    public _id: any;
    public content!: string;
    public isCompleted: boolean;

    constructor() {
        this.isCompleted = false;
    }
}
