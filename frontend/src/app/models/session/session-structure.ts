export class SessionStructure {
    id: number;
    name: string;
    task: string[];

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            data.task.forEach(task => {
                this.task.push(task);
            });
        }
    }
}
