export interface PostStateInterface {
  _id?: string,
  title: string;
  message: string;
  creator: string;
  tags: string;
  selectedFile: string;
  likeCount?: number,
  createdAt?: Date
}

export type LoadingStatus = "loading" | "loaded" | "not loaded" | "error";

export type DefaultLoadingStatus = {
  loading: LoadingStatus;
  error?: string; 
};

export type PostsState = DefaultLoadingStatus & {
  posts: PostStateInterface[]
}