export class Todo {
    private _done: boolean = false;

    get done(): boolean {
        return this._done;
    }

    constructor(public text: string) {
    }

    finish(): void {
        this._done = true;
    }
}

export class ScheduledTodo extends Todo {

    static DAY_IN_MS = (1000 * 60 * 60 * 24);

    static tomorrow(): Date {
        return new Date(new Date().getTime() + ScheduledTodo.DAY_IN_MS);
    }

    private _dueDate: Date;

    set dueDate(dueDate: Date) {
        // date can only be set, if todo is not done
        if (!this.done) {
            let today = new Date();
            if (today.getTime() < dueDate.getTime()) {
                this._dueDate = dueDate;
            }
        }
    }

    get dueDate(): Date {
        return this._dueDate;
    }

    constructor(text: string, dueDate: Date = ScheduledTodo.tomorrow()) {
        super(text);

        if (dueDate.getTime() < new Date().getTime()) {
            dueDate = ScheduledTodo.tomorrow();
        }
        this.dueDate = dueDate;
    }

    daysLeft(): number {
        let today = new Date();
        return Math.round((this.dueDate.getTime() - today.getTime()) / ScheduledTodo.DAY_IN_MS);
    }
}
