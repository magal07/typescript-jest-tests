import type { MessagingProtocol } from '../classes/interfaces/messaging-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Message sent:', msg);
  }
}
