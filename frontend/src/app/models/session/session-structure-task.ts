export class SessionStructureTask {
    id: number;
    name: string;
    title: string;
    description: string;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.title = data.title;
            this.description = data.description;
        }
    }
}
