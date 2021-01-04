export interface TulingResult {
  indent: {
    actionName: string;
    code: number;
    intendName: string;
  };
  results: {
    groupType: number;
    resultType: string;
    values: {
      text: string;
    };
  }[];
}
