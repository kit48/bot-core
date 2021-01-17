// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportTulingIndex from '../../../app/service/tuling/index';
import ExportTulingInterfaces from '../../../app/service/tuling/interfaces';
import ExportBilibiliCoversIndex from '../../../app/service/bilibili/covers/index';
import ExportBilibiliCoversInterfaces from '../../../app/service/bilibili/covers/interfaces';
import ExportImagesBaiduIndex from '../../../app/service/images/baidu/index';
import ExportImagesBaiduInterfaces from '../../../app/service/images/baidu/interfaces';
import ExportSnh48gTicketsIndex from '../../../app/service/snh48g/tickets/index';
import ExportSnh48gTicketsInterfaces from '../../../app/service/snh48g/tickets/interfaces';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    tuling: {
      index: AutoInstanceType<typeof ExportTulingIndex>;
      interfaces: AutoInstanceType<typeof ExportTulingInterfaces>;
    }
    bilibili: {
      covers: {
        index: AutoInstanceType<typeof ExportBilibiliCoversIndex>;
        interfaces: AutoInstanceType<typeof ExportBilibiliCoversInterfaces>;
      }
    }
    images: {
      baidu: {
        index: AutoInstanceType<typeof ExportImagesBaiduIndex>;
        interfaces: AutoInstanceType<typeof ExportImagesBaiduInterfaces>;
      }
    }
    snh48g: {
      tickets: {
        index: AutoInstanceType<typeof ExportSnh48gTicketsIndex>;
        interfaces: AutoInstanceType<typeof ExportSnh48gTicketsInterfaces>;
      }
    }
  }
}
