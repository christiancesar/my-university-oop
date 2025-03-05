export abstract class Connection {
  abstract connect(): void;
  abstract disconnect(): void;
  abstract getInstance(): any;
}
