export type ReviewableArticle = {
  data: {
    author?: string;
    reviewStatus: 'pending' | 'approved';
  };
};

export const isPublishableArticle = <T extends ReviewableArticle>(
  entry: T,
): entry is T & { data: T['data'] & { author: string } } =>
  entry.data.reviewStatus === 'approved' && Boolean(entry.data.author?.trim());
