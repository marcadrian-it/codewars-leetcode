type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail!.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const value = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = undefined;
        }
        this.length--;
        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
