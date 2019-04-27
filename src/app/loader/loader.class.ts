import { Observable } from 'rxjs';

export class DataLoader {
    loading: boolean;
    content: any;
    data: any;
    color: string;
    mode: string;
    value: string;

    constructor() {
        this.loading = false;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 'value';
    }
}
