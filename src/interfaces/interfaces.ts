export interface formValues {
  title: string;
  description: string;
}
export interface Errors {
  title?: string;
  description?: string;
}

export interface Stream {
  id: number;
  title: string;
  description: string;
}

export interface StreamAction {
  type: string,
  payload: Stream
}