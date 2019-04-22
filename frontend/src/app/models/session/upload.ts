export class Upload {
    id: number;
    name: string;
    data: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.data = data.data;
    }
}
