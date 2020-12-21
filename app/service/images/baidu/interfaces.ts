/* eslint-disable @typescript-eslint/indent */
export interface ImageItem {
  adType: string;
  hasAspData: string;
  thumbURL: string;
  middleURL: string;
  largeTnImageUrl: string;
  hasLarge: number;
  hoverURL: string;
  pageNum: number;
  objURL: string;
  fromURL: string;
  fromURLHost: string;
  currentIndex: string;
  width: number;
  height: number;
  type: string;
  is_gif: number;
  isCopyright: number;
  resourceInfo: null;
  stringategyAssessment: string;
  filesize: string;
  bdSrcType: string;
  di: string;
  pi: string;
  is: string;
  imgCollectionWord: string;
  replaceUrl: { ObjURL: string; ObjUrl: string; FromURL: string; FromUrl: string }[];
  hasThumbData: string;
  bdSetImgNum: number;
  partnerId: number;
  spn: number;
  bdImgnewsDate: string;
  fromPageTitle: string;
  fromPageTitleEnc: string;
  bdSourceName: string;
  bdFromPageTitlePrefix: string;
  isAspDianjing: number;
  token: string;
  imgType: string;
  cs: string;
  os: string;
  simid: string;
  personalized: string;
  simid_info: null;
  face_info: null;
  xiangshi_info: null;
  adPicId: string;
  source_type: string;
}

export type PureImageItem = Pick<
  ImageItem,
  'thumbURL' | 'middleURL' | 'largeTnImageUrl' | 'replaceUrl' | 'is_gif' | 'fromPageTitle' | 'fromPageTitleEnc'
>;

export interface ImagesResult {
  queryEnc: string;
  queryExt: string;
  listNum: number;
  displayNum: number;
  gsm: string;
  bdFmtDispNum: string;
  bdSearchTime: string;
  isNeedAsyncRequest: number;
  bdIsClustered: string;
  data: ImageItem[];
}
