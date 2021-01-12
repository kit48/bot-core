/** 1: 可购买，0: 不可购买 */
export type TicketStatus = 0 | 1;

export interface TicketItem {
  addtime: string;
  cstatus: TicketStatus;
  group: 'snh';
  id: string;
  special: string;
  /** 普通站票 */
  sstatus: TicketStatus;
  teamname: 'h' | 'x' | 'bej48';
  theme: string;
  ticketsid: string;
  title: string;
  vip_url: string;
  vstatus: TicketStatus;
}

export interface TicketsReult {
  status: string;
  desc: TicketItem[];
}
