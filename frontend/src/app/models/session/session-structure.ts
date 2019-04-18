import { SessionStructureTask } from './session-structure-task';

export class SessionStructure {
    id: number;
    name: string;
    tasks: SessionStructureTask[];

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            data.tasks.forEach(task => {
                this.tasks.push(task);
            });
        }
    }
}
